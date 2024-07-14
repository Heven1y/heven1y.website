import "@/shared/styles/reset.scss";
import "@/shared/styles/tailwind.css";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import App from "@/pages/App";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["pages.App"])),
    },
  };
}

export default appWithTranslation(App);
