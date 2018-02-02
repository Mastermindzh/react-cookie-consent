import React, { Component } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const OPTIONS = {
  TOP: "top",
  BOTTOM: "bottom"
};

class CookieConsent extends Component {
  constructor(props) {
    super(props);
    this.accept.bind(this);

    this.state = {
      visible: true,
      style: {
        position: "fixed",
        width: "100%",
        padding: "15px",
        background: "#353535",
        color: "white",
        left: "0",
        zIndex: "999",
        lineHeight: "30px",
        textAlign: "left"
      },
      buttonStyle: {
        position: "absolute",
        right: "50px",
        border: "0",
        background: "#ffd42d",
        boxShadow: "none",
        borderRadius: "0px",
        padding: "5px",
        color: "black"
      }
    };
  }

  componentWillMount(){
    const { cookieName } = this.props;

    if (Cookies.get(cookieName) != undefined ) {
      this.setState({ visible: false });
    }
  }

  /**
   * Set a persistent cookie
   */
  accept() {
    const { cookieName } = this.props;

    Cookies.set(cookieName, true);
    this.setState({ visible: false });
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
      disableStyles,
      onAccept,
      buttonText
    } = this.props;

    let myStyle = {},
      myButtonStyle = {};

    if (disableStyles) {
      // if styles are disabled use the provided styles (or non)
      myStyle = Object.assign({}, style);
      myButtonStyle = Object.assign({}, buttonStyle);
    } else {
      // if styles aren't disabled merge them with the styles that are provided (or use default styles)
      myStyle = Object.assign({}, { ...this.state.style, ...style });
      myButtonStyle = Object.assign(
        {},
        { ...this.state.buttonStyle, ...buttonStyle }
      );
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

    return (
      <div className="cookieConsent" style={myStyle}>
        {this.props.children}
        <button
          style={myButtonStyle}
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
  location: PropTypes.oneOf(["top", "bottom"]),
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  disableStyles: PropTypes.bool,
  onAccept: PropTypes.func,
  buttonText: PropTypes.string,
  cookieName: PropTypes.string
};
CookieConsent.defaultProps = {
  disableStyles: false,
  location: OPTIONS.BOTTOM,
  onAccept: () => {},
  cookieName: "CookieConsent",
  buttonText: "I understand"
};

export default CookieConsent;
export {Cookies};