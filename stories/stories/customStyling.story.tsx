import type { Meta, StoryObj } from "@storybook/react";
import CookieConsent from "../../src";
import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { Intro } from "../defaults/intro";

const meta: Meta<typeof CookieConsent> = {
  title: "CookieConsent/Custom Styling",
  component: CookieConsent,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomStyling: Story = {
  args: {
    ...defaultStoryProps,
    style: { background: "red" },
    buttonStyle: { fontWeight: "bold" },
    children: "This website uses cookies with custom red styling.",
  } as CookieConsentProps,
  render: (args) => (
    <>
      <Intro />
      <CookieConsent {...args} />
    </>
  ),
};
