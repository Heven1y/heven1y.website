import { Preview } from "@/pages/AboutMe/sections/preview";
import { Skills } from "@/pages/AboutMe/sections/skills";
import { Container } from "@/shared/ui";
import LightRaysBackground from "@/shared/ui/LightRaysBackground";
import { Footer } from "@/widgets/footer";

import styles from "./AboutMe.module.scss";

export default async function AboutMe() {
  return (
    <>
      <main className={styles["about-me"]}>
        <div className={styles["about-me__light-layer"]}>
          <LightRaysBackground />
        </div>
        <div className={styles["about-me__content"]}>
          <Container>
            <Preview />
            <Skills />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
