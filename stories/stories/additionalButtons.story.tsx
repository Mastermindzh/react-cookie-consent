import { Story } from "@storybook/react";
import CookieTailor from "../../src";
import { Intro } from "../defaults/intro";
import { defaultStoryProps } from "../defaults/storyProps";

const AdditionalButtonsTemplate: Story<any> = (args) => (
  <>
    <Intro />
    <CookieTailor {...args}>
      <button style={{ color: "gray" }}>I am a custom config button</button>
      <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
    </CookieTailor>
  </>
);
const AdditionalButtons = AdditionalButtonsTemplate.bind({});
AdditionalButtons.args = defaultStoryProps;
export { AdditionalButtons };
