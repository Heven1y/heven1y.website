const createNextIntlPlugin = require("next-intl/plugin");

const path = require("path");

const { STYLES_GLOBAL_IMPORTS } = require("./src/6_shared/styles/stylesModule");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
    includePaths: [path.resolve(__dirname, "src/6_shared/styles")],
    additionalData: STYLES_GLOBAL_IMPORTS,
  },
};

module.exports = withNextIntl(nextConfig);
