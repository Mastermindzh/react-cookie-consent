import type { Meta, StoryObj } from "@storybook/react";
import CookieConsent from "../../src";
import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { Intro } from "../defaults/intro";

const meta: Meta<typeof CookieConsent> = {
  title: "CookieConsent/Rainbows",
  component: CookieConsent,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Rainbows: Story = {
  args: {
    ...defaultStoryProps,
    buttonText: "OMG DOUBLE RAINBOW",
    children: "This website uses cookies with RAINBOW STYLING! 🌈",
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
  } as CookieConsentProps,
  render: (args) => (
    <>
      <Intro />
      <CookieConsent {...args} />
    </>
  ),
};
