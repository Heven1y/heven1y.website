import { glob } from "glob";

import fs from "fs/promises";
import path from "path";

type IResources = {
  [key: string]: {
    [key: string]: string;
  };
};

export default async function i18nResources(locale: string) {
  const resources: IResources = {};

  const basePath = path.resolve(process.cwd(), "src");

  const ctx = glob.sync(`${basePath}/**/local.${locale}.json`);
  const fileRegex =
    /.*src\/\d*_?(?<slice>\w*)\/?.*\/(?<component>\w+)\/local\.(?<language>\w+)\.json$/;

  for (const file of ctx) {
    const groups = file.match(fileRegex)?.groups;
    if (!groups) {
      continue;
    }
    const { slice, component } = groups;

    try {
      const fileContent = await fs.readFile(file, "utf-8");
      const translations = JSON.parse(fileContent);

      resources[`${slice}_${component}`] = translations;
    } catch (error) {
      console.error(`Error reading or parsing file: ${file}`, error);
    }
  }

  return resources;
}
