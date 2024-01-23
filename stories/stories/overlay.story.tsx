import { CookieTailorProps } from "../../src/CookieTailor.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { DefaultTemplate } from "../defaults/template";

const Overlay = DefaultTemplate.bind({});
Overlay.args = {
  ...defaultStoryProps,
  overlay: true,
} as CookieTailorProps;

export { Overlay };
