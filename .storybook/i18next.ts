import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources: Record<string, Record<string, string>> = {};

const ctxFSD = require.context("../src", true, /\w+\.json$/);
const fileRegexFSD = /\/\d*_?(?<slice>\w*)\/?.*\/(?<component>\w+)\/local\.(?<language>\w+)\.json$/;

ctxFSD.keys().forEach((file) => {
  const groups = file.match(fileRegexFSD)?.groups;
  if (!groups) {
    return;
  }
  const { slice, component, language } = groups;
  resources[language] = resources[language] || {};
  resources[language][`${slice}.${component}`] = ctxFSD(file)
});


i18n.use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnObjects: true
  });

export default i18n;