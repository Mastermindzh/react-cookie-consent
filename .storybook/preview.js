// workaround to support older jsxRuntime: classic
import React from "react";
globalThis.React = React;

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// autodocs moved from main.js docs.autodocs to preview tags in Storybook 9+
export const tags = ["autodocs"];
