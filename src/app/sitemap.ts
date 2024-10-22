import { MetadataRoute } from "next";

import { LANGUAGES } from "@/shared/config/constants";
import { Languages } from "@/shared/models/enums";

const defaultLocale = Languages.English;

const host = process.env.NEXT_PUBLIC_HOST;

function getUrl(pathname: string, locale: string) {
  return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
}

function getEntry(pathname: string) {
  return {
    url: getUrl(pathname, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        LANGUAGES.map((lang) => [lang.key, getUrl(pathname, lang.key)]),
      ),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry("/"), getEntry("/projects")];
}
