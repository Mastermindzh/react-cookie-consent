import type { Meta, StoryObj } from "@storybook/react";
import CookieConsent from "../../src";
import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { Intro } from "../defaults/intro";

const meta: Meta<typeof CookieConsent> = {
  title: "CookieConsent/Flipped Buttons",
  component: CookieConsent,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FlippedButtons: Story = {
  args: {
    ...defaultStoryProps,
    flipButtons: true,
    enableDeclineButton: true,
    children: "This website uses cookies. Notice the flipped button order!",
  } as CookieConsentProps,
  render: (args) => (
    <>
      <Intro />
      <CookieConsent {...args} />
    </>
  ),
};
