import React from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useTranslation } from "next-i18next";

import { raleway } from "@/shared/styles/fonts";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation("pages.App");

  return (
    <>
      <Head>
        <title>{t("title")}</title>

        <meta name="description" content={t("description") as string} />

        <meta name="keywords" content={t("keywords") as string} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <style jsx global>{`
        :root {
          font-family: ${raleway.style.fontFamily};
        }
      `}</style>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
