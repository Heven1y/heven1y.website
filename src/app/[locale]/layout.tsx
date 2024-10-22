import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "pages_Layout" });
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    },
    manifest: "/manifest.webmanifest",
  } as Metadata;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export { default } from "@/pages/Layout";
