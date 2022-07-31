import React, { FunctionComponent, ReactNode } from "react";
import {
  defaultCookieConsentName,
  POSITION_OPTIONS,
  SAME_SITE_OPTIONS,
  VISIBILITY_OPTIONS,
} from "./models/constants";

export interface CookieConsentProps {
  children?: ReactNode;
  style: React.CSSProperties;
  buttonStyle: React.CSSProperties;
  declineButtonStyle: React.CSSProperties;
  contentStyle: React.CSSProperties;
  disableStyles: boolean;
  hideOnAccept: boolean;
  hideOnDecline: boolean;
  onAccept: (acceptedByScrolling: boolean) => void;
  onDecline: () => void;
  buttonText: string | ReactNode | Function;
  declineButtonText: string | ReactNode | Function;
  cookieName: string;
  cookieValue: string | object;
  declineCookieValue: string | object;
  setDeclineCookie: boolean;
  debug: boolean;
  expires: number;
  containerClasses: string;
  contentClasses: string;
  buttonClasses: string;
  buttonWrapperClasses: string;
  declineButtonClasses: string;
  buttonId: string;
  declineButtonId: string;
  overlayClasses: string;
  ariaAcceptLabel: string;
  ariaDeclineLabel: string;
  disableButtonStyles: boolean;
  enableDeclineButton: boolean;
  flipButtons: boolean;
  cookieSecurity?: boolean;
  overlay: boolean;
  acceptOnOverlayClick: boolean;
  acceptOnScroll: boolean;
  acceptOnScrollPercentage: number;
  ButtonComponent: any;
  extraCookieOptions: Object;
  overlayStyle: Object;
  customContentAttributes: Object;
  customContainerAttributes: Object;
  customButtonProps: Object;
  customDeclineButtonProps: Object;
  customButtonWrapperAttributes: Object;
  onOverlayClick: () => void;
  // these should be enums
  location: string;
  visible: string;
  sameSite: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined;
}

const DefaultButtonComponent: FunctionComponent<{ children: ReactNode; [x: string]: any }> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

export const defaultCookieConsentProps: CookieConsentProps = {
  disableStyles: false,
  hideOnAccept: true,
  hideOnDecline: true,
  location: POSITION_OPTIONS.BOTTOM,
  visible: VISIBILITY_OPTIONS.BY_COOKIE_VALUE,
  onAccept: (_acceptedByScrolling) => {},
  onDecline: () => {},
  cookieName: defaultCookieConsentName,
  cookieValue: "true",
  declineCookieValue: "false",
  setDeclineCookie: true,
  buttonText: "I understand",
  declineButtonText: "I decline",
  debug: false,
  expires: 365,
  containerClasses: "CookieConsent",
  contentClasses: "",
  buttonClasses: "",
  buttonWrapperClasses: "",
  declineButtonClasses: "",
  buttonId: "rcc-confirm-button",
  declineButtonId: "rcc-decline-button",
  extraCookieOptions: {},
  disableButtonStyles: false,
  enableDeclineButton: false,
  flipButtons: false,
  sameSite: SAME_SITE_OPTIONS.LAX,
  ButtonComponent: DefaultButtonComponent,
  overlay: false,
  overlayClasses: "",
  onOverlayClick: () => {},
  acceptOnOverlayClick: false,
  ariaAcceptLabel: "Accept cookies",
  ariaDeclineLabel: "Decline cookies",
  acceptOnScroll: false,
  acceptOnScrollPercentage: 25,
  customContentAttributes: {},
  customContainerAttributes: {},
  customButtonProps: {},
  customDeclineButtonProps: {},
  customButtonWrapperAttributes: {},
  style: {},
  buttonStyle: {},
  declineButtonStyle: {},
  contentStyle: {},
  overlayStyle: {},
};
