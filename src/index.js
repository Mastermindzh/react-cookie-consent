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

class CookieConsent extends Component {
  constructor(props) {
    super(props);
    this.accept.bind(this);

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
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: "999",
        backgroundColor: "rgba(0,0,0,0.3)",
      },
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

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
    window.removeEventListener("scroll", this.handleScroll);
  }

  /**
   * checks whether scroll has exceeded set amount and fire accept if so.
   */
  handleScroll() {
    // (top / height) - height * 100
    let rootNode = document.documentElement,
      body = document.body,
      top = "scrollTop",
      height = "scrollHeight";

    let percentage =
      ((rootNode[top] || body[top]) /
        ((rootNode[height] || body[height]) - rootNode.clientHeight)) *
      100;

    if (percentage > this.props.acceptOnScrollPercentage) {
      this.accept({ acceptedByScrolling: true });
    }
  }

  /**
   * Set a persistent accept cookie
   */
  accept({ acceptedByScrolling = false }) {
    const { cookieName, cookieValue, hideOnAccept, onAccept } = this.props;
    
    this.setCookie(cookieName, cookieValue);

    // fire onAccept
    onAccept({ acceptedByScrolling });

    // remove listener if set
    window.removeEventListener("scroll", this.handleScroll);

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
      expires,
      hideOnDecline,
      onDecline,
      extraCookieOptions,
      setDeclineCookie,
    } = this.props;
    
    if (setDeclineCookie) {
      this.setCookie(cookieName, declineCookieValue);
    }
    
    // fire onDecline
    onDecline();

    // remove listener if set
    window.removeEventListener("scroll", this.handleScroll);

    if (hideOnDecline) {
      this.setState({ visible: false });
    }
  }

  /**
   * Get the legacy cookie name by the regular cookie name
   * @param {string} name of cookie to get
   */
  getLegacyCookieName(name) {
    return `${name}-legacy`;
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
      Cookies.set(this.getLegacyCookieName(cookieName), cookieValue, cookieOptions);
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

    let cookieValue = Cookies.get(cookieName);

    // if the cookieValue is undefined check for the legacy cookie
    if (cookieValue === undefined) {
      cookieValue = Cookies.get(this.getLegacyCookieName(cookieName));
    }
    return cookieValue;
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
        onClick={() => {
          this.accept({ acceptedByScrolling: false });
        }}
      >
        {buttonText}
      </ButtonComponent>
    );

    if (flipButtons) {
      buttonsToRender.reverse();
    }

    const Wrapper = !overlay
      ? (props) => <div {...props} />
      : (props) => <div {...props} style={myOverlayStyle} className={overlayClasses} />;

    return (
      <Wrapper>
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
      </Wrapper>
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
  acceptOnScroll: PropTypes.bool,
  acceptOnScrollPercentage: PropTypes.number,
  extraCookieOptions: PropTypes.object,
  disableButtonStyles: PropTypes.bool,
  enableDeclineButton: PropTypes.bool,
  flipButtons: PropTypes.bool,
  ButtonComponent: PropTypes.elementType,
  cookieSecurity: PropTypes.bool,
  overlay: PropTypes.bool,
  overlayClasses: PropTypes.string,
  overlayStyle: PropTypes.object,
};

CookieConsent.defaultProps = {
  disableStyles: false,
  hideOnAccept: true,
  hideOnDecline: true,
  acceptOnScroll: false,
  acceptOnScrollPercentage: 25,
  location: OPTIONS.BOTTOM,
  onAccept: () => {},
  onDecline: () => {},
  cookieName: "CookieConsent",
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
  sameSite: SAME_SITE_OPTIONS.NONE,
  ButtonComponent: ({ children, ...props }) => <button {...props}>{children}</button>,
  overlay: false,
  overlayClasses: "",
};

export default CookieConsent;
export { Cookies };
