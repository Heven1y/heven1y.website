import { glob } from "glob";

import fs from "fs/promises";
import path from "path";

import { parseLocalePath } from "./parse-locale-path";

type Resources = Record<string, Record<string, string>>;

export default async function i18nResources(
  locale: string,
): Promise<Resources> {
  const resources: Resources = {};

  const basePath = path.resolve(process.cwd(), "src");
  const files = glob.sync(`${basePath}/**/local.${locale}.json`);

  for (const file of files) {
    const parsed = parseLocalePath(file);
    if (!parsed) continue;

    const { namespace } = parsed;

    try {
      const fileContent = await fs.readFile(file, "utf-8");
      const translations = JSON.parse(fileContent);

      if (resources[namespace]) {
        console.warn(
          `[i18n] Namespace collision: "${namespace}" already defined. File: ${file}`,
        );
      }

      resources[namespace] = translations;
    } catch (error) {
      console.error(`[i18n] Failed to load locale file: ${file}`, error);
    }
  }

  return resources;
}
