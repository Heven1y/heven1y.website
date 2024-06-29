import { TABS } from "@/widgets/header/model/enums";
import Header from "@/widgets/header/ui/Header";
import Container from "@/shared/ui/Container";
import React from "react";

import styles from "./Projects.module.scss";
import { useTranslation } from "next-i18next";

export default function Projects() {
  const { t } = useTranslation("pages.Projects");
  return (
    <div className={styles["wrapper"]}>
      <Container>
        <div className={styles["wrapper__preview"]}>
          <Header activeTabId={TABS.projects} />
          <div className={styles["wrapper__temp"]}>{t("temp")}</div>
        </div>
      </Container>
    </div>
  );
}
