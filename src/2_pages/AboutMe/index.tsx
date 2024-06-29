import React from "react";
import Preview from "@/entities/preview/ui/Preview";
import Container from "@/shared/ui/Container";
import { TABS } from "@/widgets/header/model/enums";
import Header from "@/widgets/header/ui/Header";

import styles from "./AboutMe.module.scss";
import Whoami from "@/entities/whoami/ui/Whoami";
import MySkills from "@/entities/mySkills/ui/MySkills";

export default function AboutMe() {
  return (
    <>
      <div className={styles["wrapper__light"]} />
      <Container>
        <div className={styles["wrapper__preview"]}>
          <Header activeTabId={TABS.about} />
          <Preview />
        </div>
        <Whoami />
        <MySkills />
      </Container>
    </>
  );
}
