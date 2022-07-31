import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { DefaultTemplate } from "../defaults/template";

const FlippedButtons = DefaultTemplate.bind({});
FlippedButtons.args = {
  ...defaultStoryProps,
  flipButtons: true,
  enableDeclineButton: true,
} as CookieConsentProps;

export { FlippedButtons };
