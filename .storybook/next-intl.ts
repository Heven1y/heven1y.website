async function collectLocales() {
  const resources = {};

  const files = import.meta.glob("/src/**/local.*.json");

  const fileRegex =
    /.*src\/\d*_?(?<slice>\w*)\/?.*\/(?<component>\w+)\/local\.(?<language>\w+)\.json$/;

  for (const filePath in files) {
    const match = filePath.match(fileRegex);
    if (!match || !match.groups) {
      continue;
    }
    
    const { slice, component, language } = match.groups;
    
    const localeData = (await files[filePath]()).default;
    
    if (!resources[language]) {
      resources[language] = {};
    }
    resources[language][`${slice}_${component}`] = localeData;
  }

  return resources;
}

const messagesByLocale = await collectLocales();

export const nextIntl = {
  defaultLocale: 'en',
  messagesByLocale,
};