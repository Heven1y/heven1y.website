import React from "react";

import { useTranslation } from "next-i18next";

import { Tabs } from "@/shared/models/enums";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/header";

import styles from "./Projects.module.scss";

export default function Projects() {
  const { t } = useTranslation("pages.Projects");
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
