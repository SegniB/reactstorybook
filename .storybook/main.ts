import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  async viteFinal(config, options) {
    if (!config.resolve) {
      config.resolve = {};
    }
    // Alias configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
    };

    // Optimize dependencies
    config.optimizeDeps = {
      include: ["react", "react-dom"],
    };

    // Tailwind CSS configuration
    config.css = {
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    };

    return config;
  },
};

export default config;
