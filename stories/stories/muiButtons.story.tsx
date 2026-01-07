import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import CookieConsent from "../../src";
import { CookieConsentProps } from "../../src/CookieConsent.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { Intro } from "../defaults/intro";

const meta: Meta<typeof CookieConsent> = {
  title: "CookieConsent/MUI Button",
  component: CookieConsent,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomMuiButton: Story = {
  args: {
    ...defaultStoryProps,
    disableButtonStyles: true,
    ButtonComponent: Button,
    customButtonProps: { variant: "contained", style: { marginRight: "10px" } },
    children: "This website uses cookies with Material-UI button styling.",
  } as CookieConsentProps,
  render: (args) => (
    <>
      <Intro />
      <CookieConsent {...args} />
    </>
  ),
};
