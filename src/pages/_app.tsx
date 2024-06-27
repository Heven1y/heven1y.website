import App from "@/pages/App";
import "@/shared/styles/reset.scss";
import "@/shared/styles/tailwind.css";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "pages.App",
        "widgets.Header",
        "entities.Preview",
      ])),
    },
  };
}

export default appWithTranslation(App);
