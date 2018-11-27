import * as React from 'react';
import Cookies from "js-cookie";

export interface ICookieConcentProps {
    location?: "top" | "bottom" | "none",
    style?: object,
    buttonStyle?: object,
    contentStyle?: object,
    children?: React.ReactNode,
    disableStyles?: boolean,
    hideOnAccept?: boolean,
    onAccept?: Function,
    buttonText?: Function | React.ReactNode,
    cookieName?: string,
    cookieValue?: string | boolean | number,
    debug?: boolean,
    expires?: number,
    containerClasses?: string,
    contentClasses?: string,
    buttonClasses?: string,
    buttonId?: string,
    acceptOnScroll?: boolean,
    acceptOnScrollPercentage?: number,
    extraCookieOptions?: object
}

export default class CookieConcent extends React.Component<ICookieConcentProps, {}> {}

export { Cookies };
