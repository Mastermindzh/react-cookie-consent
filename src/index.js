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
        flex: "0 0 auto",
        padding: "5px 10px",
        margin: "15px"
      },
      contentStyle: {
        flex: "1 0 300px",
        margin: "15px"
      }
    };
  }

  componentDidMount() {
    const { cookieName, debug } = this.props;

    // if cookie undefined or debug
    if (Cookies.get(cookieName) === undefined || debug) {
      this.setState({ visible: true });
    }
  }

  /**
   * Set a persistent cookie
   */
  accept() {
    const { cookieName, expires, hideOnAccept } = this.props;

    Cookies.set(cookieName, true, { expires: expires });
    if (hideOnAccept) {
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
      contentStyle,
      disableStyles,
      onAccept,
      buttonText,
      containerClasses,
      contentClasses,
      buttonClasses
    } = this.props;

    let myStyle = {};
    let myButtonStyle = {};
    let myContentStyle = {};

    if (disableStyles) {
      // if styles are disabled use the provided styles (or non)
      myStyle = Object.assign({}, style);
      myButtonStyle = Object.assign({}, buttonStyle);
      myContentStyle = Object.assign({}, contentStyle);
    } else {
      // if styles aren't disabled merge them with the styles that are provided (or use default styles)
      myStyle = Object.assign({}, { ...this.state.style, ...style });
      myButtonStyle = Object.assign({}, { ...this.state.buttonStyle, ...buttonStyle });
      myContentStyle = Object.assign({}, { ...this.state.contentStyle, ...contentStyle });
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

    return (
      <div className={`cookieConsent ${containerClasses}`} style={myStyle}>
        <div style={myContentStyle} className={contentClasses}>
          {this.props.children}
        </div>
        <button
          style={myButtonStyle}
          className={buttonClasses}
          onClick={() => {
            this.accept();
            onAccept();
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

CookieConsent.propTypes = {
  location: PropTypes.oneOf(Object.values(OPTIONS)),
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  disableStyles: PropTypes.bool,
  hideOnAccept: PropTypes.bool,
  onAccept: PropTypes.func,
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  cookieName: PropTypes.string,
  debug: PropTypes.bool,
  expires: PropTypes.number,
  containerClasses: PropTypes.string,
  contentClasses: PropTypes.string,
  buttonClasses: PropTypes.string
};

CookieConsent.defaultProps = {
  disableStyles: false,
  hideOnAccept: true,
  location: OPTIONS.BOTTOM,
  onAccept: () => {},
  cookieName: "CookieConsent",
  buttonText: "I understand",
  debug: false,
  expires: 365,
  containerClasses:"",
  contentClasses:"",
  buttonClasses:""
};

export default CookieConsent;
export { Cookies };
