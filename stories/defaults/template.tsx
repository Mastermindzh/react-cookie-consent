import { Story } from "@storybook/react";
import CookieConsent from "../../src";
import { Intro } from "./intro";

export const DefaultTemplate: Story<any> = (args) => (
  <>
    <Intro />
    <CookieConsent {...args}>
      This website uses cookies to enhance the user experience.
      <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
    </CookieConsent>
  </>
);
