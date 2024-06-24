import App from "@/pages/App";
import "@/styles/reset.scss";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["pages.App"])),
    },
  };
}

export default appWithTranslation(App);
