import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { NodePackageImporter } from "sass-embedded";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const STYLES_FILES = ["constant", "mixins"];
const STYLES_GLOBAL_IMPORTS = STYLES_FILES.map(
  (name) => `@use "${name}" as *;`,
).join(" ");

const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-next-intl",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config: any) => {
    const sassRule = config.module?.rules?.find(
      (rule: any) =>
        rule.test instanceof RegExp && rule.test.test("file.scss"),
    );
    if (sassRule?.use) {
      const sassLoader = sassRule.use.find(
        (loader: any) =>
          typeof loader === "object" &&
          loader.loader &&
          loader.loader.includes("sass-loader"),
      );
      if (sassLoader) {
        sassLoader.options = {
          ...sassLoader.options,
          implementation: require.resolve("sass-embedded"),
          additionalData: STYLES_GLOBAL_IMPORTS,
          sassOptions: {
            api: "modern-compiler",
            loadPaths: [path.resolve(__dirname, "../src/6_shared/styles")],
            importers: [new NodePackageImporter()],
          },
        };
      }
    }
    return config;
  },
};

export default config;
