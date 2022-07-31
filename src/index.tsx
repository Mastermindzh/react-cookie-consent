import Cookies from "js-cookie";
import { ConditionalWrapper } from "./components/ConditionalWrapper";
import { CookieConsent } from "./CookieConsent";
import { POSITION_OPTIONS, VISIBILITY_OPTIONS } from "./models/constants";

export * from "./models/constants";
export * from "./utilities";
export { Cookies, CookieConsent, ConditionalWrapper };
// backwards compatibility exports
export { POSITION_OPTIONS as OPTIONS, VISIBILITY_OPTIONS as VISIBLE_OPTIONS };
export default CookieConsent;
