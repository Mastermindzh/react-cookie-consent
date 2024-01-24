import React from 'react';
import { Intro } from "./intro";
import { Story } from "@storybook/react";
import CookieTailor from "../../src";

export const DefaultTemplate: Story<any> = () => (
  <>
    <Intro />
    <CookieTailor/>
  </>
);
