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
  onAccept?: ({ acceptedByScrolling }: { acceptedByScrolling?: boolean }) => void;
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
  buttonWrapperClasses?: string,
  buttonClasses?: string;
  declineButtonClasses?: string;
  buttonId?: string;
  declineButtonId?: string;
  acceptOnScroll?: boolean;
  acceptOnScrollPercentage?: number;
  extraCookieOptions?: object;
  disableButtonStyles?: boolean;
  enableDeclineButton?: boolean;
  flipButtons?: boolean;
  ButtonComponent?: React.ElementType;
  overlay?: boolean,
  overlayClasses?: string,
  overlayStyle?: object,
}

export default class CookieConsent extends React.Component<CookieConsentProps, {}> {}

export { Cookies };
