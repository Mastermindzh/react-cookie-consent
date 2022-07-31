import { Story } from "@storybook/react";
import CookieConsent from "../../src";
import { Intro } from "../defaults/intro";
import { defaultStoryProps } from "../defaults/storyProps";

const AdditionalButtonsTemplate: Story<any> = (args) => (
  <>
    <Intro />
    <CookieConsent {...args}>
      <button style={{ color: "gray" }}>I am a custom config button</button>
      <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
    </CookieConsent>
  </>
);
const AdditionalButtons = AdditionalButtonsTemplate.bind({});
AdditionalButtons.args = defaultStoryProps;
export { AdditionalButtons };
