import { default as React, Component } from 'react';
import { CookieConsentProps } from './CookieConsent.props';
import { CookieConsentState } from './CookieConsent.state';
import { SAME_SITE_OPTIONS } from './models/constants';
export declare class CookieConsent extends Component<CookieConsentProps, CookieConsentState> {
    static readonly defaultProps: {
        disableStyles: boolean;
        hideOnAccept: boolean;
        hideOnDecline: boolean;
        location: string;
        visible: string;
        onAccept: (_acceptedByScrolling: boolean) => void;
        onDecline: () => void;
        cookieName: string;
        cookieValue: string;
        declineCookieValue: string;
        setDeclineCookie: boolean;
        buttonText: string;
        declineButtonText: string;
        debug: boolean;
        expires: number;
        containerClasses: string;
        contentClasses: string;
        buttonClasses: string;
        buttonWrapperClasses: string;
        declineButtonClasses: string;
        buttonId: string;
        declineButtonId: string;
        extraCookieOptions: {};
        disableButtonStyles: boolean;
        enableDeclineButton: boolean;
        flipButtons: boolean;
        sameSite: SAME_SITE_OPTIONS;
        ButtonComponent: React.FunctionComponent<{
            [x: string]: any;
            children: React.ReactNode;
        }>;
        overlay: boolean;
        overlayClasses: string;
        onOverlayClick: () => void;
        acceptOnOverlayClick: boolean;
        ariaAcceptLabel: string;
        ariaDeclineLabel: string;
        acceptOnScroll: boolean;
        acceptOnScrollPercentage: number;
        customContentAttributes: {};
        customContainerAttributes: {};
        customButtonProps: {};
        customDeclineButtonProps: {};
        customButtonWrapperAttributes: {};
        style: {};
        buttonStyle: {};
        declineButtonStyle: {};
        contentStyle: {};
        overlayStyle: {};
    };
    state: CookieConsentState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Set a persistent accept cookie
     */
    accept(acceptedByScrolling?: boolean): void;
    /**
     * Handle a click on the overlay
     */
    overlayClick(): void;
    /**
     * Set a persistent decline cookie
     */
    decline(): void;
    /**
     * Function to set the consent cookie based on the provided variables
     * Sets two cookies to handle incompatible browsers, more details:
     * https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
     */
    setCookie(cookieName: string, cookieValue: string): void;
    /**
     * Returns the value of the consent cookie
     * Retrieves the regular value first and if not found the legacy one according
     * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
     */
    getCookieValue(): string | undefined;
    /**
     * checks whether scroll has exceeded set amount and fire accept if so.
     */
    handleScroll: () => void;
    removeScrollListener: () => void;
    render(): React.JSX.Element | null;
}
export default CookieConsent;
