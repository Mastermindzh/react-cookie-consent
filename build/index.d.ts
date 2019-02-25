import * as React from "react";
import Cookies from "js-cookie";

export interface CookieConsentProps {
  location?: "top" | "bottom" | "none";
  style?: object;
  buttonStyle?: object;
  contentStyle?: object;
  children?: React.ReactNode;
  disableStyles?: boolean;
  hideOnAccept?: boolean;
  onAccept?: Function;
  buttonText?: Function | React.ReactNode;
  cookieName?: string;
  cookieValue?: string | boolean | number;
  debug?: boolean;
  expires?: number;
  containerClasses?: string;
  contentClasses?: string;
  buttonClasses?: string;
  buttonId?: string;
  acceptOnScroll?: boolean;
  acceptOnScrollPercentage?: number;
  extraCookieOptions?: object;
  disableButtonStyles ?: boolean;
  ButtonComponent?: Function | React.ReactElement;
}

export default class CookieConsent extends React.Component<CookieConsentProps, {}> {}

export { Cookies };
