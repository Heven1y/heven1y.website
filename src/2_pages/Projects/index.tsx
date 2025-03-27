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
    <div className={styles.wrapper}>
      <Container>
        <div className={styles["wrapper__preview"]}>
          <Header activeTabId={Tabs.projects} />
          <div className={styles["wrapper__header-wrapper"]}>
            <h1 className={styles["wrapper__header"]}>{t("header")}</h1>
            <ProjectList />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
