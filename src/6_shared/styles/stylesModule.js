const STYLES_FILES = ["constant", "mixins"];

const STYLES_GLOBAL_IMPORTS = STYLES_FILES.map(
  (name) => `@use "${name}" as *;`,
).join(" ");

module.exports = {
  STYLES_GLOBAL_IMPORTS,
};
