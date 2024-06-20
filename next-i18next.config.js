// eslint-disable-next-line @typescript-eslint/no-var-requires
const glob = require("glob");

const resources = {};

const ctx = glob.sync(`${__dirname}/**/local.*.json`);
const fileRegex =
  /.*src\/\d*_?(?<slice>\w*)\/?.*\/(?<component>\w+)\/local\.(?<language>\w+)\.json$/;

ctx.forEach((file) => {
  const groups = file.match(fileRegex)?.groups;
  if (!groups) {
    return;
  }
  const { slice, component, language } = groups;
  resources[language] = resources[language] || {};
  resources[language][`${slice}.${component}`] = require(file);
});

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "jp", "ru"],
    localeDetection: false,
  },
  resources,
};
