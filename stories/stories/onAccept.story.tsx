import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { DefaultTemplate } from "../defaults/template";

const CustomOnAccept = DefaultTemplate.bind({});
CustomOnAccept.args = {
  ...defaultStoryProps,
  onAccept: (acceptedByScrolling) => {
    alert(`ACCEPTED! By scrolling? ${JSON.stringify(acceptedByScrolling)}`);
  },
} as CookieConsentProps;

export { CustomOnAccept };
