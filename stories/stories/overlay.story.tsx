import type { Meta, StoryObj } from "@storybook/react";
import CookieConsent from "../../src";
import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { Intro } from "../defaults/intro";

const meta: Meta<typeof CookieConsent> = {
  title: "CookieConsent/Overlay",
  component: CookieConsent,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Overlay: Story = {
  args: {
    ...defaultStoryProps,
    overlay: true,
    children: "This website uses cookies. Notice the overlay blocking the page!",
  } as CookieConsentProps,
  render: (args) => (
    <>
      <Intro />
      <CookieConsent {...args} />
    </>
  ),
};
