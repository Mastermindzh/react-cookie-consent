import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { DefaultTemplate } from "../defaults/template";

const Overlay = DefaultTemplate.bind({});
Overlay.args = {
  ...defaultStoryProps,
  overlay: true,
} as CookieConsentProps;

export { Overlay };
