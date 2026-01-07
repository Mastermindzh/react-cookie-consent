import type { Meta, StoryObj } from "@storybook/react";
import CookieConsent from "../../src";
import { CookieConsentProps } from "../../src/CookieConsent.props";
import { Intro } from "../defaults/intro";
import { defaultStoryProps } from "../defaults/storyProps";

const meta: Meta<typeof CookieConsent> = {
  title: "CookieConsent/Accept On Scroll",
  component: CookieConsent,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AcceptOnScroll: Story = {
  args: {
    ...defaultStoryProps,
    onAccept: (acceptedByScrolling) => {
      alert(`ACCEPTED! By scrolling? ${JSON.stringify(acceptedByScrolling)}`);
    },
    acceptOnScroll: true,
    acceptOnScrollPercentage: 25,
    children: "Scroll for 25% and the onAccept will trigger",
  } as CookieConsentProps,
  render: (args) => (
    <>
      <Intro />
      {Array.from(Array(25).keys()).map((index) => (
        <p key={index}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa sequi soluta
          mollitia illum, hic quaerat ipsum sint odit delectus magni neque sunt adipisci culpa harum
          aut distinctio quisquam ab!
        </p>
      ))}

      <CookieConsent {...args} />
    </>
  ),
};
