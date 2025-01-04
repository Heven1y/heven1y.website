import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";
import { NodePackageImporter } from "sass-embedded"
import { STYLES_GLOBAL_IMPORTS } from "../src/6_shared/styles/stylesModule";

const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-mock",
    "storybook-next-intl",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  docs: {},
  viteFinal: async (config) => {
    config.plugins.push(
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      })
    );
    config.plugins.push(
      react({
        jsxRuntime: "automatic",
      })
    );
    config.define = {
      "process.env": {},
    };
    config.css = {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: STYLES_GLOBAL_IMPORTS,
          loadPaths: [path.resolve(path.dirname(__dirname), 'src/6_shared/styles')],
          importers: [new NodePackageImporter()],
        },
      },
    };
    return config;
  },
};
export default config;
