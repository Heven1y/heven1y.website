import React from "react";

import { Footer } from "@/entities/footer";
import { MySkills } from "@/entities/mySkills";
import { Preview } from "@/entities/preview";
import { Whoami } from "@/entities/whoami";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { TABS } from "@/widgets/header/model/enums";

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
