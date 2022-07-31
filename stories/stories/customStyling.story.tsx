import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { DefaultTemplate } from "../defaults/template";

const CustomStyling = DefaultTemplate.bind({});
CustomStyling.args = {
  ...defaultStoryProps,
  style: { background: "red" },
  buttonStyle: { fontWeight: "bold" },
} as CookieConsentProps;

export { CustomStyling };
