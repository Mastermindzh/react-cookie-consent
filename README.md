# :cookie: react-cookie-consent :cookie:

A small, simple and customizable cookie consent bar for use in React applications.

![default look](https://raw.githubusercontent.com/Mastermindzh/react-cookie-consent/master/images/default.png)

## Installation

```
npm install react-cookie-consent
```

or use yarn:

```
yarn add react-cookie-consent
```

## Using it

You can import the cookie bar like this:

```js
import CookieConsent from "react-cookie-consent";
```
If you want to set/remove cookies yourself you can optionally import Cookie (straight from js-cookie) like this:
```js
import CookieConsent, { Cookie } from "react-cookie-consent";
```

Then you can use the component anywhere in your React app like so:

```js
<CookieConsent>
    This website uses cookies to enhance the user experience.
</CookieConsent>
```
You can optionally set some props like this (next chapter will show all props):

```js
<CookieConsent
    location="bottom"
    buttonText="Sure man!!"
    cookieName="myAwesomeCookieName2"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
>
    This website uses cookies to enhance the user experience.{" "}
    <span style={{ fontSize: "10px" }}>
    This bit of text is smaller :O
    </span>
</CookieConsent>
```

On of the props (onAccept) is a function, this function will be called after the user has clicked the accept button. You can provide a function like so:

```js
<CookieConsent
    onAccept={() => {alert("yay!")}}
>

</CookieConsent>
```

## Props
| Prop          |               Type               | Default value | Description                                                                                           |
|---------------|:--------------------------------:|---------------|-------------------------------------------------------------------------------------------------------|
| location      | String, either "top" or "bottom" | bottom        | Syntactic sugar to easily enable you to place the bar at the top or the bottom of the browser window. |
| children      |     String or React component    |               | Content to appear inside the bar                                                                      |
| disableStyles |              boolean             | false         | If enabled the component will have no default style. (you can still supply style through props)       |
| buttonText    |              string              | I understand  | Text to appear on the button                                                                          |
| cookieName    |              string              | CookieConsent | Name of the cookie used to track whether the user has agreed.                                         |
| onAccept      |             function             | () => {}      | Function to be called after the accept button has been clicked.                                       |
| style         |              Object              |  ![barstyle](https://github.com/Mastermindzh/react-cookie-consent/blob/master/images/barStyle.png?raw=true)             | React styling object for the bar.                                                                     |
| buttonStyle   |              Object              |   ![buttonStyle](https://github.com/Mastermindzh/react-cookie-consent/blob/master/images/buttonStyle.png?raw=true)              | React styling object for the button.                                                                  |



## styling it

You can provide styling for both the bar and the button.
You can do this using the `style` and `buttonStyle` prop, both of these will append / replace the default style of the component.

You can use `disableStyles={true}` to disable any built-in styling.

### Examples

#### changing the bar background to red

```js
<CookieConsent
    style={{ background: "red" }}
>
</CookieConsent>
```

#### changing the button font-weight to bold
```js
<CookieConsent
    buttonStyle={{ fontWeight: "bold" }}
>
</CookieConsent>
```

#### rainbows!

![rainbows!](https://github.com/Mastermindzh/react-cookie-consent/blob/master/images/rainbow.png?raw=true)

If you're crazy enough you can even make a rainbow colored bar:

```js
<CookieConsent
    buttonText="OMG DOUBLE RAINBOW"
    cookieName="myAwesomeCookieName2"
    style={{ background: "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)", textShadow: "2px 2px black" }}
    buttonStyle={{background: "linear-gradient(to left, orange , yellow, green, cyan, blue, violet)", color:"white", fontWeight: "bolder", textShadow: "2px 2px black"}}
>
    This website uses cookies to enhance the user experience.{" "}
    <span style={{ fontSize: "10px" }}>
    This bit of text is smaller :O
    </span>
</CookieConsent>
```

