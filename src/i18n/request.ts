import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import i18nResources from "./i18n-resources";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as typeof routing.defaultLocale)) {
    notFound();
  }

  const messages = await i18nResources(locale);

  if (!messages) {
    notFound();
  }

  return {
    messages,
  };
});
