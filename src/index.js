import React, { Component } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const OPTIONS = {
  TOP: "top",
  BOTTOM: "bottom",
  NONE: "none"
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
        zIndex: "999"
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
        margin: "15px"
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
        margin: "15px"
      },
      contentStyle: {
        flex: "1 0 300px",
        margin: "15px"
      }
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const { cookieName, debug } = this.props;

    // if cookie undefined or debug
    if (Cookies.get(cookieName) === undefined || debug) {
      this.setState({ visible: true });
    }

    // if acceptOnScroll is set to true and (cookie is undefined or debug is set to true), add a listener.
    if (this.props.acceptOnScroll && (Cookies.get(cookieName) === undefined || debug)) {
      window.addEventListener("scroll", this.handleScroll, { passive: true });
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
      this.accept();
    }
  }

  /**
   * Set a persistent accept cookie
   */
  accept() {
    const {
      cookieName,
      cookieValue,
      expires,
      hideOnAccept,
      onAccept,
      extraCookieOptions
    } = this.props;

    // fire onAccept
    onAccept();

    // remove listener if set
    window.removeEventListener("scroll", this.handleScroll);

    Cookies.set(cookieName, cookieValue, { expires: expires, ...extraCookieOptions });

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
      extraCookieOptions
    } = this.props;

    // fire onDecline
    onDecline();

    // remove listener if set
    window.removeEventListener("scroll", this.handleScroll);

    Cookies.set(cookieName, declineCookieValue, { expires: expires, ...extraCookieOptions });

    if (hideOnDecline) {
      this.setState({ visible: false });
    }
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
      declineButtonClasses,
      buttonId,
      declineButtonId,
      disableButtonStyles,
      enableDeclineButton,
      flipButtons,
      ButtonComponent
    } = this.props;

    let myStyle = {};
    let myButtonStyle = {};
    let myDeclineButtonStyle = {};
    let myContentStyle = {};

    if (disableStyles) {
      // if styles are disabled use the provided styles (or none)
      myStyle = Object.assign({}, style);
      myButtonStyle = Object.assign({}, buttonStyle);
      myDeclineButtonStyle = Object.assign({}, declineButtonStyle);
      myContentStyle = Object.assign({}, contentStyle);
    } else {
      // if styles aren't disabled merge them with the styles that are provided (or use default styles)
      myStyle = Object.assign({}, { ...this.state.style, ...style });
      myContentStyle = Object.assign({}, { ...this.state.contentStyle, ...contentStyle });

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
        myStyle.position = "fixed";
        break;

      case OPTIONS.BOTTOM:
        myStyle.bottom = "0";
        myStyle.position = "fixed";
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
      <div className={`cookieConsent ${containerClasses}`} style={myStyle}>
        <div style={myContentStyle} className={contentClasses}>
          {this.props.children}
        </div>
        {buttonsToRender.map(button => {
          return button;
        })}
      </div>
    );
  }
}

CookieConsent.propTypes = {
  location: PropTypes.oneOf(Object.keys(OPTIONS).map(key => OPTIONS[key])),
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
  debug: PropTypes.bool,
  expires: PropTypes.number,
  containerClasses: PropTypes.string,
  contentClasses: PropTypes.string,
  buttonClasses: PropTypes.string,
  declineButtonClasses: PropTypes.string,
  buttonId: PropTypes.string,
  declineButtonId: PropTypes.string,
  acceptOnScroll: PropTypes.bool,
  acceptOnScrollPercentage: PropTypes.number,
  extraCookieOptions: PropTypes.object,
  disableButtonStyles: PropTypes.bool,
  enableDeclineButton: PropTypes.bool,
  flipButtons: PropTypes.bool,
  ButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
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
  buttonText: "I understand",
  declineButtonText: "I decline",
  debug: false,
  expires: 365,
  containerClasses: "",
  contentClasses: "",
  buttonClasses: "",
  declineButtonClasses: "",
  buttonId: "",
  declineButtonId: "",
  extraCookieOptions: {},
  disableButtonStyles: false,
  enableDeclineButton: false,
  flipButtons: false,
  ButtonComponent: ({ children, ...props }) => <button {...props}>{children}</button>
};

export default CookieConsent;
export { Cookies };
