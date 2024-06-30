import AboutMe from "@/pages/AboutMe";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, [
    "pages.App",
    "widgets.Header",
    "entities.Preview",
    "entities.Whoami",
    "entities.MySkills",
    "entities.Footer",
  ]);

  return {
    props: {
      ...translations,
    },
  };
}

export default AboutMe;
