import { Preview } from "@/pages/AboutMe/sections/preview";
import { Skills } from "@/pages/AboutMe/sections/skills";
import { Tabs } from "@/shared/models/enums";
import { Container } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import styles from "./AboutMe.module.scss";

export default async function AboutMe() {
  return (
    <>
      <Container>
        <div className={styles["about-me__preview"]}>
          <Header activeTabId={Tabs.about} />
          <Preview />
        </div>
        <Skills />
      </Container>
      <Footer />
    </>
  );
}
