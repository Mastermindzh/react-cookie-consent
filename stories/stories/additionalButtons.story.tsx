import type { Meta, StoryObj } from "@storybook/react";
import CookieConsent from "../../src";
import { Intro } from "../defaults/intro";
import { defaultStoryProps } from "../defaults/storyProps";

const meta: Meta<typeof CookieConsent> = {
  title: "CookieConsent/Additional Buttons",
  component: CookieConsent,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AdditionalButtons: Story = {
  args: defaultStoryProps,
  render: (args) => (
    <>
      <Intro />
      <CookieConsent {...args}>
        <button style={{ color: "gray" }}>I am a custom config button</button>
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </>
  ),
};
