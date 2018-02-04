import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CookieConsent, { Cookies } from "react-cookie-consent";

class App extends Component {

  render() {

    Cookies.set("test", "nice")

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CookieConsent
          onAccept={() => {alert("yay!")}}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>
      </div>
    );
  }
}

export default App;
