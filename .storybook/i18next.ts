import { use } from "i18next";
import { initReactI18next } from "react-i18next";

const i18next = use(initReactI18next);

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
    
    const localeData = await files[filePath]();
    
    if (!resources[language]) {
      resources[language] = {};
    }
    resources[language][`${slice}.${component}`] = localeData;
  }

  return resources;
}

async function initI18n() {
  const resources = await collectLocales();

  i18next.init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });
}

initI18n();

export default i18next;
