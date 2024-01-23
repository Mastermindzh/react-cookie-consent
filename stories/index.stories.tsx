import { Meta } from "@storybook/react";
import { CookieTailor } from "../src";
import { defaultStoryProps } from "./defaults/storyProps";
import { DefaultTemplate } from "./defaults/template";

const meta: Meta = {
  title: "CookieTailor",
  component: CookieTailor,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default = DefaultTemplate.bind({});
Default.args = defaultStoryProps;

// stories
export * from "./stories/acceptOnScroll.story";
export * from "./stories/additionalButtons.story";
export * from "./stories/customStyling.story";
export * from "./stories/flippedButtons.story";
export * from "./stories/muiButtons.story";
export * from "./stories/onAccept.story";
export * from "./stories/overlay.story";
export * from "./stories/rainbows.story";
