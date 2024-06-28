import React from "react";
import Preview from "@/entities/preview/ui/Preview";
import Container from "@/shared/ui/Container";
import { TABS } from "@/widgets/header/model/enums";
import Header from "@/widgets/header/ui/Header";

import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <>
      <div className={styles["wrapper__light"]} />
      <div className={styles["wrapper__preview"]}>
        <Container>
          <Header activeTabId={TABS.about} />
          <Preview />
        </Container>
      </div>
    </>
  );
}
