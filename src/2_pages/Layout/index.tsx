import React from "react";

import { HeroUIProvider } from "@heroui/react";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { Languages } from "@/shared/models/enums";

const tildaSans = localFont({
  src: "../../6_shared/fonts/TildaSans-VF.woff2",
  display: "swap",
  weight: "300 900",
});

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as Languages)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={tildaSans.className}>
        <HeroUIProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
