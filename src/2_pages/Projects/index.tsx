import React from "react";

import { useTranslations } from "next-intl";

import { Tabs } from "@/shared/models/enums";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/header";

import styles from "./Projects.module.scss";

export default async function Projects() {
  const t = useTranslations("pages_Projects");
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
