import React, { Component } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const OPTIONS = {
  TOP: "top",
  BOTTOM: "bottom",
  NONE: "none",
};

export const SAME_SITE_OPTIONS = {
  STRICT: "strict",
  LAX: "lax",
  NONE: "none",
};

/**
 * Returns the value of the consent cookie
 * Retrieves the regular value first and if not found the legacy one according
 * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 * @param {*} name optional name of the cookie
 */
export const getCookieConsentValue = (name = defaultCookieConsentName) => {
  let cookieValue = Cookies.get(name);

  // if the cookieValue is undefined check for the legacy cookie
  if (cookieValue === undefined) {
    cookieValue = Cookies.get(getLegacyCookieName(name));
  }
  return cookieValue;
};

/**
 * Get the legacy cookie name by the regular cookie name
 * @param {string} name of cookie to get
 */
const getLegacyCookieName = (name) => {
  return `${name}-legacy`;
};

/**
 * Default name of the cookie which is set by CookieConsent
 */
const defaultCookieConsentName = "CookieConsent";

/**
 * A function to wrap elements with a "wrapper" on a condition
 * @param {object} wrappingOptions
 *  condition == boolean condition, when to wrap
 *  wrapper == style to wrap. e.g <div>{children}</div>
 *  children == react passes whatever is between tags as children. Don't supply this yourself.
 */
const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children;
};

class CookieConsent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      style: {
        alignItems: "baseline",
        background: "#353535",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        left: "0",
        position: "fixed",
        width: "100%",
        zIndex: "999",
      },
      buttonStyle: {
        background: "#ffd42d",
        border: "0",
        borderRadius: "0px",
        boxShadow: "none",
        color: "black",
        cursor: "pointer",
        flex: "0 0 auto",
        padding: "5px 10px",
        margin: "15px",
      },
      declineButtonStyle: {
        background: "#c12a2a",
        border: "0",
        borderRadius: "0px",
        boxShadow: "none",
        color: "#e5e5e5",
        cursor: "pointer",
        flex: "0 0 auto",
        padding: "5px 10px",
        margin: "15px",
      },
      contentStyle: {
        flex: "1 0 300px",
        margin: "15px",
      },
      overlayStyle: {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: "999",
        backgroundColor: "rgba(0,0,0,0.3)",
      },
    };
  }

  componentDidMount() {
    const { debug } = this.props;

    // if cookie undefined or debug
    if (this.getCookieValue() === undefined || debug) {
      this.setState({ visible: true });
    }
  }

  /**
   * Set a persistent accept cookie
   */
  accept() {
    const { cookieName, cookieValue, hideOnAccept, onAccept } = this.props;

    this.setCookie(cookieName, cookieValue);

    onAccept();

    if (hideOnAccept) {
      this.setState({ visible: false });
    }
  }

  /**
   * Set a persistent decline cookie
   */
  decline() {
    const {
      cookieName,
      declineCookieValue,
      hideOnDecline,
      onDecline,
      setDeclineCookie,
    } = this.props;

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
  setCookie(cookieName, cookieValue) {
    const { extraCookieOptions, expires, sameSite } = this.props;
    let { cookieSecurity } = this.props;

    if (cookieSecurity === undefined) {
      cookieSecurity = location ? location.protocol === "https:" : true;
    }

    let cookieOptions = { expires, ...extraCookieOptions, sameSite, secure: cookieSecurity };

    // Fallback for older browsers where can not set SameSite=None, SEE: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
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

  render() {
    // If the bar shouldn't be visible don't render anything.
    if (!this.state.visible) {
      return null;
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
    } = this.props;

    let myStyle = {};
    let myButtonStyle = {};
    let myDeclineButtonStyle = {};
    let myContentStyle = {};
    let myOverlayStyle = {};

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
      case OPTIONS.TOP:
        myStyle.top = "0";
        break;

      case OPTIONS.BOTTOM:
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
          <div style={myOverlayStyle} className={overlayClasses}>
            {children}
          </div>
        )}
      >
        <div className={`${containerClasses}`} style={myStyle}>
          <div style={myContentStyle} className={contentClasses}>
            {this.props.children}
          </div>
          <div className={`${buttonWrapperClasses}`}>
            {buttonsToRender.map((button) => {
              return button;
            })}
          </div>
        </div>
      </ConditionalWrapper>
    );
  }
}

CookieConsent.propTypes = {
  location: PropTypes.oneOf(Object.keys(OPTIONS).map((key) => OPTIONS[key])),
  sameSite: PropTypes.oneOf(Object.keys(SAME_SITE_OPTIONS).map((key) => SAME_SITE_OPTIONS[key])),
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  declineButtonStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  disableStyles: PropTypes.bool,
  hideOnAccept: PropTypes.bool,
  hideOnDecline: PropTypes.bool,
  onAccept: PropTypes.func,
  onDecline: PropTypes.func,
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  declineButtonText: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  cookieName: PropTypes.string,
  cookieValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  declineCookieValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  setDeclineCookie: PropTypes.bool,
  debug: PropTypes.bool,
  expires: PropTypes.number,
  containerClasses: PropTypes.string,
  contentClasses: PropTypes.string,
  buttonClasses: PropTypes.string,
  buttonWrapperClasses: PropTypes.string,
  declineButtonClasses: PropTypes.string,
  buttonId: PropTypes.string,
  declineButtonId: PropTypes.string,
  extraCookieOptions: PropTypes.object,
  disableButtonStyles: PropTypes.bool,
  enableDeclineButton: PropTypes.bool,
  flipButtons: PropTypes.bool,
  ButtonComponent: PropTypes.elementType,
  cookieSecurity: PropTypes.bool,
  overlay: PropTypes.bool,
  overlayClasses: PropTypes.string,
  overlayStyle: PropTypes.object,
  ariaAcceptLabel: PropTypes.string,
  ariaDeclineLabel: PropTypes.string,
};

CookieConsent.defaultProps = {
  disableStyles: false,
  hideOnAccept: true,
  hideOnDecline: true,
  location: OPTIONS.BOTTOM,
  onAccept: () => {},
  onDecline: () => {},
  cookieName: defaultCookieConsentName,
  cookieValue: true,
  declineCookieValue: false,
  setDeclineCookie: true,
  buttonText: "I understand",
  declineButtonText: "I decline",
  debug: false,
  expires: 365,
  containerClasses: "CookieConsent",
  contentClasses: "",
  buttonClasses: "",
  buttonWrapperClasses: "",
  declineButtonClasses: "",
  buttonId: "rcc-confirm-button",
  declineButtonId: "rcc-decline-button",
  extraCookieOptions: {},
  disableButtonStyles: false,
  enableDeclineButton: false,
  flipButtons: false,
  sameSite: SAME_SITE_OPTIONS.LAX,
  ButtonComponent: ({ children, ...props }) => <button {...props}>{children}</button>,
  overlay: false,
  overlayClasses: "",
  ariaAcceptLabel: "Accept cookies",
  ariaDeclineLabel: "Decline cookies",
};

export default CookieConsent;
export { Cookies };
