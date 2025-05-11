import { getTranslations } from "next-intl/server";

import { Tabs } from "@/shared/models/enums";
import { Container } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import styles from "./Projects.module.scss";
import { ProjectList } from "./sections/projectList";

export default async function Projects({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "pages_Projects" });
  return (
    <>
      <Container>
        <Header activeTabId={Tabs.projects} />
        <div className={styles["projects__content-wrapper"]}>
          <h1 className={styles["projects__header"]}>{t("header")}</h1>
          <ProjectList />
        </div>
      </Container>
      <Footer />
    </>
  );
}
