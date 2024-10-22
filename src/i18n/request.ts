import { getRequestConfig } from "next-intl/server";

import { Languages } from "@/shared/models/enums";

import i18nResources from "./i18n-resources";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Languages)) {
    locale = routing.defaultLocale;
  }

  const messages = await i18nResources(locale);

  return {
    locale,
    messages,
  };
});
