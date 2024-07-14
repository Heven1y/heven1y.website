import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AboutMe from "@/pages/AboutMe";

export async function getStaticProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, [
    "pages.App",
    "widgets.Header",
    "entities.Preview",
    "entities.Whoami",
    "entities.MySkills",
    "entities.Footer",
    "features.MenuHeader",
  ]);

  return {
    props: {
      ...translations,
    },
  };
}

export default AboutMe;
