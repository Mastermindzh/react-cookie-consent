import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { DefaultTemplate } from "../defaults/template";

const Rainbows = DefaultTemplate.bind({});
Rainbows.args = {
  ...defaultStoryProps,
  buttonText: "OMG DOUBLE RAINBOW",

  style: {
    background: "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)",
    textShadow: "2px 2px black",
  },
  buttonStyle: {
    background: "linear-gradient(to left, orange , yellow, green, cyan, blue, violet)",
    color: "white",
    fontWeight: "bolder",
    textShadow: "2px 2px black",
  },
} as CookieConsentProps;

export { Rainbows };
