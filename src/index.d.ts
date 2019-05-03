import * as React from "react";
import Cookies from "js-cookie";

export interface CookieConsentProps {
  location?: "top" | "bottom" | "none";
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
  debug?: boolean;
  expires?: number;
  containerClasses?: string;
  contentClasses?: string;
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
  ButtonComponent?: Function | React.ReactElement;
}

export default class CookieConsent extends React.Component<CookieConsentProps, {}> {}

export { Cookies };
