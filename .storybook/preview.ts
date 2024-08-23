import type { Preview } from "@storybook/react";
import "../src/index.css"; // Import your Tailwind CSS styles

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered", //Center the stories in the preview
  },
};

export default preview;
