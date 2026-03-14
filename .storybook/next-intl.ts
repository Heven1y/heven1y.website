/// <reference types="vite/client" />

import { parseLocalePath } from "../src/i18n/parse-locale-path";

type LocaleMessages = Record<string, string>;
type NamespacedMessages = Record<string, LocaleMessages>;
type MessagesByLocale = Record<string, NamespacedMessages>;

async function collectLocales(): Promise<MessagesByLocale> {
  const messagesByLocale: MessagesByLocale = {};

  const files = import.meta.glob<{ default: LocaleMessages }>(
    "/src/**/local.*.json",
  );

  for (const filePath in files) {
    const parsed = parseLocalePath(filePath);
    if (!parsed) continue;

    const { namespace, language } = parsed;

    try {
      const localeData = (await files[filePath]()).default;

      if (!messagesByLocale[language]) {
        messagesByLocale[language] = {};
      }

      if (messagesByLocale[language][namespace]) {
        console.warn(
          `[i18n] Namespace collision: "${namespace}" already defined for "${language}". File: ${filePath}`,
        );
      }

      messagesByLocale[language][namespace] = localeData;
    } catch (error) {
      console.error(`[i18n] Failed to load locale file: ${filePath}`, error);
    }
  }

  return messagesByLocale;
}

const messagesByLocale = await collectLocales();

export const nextIntl = {
  defaultLocale: "en",
  messagesByLocale,
};
