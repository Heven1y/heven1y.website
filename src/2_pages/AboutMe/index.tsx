import React from "react";
import { Preview } from "@/entities/preview/index";
import { Container } from "@/shared/index";
import { TABS } from "@/widgets/header/model/enums";
import { Header } from "@/widgets/header/index";
import { Whoami } from "@/entities/whoami/index";
import { MySkills } from "@/entities/mySkills/index";
import { Footer } from "@/entities/footer/index";

import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <>
      <div className={styles["about-me__light-spot"]} />
      <Container>
        <div className={styles["about-me__preview"]}>
          <Header activeTabId={TABS.about} />
          <Preview />
        </div>
        <Whoami />
        <MySkills />
      </Container>
      <Footer />
    </>
  );
}
