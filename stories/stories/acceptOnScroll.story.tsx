import { Story } from "@storybook/react";
import CookieConsent from "../../src";
import { CookieConsentProps } from "../../src/CookieConsent.props";
import { Intro } from "../defaults/intro";
import { defaultStoryProps } from "../defaults/storyProps";

const AcceptOnScrollTemplate: Story<any> = (args) => (
  <>
    <Intro />
    {Array.from(Array(25).keys()).map((_something) => (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa sequi soluta
        mollitia illum, hic quaerat ipsum sint odit delectus magni neque sunt adipisci culpa harum
        aut distinctio quisquam ab!
      </p>
    ))}

    <CookieConsent {...args}>
      Scroll for {args.acceptOnScrollPercentage}% and the onAccept will trigger
    </CookieConsent>
  </>
);

const AcceptOnScroll = AcceptOnScrollTemplate.bind({});
AcceptOnScroll.args = {
  ...defaultStoryProps,
  onAccept: (acceptedByScrolling) => {
    alert(`ACCEPTED! By scrolling? ${JSON.stringify(acceptedByScrolling)}`);
  },
  acceptOnScroll: true,
  acceptOnScrollPercentage: 25,
} as CookieConsentProps;

export { AcceptOnScroll };
