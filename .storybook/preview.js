// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
