import React from "react";

import { HeroUIProvider } from "@heroui/react";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { Languages } from "@/shared/models/enums";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/header";

import styles from "./Layout.module.scss";

const tildaSans = localFont({
  src: "../../6_shared/fonts/TildaSans-VF.woff2",
  display: "swap",
  weight: "300 900",
});

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Languages)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={tildaSans.className}>
        <HeroUIProvider locale={locale}>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Etc/Universal"
          >
            <header className={styles["layout__header"]}>
              <Container>
                <Header />
              </Container>
            </header>
            {children}
          </NextIntlClientProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
