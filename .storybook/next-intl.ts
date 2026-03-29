import { parseLocalePath } from "../src/i18n/parse-locale-path";

type LocaleMessages = Record<string, string>;
type NamespacedMessages = Record<string, LocaleMessages>;
type MessagesByLocale = Record<string, NamespacedMessages>;

function collectLocales(): MessagesByLocale {
  const messagesByLocale: MessagesByLocale = {};

  const ctx = (require as any).context(
    "../src",
    true,
    /local\.\w+\.json$/,
  );

  for (const filePath of ctx.keys()) {
    const fullPath = "/src" + filePath.slice(1);
    const parsed = parseLocalePath(fullPath);
    if (!parsed) continue;

    const { namespace, language } = parsed;

    try {
      const localeData = ctx(filePath);

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

const messagesByLocale = collectLocales();

export const nextIntl = {
  defaultLocale: "en",
  messagesByLocale,
};
