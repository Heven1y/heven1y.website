import React from "react";

import { useTranslation } from "next-i18next";

import { Container } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { TABS } from "@/widgets/header/model/enums";

import styles from "./Projects.module.scss";

export default function Projects() {
  const { t } = useTranslation("pages.Projects");
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles["wrapper__preview"]}>
          <Header activeTabId={TABS.projects} />
          <div className={styles["wrapper__temp"]}>{t("temp")}</div>
        </div>
      </Container>
    </div>
  );
}
