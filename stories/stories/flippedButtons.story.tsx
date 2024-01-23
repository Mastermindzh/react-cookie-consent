import { CookieTailorProps } from "../../src/CookieTailor.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { DefaultTemplate } from "../defaults/template";

const FlippedButtons = DefaultTemplate.bind({});
FlippedButtons.args = {
  ...defaultStoryProps,
  flipButtons: true,
  enableDeclineButton: true,
} as CookieTailorProps;

export { FlippedButtons };
