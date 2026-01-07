/**
 * Returns the value of the consent cookie
 * Retrieves the regular value first and if not found the legacy one according
 * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 * @param {*} name optional name of the cookie
 */
export declare const getCookieConsentValue: (name?: string) => string | undefined;
/**
 * Reset the consent cookie
 * Remove the cookie on browser in order to allow user to change their consent
 * @param {*} name optional name of the cookie
 */
export declare const resetCookieConsentValue: (name?: string) => void;
/**
 * Get the legacy cookie name by the regular cookie name
 * @param {string} name of cookie to get
 */
export declare const getLegacyCookieName: (name: string) => string;
