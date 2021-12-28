import * as React from "react";
import Cookies from "js-cookie";

export interface CookieConsentProps {
  location?: "top" | "bottom" | "none";
  sameSite?: "strict" | "lax" | "none";
  visible?: "hidden" | "show" | "byCookieValue";
  cookieSecurity?: boolean;
  style?: object;
  buttonStyle?: object;
  declineButtonStyle?: object;
  contentStyle?: object;
  children?: React.ReactNode;
  disableStyles?: boolean;
  hideOnAccept?: boolean;
  hideOnDecline?: boolean;
  onAccept?: (acceptedByScrolling?: boolean) => void;
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
  onOverlayClick?: () => void;
  acceptOnOverlayClick?: boolean;
  ariaAcceptLabel?: string;
  ariaDeclineLabel?: string;
  acceptOnScroll?: boolean;
  acceptOnScrollPercentage?: number;
  customContentAttributes?: object;
  customContainerAttributes?: object;
}

export default class CookieConsent extends React.Component<CookieConsentProps, {}> {}

/**
 * Returns the value of the consent cookie
 * Retrieves the regular value first and if not found the legacy one according
 * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 * @param {*} name optional name of the cookie
 */
export function getCookieConsentValue(name?: string): string;

/**
 * Reset the consent cookie
 * Remove the cookie on browser in order to allow user to change their consent
 * @param {*} name optional name of the cookie
 */
export function resetCookieConsentValue(name?: string);

/**
 * Get the legacy cookie name by the regular cookie name
 * @param {string} name of cookie to get
 */
export function getLegacyCookieName(name: string);

export { Cookies };
