import { CookieTailorProps } from "../../src/CookieTailor.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { DefaultTemplate } from "../defaults/template";

const CustomStyling = DefaultTemplate.bind({});
CustomStyling.args = {
  ...defaultStoryProps,
  style: { background: "red" },
  buttonStyle: { fontWeight: "bold" },
} as CookieTailorProps;

export { CustomStyling };
