# 👔 React Cookie Tailor 👔

> ℹ️ This is a fork of [react-cookie-consent](https://github.com/Mastermindzh/react-cookie-consent)

## Default look

![default look](https://raw.githubusercontent.com/TPN-Labs/react-cookie-tailor/main/images/default.png)

## Installation

```shell
npm install react-cookie-tailor
```

or use yarn:

```shell
yarn add react-cookie-tailor
```

## About

Our teem was looking for a cookie consent solution that was easy to use and looked good. We initially found
[react-cookie-consent,](https://github.com/Mastermindzh/react-cookie-consent) but it was not suitable for our needs.
More precisely, we wanted to comply with the GDPR and CPRA regulations, which require that the user must be able to
decline cookies.

To summarize what these regulations require, you need to:
- provide a compliant cookie policy
- display a cookie consent banner at the user's first visit
- store the proof of consent
- block non-exempt cookies before obtaining the user's consent
- release the cookies only after the user has given their consent

## Using it

You can import the cookie bar like this:

```js
import { CookieTailor } from "react-cookie-tailor";
```

Then you can use the component anywhere in your React app like so:

```jsx
<CookieTailor/>
```

### Translations

You can provide translations for the text using the `labels` property. By default, the library will use the English
translations. The default values can be found in `src/constants/defaultLabels.ts`.

You can provide your own translations like so:

```js
const labels = {
  // ...
  main: {
    buttonAllow: "Allow all",
    buttonDefault: "Allow default",
    moreSettings: "More settings",
    title: "This website uses cookies"
  }
  // ...
};

<CookieTailor labels={labels}/>
```

### Cookie categories

By default, the library will use the following cookie categories:
- `MANDATORY` for cookies that are necessary for the website to function
- `MARKETING` for marketing cookies
- `PREFRENCES` for cookies that store user preferences
- `STATISTICS` for cookies that analyzes user statistics
- `UNCLASSIFIED` for cookies that do not fall into any of the above categories

You can enable/disable the categories by using the `categories` property. By default, all categories are enabled.

```js
const categories = [
  CookieCategory.PREFRENCES,
  CookieCategory.STATISTICS,
  CookieCategory.MARKETING,
];

<CookieTailor categories={categories}/>
```

## Contributor information

When making a PR please think about the following things:

- Update the ChangeLog (or include what you did in the PR and I'll add it, up to you)
- No need to build or update the package.json. I will do both on release.
- Please don't change code convention / style
