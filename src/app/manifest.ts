import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

import { Languages } from "@/shared/models/enums";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = Languages.English;
  const t = await getTranslations({ locale, namespace: "pages_Layout" });
  return {
    name: t("title"),
    short_name: t("title"),
    description: t("description"),
    start_url: "/",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#121316",
    background_color: "#121316",
    display: "standalone",
  };
}
