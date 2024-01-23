# React Cookie Tailor 👔
## Default look

![default look](https://raw.githubusercontent.com/TPN-Labs/react-cookie-tailor/master/images/default.png)

## Installation

```shell
npm install react-cookie-tailor
```

or use yarn:

```shell
yarn add react-cookie-tailor
```

## Using it

You can import the cookie bar like this:

```js
import CookieConsent from "react-cookie-tailor";
```

Then you can use the component anywhere in your React app like so:

```jsx
<CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
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
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
```

One of the props (onAccept) is a function, this function will be called after the user has clicked the accept button. It is called with an object containing a boolean property `acceptedByScrolling` to indicate if the acceptance was triggered by the user scrolling You can provide a function like so:

```js
<CookieConsent
  onAccept={(acceptedByScrolling) => {
    if (acceptedByScrolling) {
      // triggered if user scrolls past threshold
      alert("Accept was triggered by user scrolling");
    } else {
      alert("Accept was triggered by clicking the Accept button");
    }
  }}
></CookieConsent>
```

If the decline button is enabled then the (onDecline) prop function can be used, this function will be called after the user has clicked the decline button. You can enable the button and provide a function like so:

```js
<CookieConsent
  enableDeclineButton
  onDecline={() => {
    alert("nay!");
  }}
></CookieConsent>
```

## Contributor information

When making a PR please think about the following things:

- Update the ChangeLog (or include what you did in the PR and I'll add it, up to you)
- No need to build or update the package.json. I will do both on release.
- Please don't change code convention / style
