import Cookies from "js-cookie";
import React, { Component, CSSProperties } from "react";
import { ConditionalWrapper } from "./components/ConditionalWrapper";
import { CookieConsentProps, defaultCookieConsentProps } from "./CookieConsent.props";
import { CookieConsentState, defaultState } from "./CookieConsent.state";
import { POSITION_OPTIONS, SAME_SITE_OPTIONS, VISIBILITY_OPTIONS } from "./models/constants";
import { getCookieConsentValue, getLegacyCookieName } from "./utilities";

export class CookieConsent extends Component<CookieConsentProps, CookieConsentState> {
  public static defaultProps = defaultCookieConsentProps;

  state: CookieConsentState = defaultState;

  componentDidMount() {
    const { debug } = this.props;

    // if cookie undefined or debug
    if (this.getCookieValue() === undefined || debug) {
      this.setState({ visible: true });
      // if acceptOnScroll is set to true and (cookie is undefined or debug is set to true), add a listener.
      if (this.props.acceptOnScroll) {
        window.addEventListener("scroll", this.handleScroll, { passive: true });
      }
    }
  }

  componentWillUnmount() {
    // remove listener if still set
    this.removeScrollListener();
  }

  /**
   * Set a persistent accept cookie
   */
  accept(acceptedByScrolling = false) {
    const { cookieName, cookieValue, hideOnAccept, onAccept } = this.props;

    this.setCookie(cookieName, cookieValue);

    onAccept(acceptedByScrolling ?? false);

    if (hideOnAccept) {
      this.setState({ visible: false });
      this.removeScrollListener();
    }
  }

  /**
   * Handle a click on the overlay
   */
  overlayClick() {
    const { acceptOnOverlayClick, onOverlayClick } = this.props;
    if (acceptOnOverlayClick) {
      this.accept();
    }
    onOverlayClick();
  }

  /**
   * Set a persistent decline cookie
   */
  decline() {
    const { cookieName, declineCookieValue, hideOnDecline, onDecline, setDeclineCookie } =
      this.props;

    if (setDeclineCookie) {
      this.setCookie(cookieName, declineCookieValue);
    }

    onDecline();

    if (hideOnDecline) {
      this.setState({ visible: false });
    }
  }

  /**
   * Function to set the consent cookie based on the provided variables
   * Sets two cookies to handle incompatible browsers, more details:
   * https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
   */
  setCookie(cookieName: string, cookieValue: string | object) {
    const { extraCookieOptions, expires, sameSite } = this.props;
    let { cookieSecurity } = this.props;

    if (cookieSecurity === undefined) {
      cookieSecurity = window.location ? window.location.protocol === "https:" : true;
    }

    const cookieOptions = { expires, ...extraCookieOptions, sameSite, secure: cookieSecurity };

    // Fallback for older browsers where can not set SameSite=None,
    // SEE: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
    if (sameSite === SAME_SITE_OPTIONS.NONE) {
      Cookies.set(getLegacyCookieName(cookieName), cookieValue, cookieOptions);
    }

    // set the regular cookie
    Cookies.set(cookieName, cookieValue, cookieOptions);
  }

  /**
   * Returns the value of the consent cookie
   * Retrieves the regular value first and if not found the legacy one according
   * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
   */
  getCookieValue() {
    const { cookieName } = this.props;
    return getCookieConsentValue(cookieName);
  }

  /**
   * checks whether scroll has exceeded set amount and fire accept if so.
   */
  handleScroll = () => {
    const { acceptOnScrollPercentage } = this.props;

    // (top / height) - height * 100
    const rootNode = document.documentElement;
    const body = document.body;
    const top = "scrollTop";
    const height = "scrollHeight";

    const percentage =
      ((rootNode[top] || body[top]) /
        ((rootNode[height] || body[height]) - rootNode.clientHeight)) *
      100;

    if (percentage > acceptOnScrollPercentage) {
      this.accept(true);
    }
  };

  removeScrollListener = () => {
    const { acceptOnScroll } = this.props;
    if (acceptOnScroll) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };

  render() {
    // If the bar shouldn't be visible don't render anything.
    switch (this.props.visible) {
      case VISIBILITY_OPTIONS.HIDDEN:
        return null;
      case VISIBILITY_OPTIONS.BY_COOKIE_VALUE:
        if (!this.state.visible) {
          return null;
        }
        break;
      default:
        break;
    }

    const {
      location,
      style,
      buttonStyle,
      declineButtonStyle,
      contentStyle,
      disableStyles,
      buttonText,
      declineButtonText,
      containerClasses,
      contentClasses,
      buttonClasses,
      buttonWrapperClasses,
      declineButtonClasses,
      buttonId,
      declineButtonId,
      disableButtonStyles,
      enableDeclineButton,
      flipButtons,
      ButtonComponent,
      overlay,
      overlayClasses,
      overlayStyle,
      ariaAcceptLabel,
      ariaDeclineLabel,
      customContainerAttributes,
      customContentAttributes,
      customButtonProps,
      customDeclineButtonProps,
      customButtonWrapperAttributes,
    } = this.props;

    let myStyle: CSSProperties = {};
    let myButtonStyle: CSSProperties = {};
    let myDeclineButtonStyle: CSSProperties = {};
    let myContentStyle: CSSProperties = {};
    let myOverlayStyle: CSSProperties = {};

    if (disableStyles) {
      // if styles are disabled use the provided styles (or none)
      myStyle = Object.assign({}, style);
      myButtonStyle = Object.assign({}, buttonStyle);
      myDeclineButtonStyle = Object.assign({}, declineButtonStyle);
      myContentStyle = Object.assign({}, contentStyle);
      myOverlayStyle = Object.assign({}, overlayStyle);
    } else {
      // if styles aren't disabled merge them with the styles that are provided (or use default styles)
      myStyle = Object.assign({}, { ...this.state.style, ...style });
      myContentStyle = Object.assign({}, { ...this.state.contentStyle, ...contentStyle });
      myOverlayStyle = Object.assign({}, { ...this.state.overlayStyle, ...overlayStyle });

      // switch to disable JUST the button styles
      if (disableButtonStyles) {
        myButtonStyle = Object.assign({}, buttonStyle);
        myDeclineButtonStyle = Object.assign({}, declineButtonStyle);
      } else {
        myButtonStyle = Object.assign({}, { ...this.state.buttonStyle, ...buttonStyle });
        myDeclineButtonStyle = Object.assign(
          {},
          { ...this.state.declineButtonStyle, ...declineButtonStyle }
        );
      }
    }

    // syntactic sugar to enable user to easily select top / bottom
    switch (location) {
      case POSITION_OPTIONS.TOP:
        myStyle.top = "0";
        break;

      case POSITION_OPTIONS.BOTTOM:
        myStyle.bottom = "0";
        break;
    }

    const buttonsToRender = [];

    // add decline button
    enableDeclineButton &&
      buttonsToRender.push(
        <ButtonComponent
          key="declineButton"
          style={myDeclineButtonStyle}
          className={declineButtonClasses}
          id={declineButtonId}
          aria-label={ariaDeclineLabel}
          onClick={() => {
            this.decline();
          }}
          {...customDeclineButtonProps}
        >
          {declineButtonText}
        </ButtonComponent>
      );

    // add accept button
    buttonsToRender.push(
      <ButtonComponent
        key="acceptButton"
        style={myButtonStyle}
        className={buttonClasses}
        id={buttonId}
        aria-label={ariaAcceptLabel}
        onClick={() => {
          this.accept();
        }}
        {...customButtonProps}
      >
        {buttonText}
      </ButtonComponent>
    );

    if (flipButtons) {
      buttonsToRender.reverse();
    }

    return (
      <ConditionalWrapper
        condition={overlay}
        wrapper={(children) => (
          <div
            style={myOverlayStyle}
            className={overlayClasses}
            onClick={() => {
              this.overlayClick();
            }}
          >
            {children}
          </div>
        )}
      >
        <div className={`${containerClasses}`} style={myStyle} {...customContainerAttributes}>
          <div style={myContentStyle} className={contentClasses} {...customContentAttributes}>
            {this.props.children}
          </div>
          <div className={`${buttonWrapperClasses}`} {...customButtonWrapperAttributes}>
            {buttonsToRender.map((button) => {
              return button;
            })}
          </div>
        </div>
      </ConditionalWrapper>
    );
  }
}

export default CookieConsent;
