import * as React from "react";
import Cookies from "js-cookie";

export interface CookieConsentProps {
  location?: "top" | "bottom" | "none";
  sameSite?: "strict" | "lax" | "none";
  cookieSecurity?: boolean;
  style?: object;
  buttonStyle?: object;
  declineButtonStyle?: object;
  contentStyle?: object;
  children?: React.ReactNode;
  disableStyles?: boolean;
  hideOnAccept?: boolean;
  onAccept?: Function;
  onDecline?: Function;
  buttonText?: Function | React.ReactNode;
  declineButtonText?: Function | React.ReactNode;
  cookieName?: string;
  cookieValue?: string | boolean | number;
  declineCookieValue?: string | boolean | number;
  setDeclineCookie?: boolean;
  debug?: boolean;
  expires?: number;
  containerClasses?: string;
  contentClasses?: string;
  buttonWrapperClasses?: string;
  buttonClasses?: string;
  declineButtonClasses?: string;
  buttonId?: string;
  declineButtonId?: string;
  extraCookieOptions?: object;
  disableButtonStyles?: boolean;
  enableDeclineButton?: boolean;
  flipButtons?: boolean;
  ButtonComponent?: React.ElementType;
  overlay?: boolean;
  overlayClasses?: string;
  overlayStyle?: object;
  ariaAcceptLabel?: string;
  ariaDeclineLabel?: string;
}

export default class CookieConsent extends React.Component<CookieConsentProps, {}> {}

/**
 * Returns the value of the consent cookie
 * Retrieves the regular value first and if not found the legacy one according
 * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 * @param {*} name optional name of the cookie
 */
export function getCookieConsentValue(name?: string): string;

export { Cookies };
