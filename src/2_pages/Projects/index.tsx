import React from "react";

import { getTranslations } from "next-intl/server";

import { Tabs } from "@/shared/models/enums";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/header";

import styles from "./Projects.module.scss";

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
          <div className={styles["wrapper__temp"]}>{t("temp")}</div>
        </div>
      </Container>
    </div>
  );
}
