import Cookies from "js-cookie";
import { defaultCookieTailorName } from "./constants";

/**
 * Returns the value of the consent cookie
 * Retrieves the regular value first and if not found the legacy one according
 * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 * @param {*} name optional name of the cookie
 */
export const getCookieTailorValue = (name = defaultCookieTailorName) => {
  const cookieValue = Cookies.get(name);

  // if the cookieValue is undefined check for the legacy cookie
  if (cookieValue === undefined) {
    return Cookies.get(getLegacyCookieName(name));
  }
  return cookieValue;
};

/**
 * Reset the consent cookie
 * Remove the cookie on browser in order to allow user to change their consent
 * @param {*} name optional name of the cookie
 */
export const resetCookieTailorValue = (name = defaultCookieTailorName) => {
  Cookies.remove(name);
};

/**
 * Get the legacy cookie name by the regular cookie name
 * @param {string} name of cookie to get
 */
export const getLegacyCookieName = (name: string) => {
  return `${name}-legacy`;
};
