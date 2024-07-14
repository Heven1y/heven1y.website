import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Projects from "@/pages/Projects";

export async function getStaticProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, [
    "pages.App",
    "pages.Projects",
    "widgets.Header",
  ]);

  return {
    props: {
      ...translations,
    },
  };
}

export default Projects;
