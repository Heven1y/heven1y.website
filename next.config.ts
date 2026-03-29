import createNextIntlPlugin from "next-intl/plugin";

import path from "path";

const stylesDir = path.resolve(import.meta.dirname, "src/6_shared/styles");

const STYLES_FILES = ["constant", "mixins"];
const STYLES_GLOBAL_IMPORTS = STYLES_FILES.map(
  (name) => `@use "${path.join(stylesDir, name)}" as *;`,
).join(" ");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: STYLES_GLOBAL_IMPORTS,
  },
};

export default withNextIntl(nextConfig);
