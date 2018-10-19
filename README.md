# :cookie: react-cookie-consent :cookie:

A small, simple and customizable cookie consent bar for use in React applications.

[![NPM](https://nodei.co/npm/react-cookie-consent.png)](https://npmjs.org/package/react-cookie-consent)

Demo: https://mastermindzh.github.io/react-cookie-consent/

Example branch: https://github.com/Mastermindzh/react-cookie-consent/tree/example

## Default look

![default look](https://raw.githubusercontent.com/Mastermindzh/react-cookie-consent/master/images/default.png)

## Installation

``` shell
npm install react-cookie-consent
```

or use yarn:

``` shell
yarn add react-cookie-consent
```

## Using it

You can import the cookie bar like this:

``` js
import CookieConsent from "react-cookie-consent";
```

If you want to set/remove cookies yourself you can optionally import Cookie (straight from js-cookie) like this:

``` js
import CookieConsent, { Cookies } from "react-cookie-consent";
```

Then you can use the component anywhere in your React app like so:

```jsx
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
    expires={150}
>
    This website uses cookies to enhance the user experience.{" "}
    <span style={{ fontSize: "10px" }}>
    This bit of text is smaller :O
    </span>
</CookieConsent>
```

One of the props (onAccept) is a function, this function will be called after the user has clicked the accept button. You can provide a function like so:

```js
<CookieConsent
    onAccept={() => {alert("yay!")}}
>

</CookieConsent>
```

## Props
| Prop          |               Type               | Default value | Description                                                                                           |
|---------------|:--------------------------------:|---------------|-------------------------------------------------------------------------------------------------------|
| location      | string, "top", "bottom" or "none"| "bottom"      | Syntactic sugar to easily enable you to place the bar at the top or the bottom of the browser window. Use "none" to disable. |
| children      | string or React component        |               | Content to appear inside the bar                                                                      |
| disableStyles | boolean                          | false         | If enabled the component will have no default style. (you can still supply style through props)       |
| hideOnAccept  | boolean                          | true          | If disabled the component will not hide it self after the accept button has been clicked. You will need to hide yourself (see onAccept)|
| acceptOnScroll   | boolean                       | false | Defines whether "accept" should be fired after the user scrolls a certain distance (see acceptOnScrollPercentage)     |
| acceptOnScrollPercentage  | number               | 25 | Percentage of the page height the user has to scroll to trigger the accept function if acceptOnScroll is enabled      |
| buttonText    | string or React component        | "I understand"  | Text to appear on the button                                                                        |
| cookieName    | string                           | "CookieConsent" | Name of the cookie used to track whether the user has agreed.                                       |
| cookieValue   | string or boolean or number      | true | Value to be saved under the cookieName.                                       |
| onAccept      | function                         | `() => {}`     | Function to be called after the accept button has been clicked.                                      |
| debug         | boolean                          | undefined     | Bar will be drawn regardless of cookie for debugging purposes.                                        |
| expires       | number                           | 365     | Number of days before the cookie expires.                                                                   |
| extraCookieOptions  | object                           | `{}` | Extra info (apart from expiry date) to add to the cookie|
| containerClasses| string                         | ""        | CSS classes to apply to the surrounding container                                                         |
| buttonClasses | string                           | ""  | CSS classes to apply to the button                                                                              |
| buttonId      | string                           | ""  | Id to apply to the button                                                                              |
| contentClasses| string                           | "" | CSS classes to apply to the content                                                                              |
| style         | object                           | [look at source][style]        | React styling object for the bar.                                                    |
| buttonStyle   | object                           | [look at source][buttonStyle]  | React styling object for the button.                                                 |
| contentStyle  | object                           | [look at source][contentStyle] | React styling object for the content.                                                |

## Debugging it

Because the cookie consent bar will be hidden once accepted, you will have to set the prop `debug={true}` to evaluate styling changes:

```js
<CookieConsent
    debug={true}
>
</CookieConsent>
```

**Note:** Dont forget to remove the `debug`-property for production.

## Styling it

You can provide styling for the bar, the button and the content. Note that the bar has a `display: flex` property as default and is parent to its children "content" and "button".

The styling behaves kind of responsive. The minimum content width has been chosen to be "300px" as a default value. If the button does not fit into the same line it is wrapped around into the next line.

You can style each component by using the `style`, `buttonStyle` and `contentStyle` prop. These will append / replace the default styles of the components.
Alternatively you can provide CSS classnames as `containerClasses`, `buttonClasses` and `contentClasses` to apply predefined CSS classes.

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

#### Using predefined CSS classes

You can pass predefined CSS classes to the components using the `containerClasses`, `buttonClasses` and `contentClasses` props. The example below uses bootstrap classes:

```js
    <CookieConsent
          disableStyles={true}
          location={OPTIONS.BOTTOM}
          buttonClasses="btn btn-primary"
          containerClasses="alert alert-warning col-lg-12"
          contentClasses="text-capitalize"
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>
```

Which results in:

![bootstrap styling](https://github.com/Mastermindzh/react-cookie-consent/blob/master/images/css_classes.png?raw=true)


#### Accept on scroll
You can make the cookiebar disappear after scrolling a certain percentage using acceptOnScroll and acceptOnScrollPercentage.

```js
<CookieConsent
    acceptOnScroll={true}
    acceptOnScrollPercentage={50}
    onAccept={() => {alert("consent given")}}
>
    Hello scroller :)
</CookieConsent>
```

#### Extra cookie options
You can add more cookie options using the extraCookieOptions parameter like so:

```js
<CookieConsent
    extraCookieOptions={{domain: 'myexample.com'}}
>
    cookie bar
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

<!-- links -->
[style]: https://github.com/Mastermindzh/react-cookie-consent/blob/master/src/index.js#L17-L28
[buttonStyle]: https://github.com/Mastermindzh/react-cookie-consent/blob/master/src/index.js#L29-L38
[contentStyle]: https://github.com/Mastermindzh/react-cookie-consent/blob/master/src/index.js#L39-L42
