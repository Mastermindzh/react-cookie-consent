# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [[6.2.2](https://github.com/Mastermindzh/react-cookie-consent/releases/tag/6.2.2)]

- Fixed the return type of getCookieConsentValue in the dts file.

## [[6.2.1](https://github.com/Mastermindzh/react-cookie-consent/releases/tag/6.2.1)]

Added the `getCookieConsentValue` to the dts file.

## [[6.2.0](https://github.com/Mastermindzh/react-cookie-consent/releases/tag/6.2.0)]

Added the exported function `getCookieConsentValue` to get the cookie value from custom code

## [[6.1.0](https://github.com/Mastermindzh/react-cookie-consent/releases/tag/6.1.0)]

Added support for React 17

## [[6.0.0](https://github.com/Mastermindzh/react-cookie-consent/releases/tag/6.0.0)]

### removed

Accepting by scrolling is no longer allowed and has thus been removed from the package.
For details see [issue 88](https://github.com/Mastermindzh/react-cookie-consent/issues/88)

## [[5.2.0](https://github.com/Mastermindzh/react-cookie-consent/releases/tag/5.2.0)]

### added

Added aria labels for both the decline and accept button

## [[5.1.4](https://github.com/Mastermindzh/react-cookie-consent/releases/tag/5.1.4)]

### changed

- set default SameSite attribute to "lax" because browsers are already implementing the cookie policy changes.

## [[5.1.3](https://github.com/Mastermindzh/react-cookie-consent/releases/tag/5.1.3)]

### changed

- Fix missing buttonWrapperClasses prop in type definition

## [5.1.2]

### changed

- Set cookie value before handling side-effects.
- The overlay is now conditional. Meaning that the component behaves exactly as it did prior to 5.1.0 when you do not use the overlay

## [5.1.0]

A new feature! This time it's an "overlay" on the entire website to block access whilst the cookiebar is displayed.
This is all opt-in of course and the README covers it nicely (just add overlay to the props and see what happens).

We got an update picture, with a cute cat... unfortunately the cat won't be included by default:

![overlay example image](https://github.com/Mastermindzh/react-cookie-consent/blob/master/images/overlay.png?raw=true)

## [5.0.1]

- Fixed [Issue
  69](https://github.com/Mastermindzh/react-cookie-consent/issues/69) by
  removing location from the proptypes to avoid build-time issues

## [5.0.0]

### added

- CookieSecurity prop - allows securing the cookie
- sameSite prop - allows you to set sameSite properties so browser won't warn
  about non-secure cookies :)

## [4.1.0]

### changed

- Added CookieConsent back in as the default for the containerClasses property.

## [4.0.0]

I decided to update react-cookie-consent to version 4 because this version has a
buttonWrapper which will break appearance. I consider appearance a major feature.

### Added

- Changelog :D
- A wrapper around the buttons so they always stay together. (still possible to
  change with css using buttonWrapperClasses)

### Changed

- Default ids for the buttons (rcc stands for react-cookie-consent,
  cookie-consent is blocked by some adblockers nowadays so I abbreviated it)

### Updated

#### dependencies

- js-cookie updated from `2.2.0` to `2.2.1`

#### peer dependencies

- react updated from `16.4.0` to `16.13.1`

#### development dependencies

- @types/js-cookie updated from `2.2.2` to `2.2.6`
- babel-cli updated from `6.24.1` to `6.26.0`
- babel-preset-env updated from `1.5.1` to `1.7.0`
- react updated from `16.8.6` to `16.13.1`
