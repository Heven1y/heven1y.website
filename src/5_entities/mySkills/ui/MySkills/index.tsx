"use client";

import { useTranslations } from "next-intl";

import { RevealOnScroll } from "@/shared/ui";

import LanguagesCard from "../LanguagesCard";
import ProgrammingLanguagesCard from "../ProgrammingLanguagesCard";
import SoftwareAndToolsCard from "../SoftwareAndToolsCard";
import TechnologiesCard from "../TechnologiesCard";

import styles from "./MySkills.module.scss";

export default function MySkills() {
  const t = useTranslations("entities_MySkills");
  return (
    <div className={styles["my-skills"]}>
      <RevealOnScroll variant="arise-from-top">
        <h2 className={styles["my-skills__title"]}>{t("title")}</h2>
      </RevealOnScroll>
      <div className={styles["my-skills__wrapper-cards"]}>
        <div className={styles["my-skills__row-1"]}>
          <RevealOnScroll variant="arise-from-left" delay={250}>
            <SoftwareAndToolsCard title={t("titleSoftwareAndTools")} />
          </RevealOnScroll>
          <RevealOnScroll variant="arise-from-right" delay={500}>
            <TechnologiesCard title={t("titleTechnologies")} />
          </RevealOnScroll>
        </div>
        <div className={styles["my-skills__row-2"]}>
          <RevealOnScroll variant="arise-from-left" delay={750}>
            <ProgrammingLanguagesCard title={t("titlePrograming")} />
          </RevealOnScroll>
          <RevealOnScroll variant="arise-from-right" delay={1000}>
            <LanguagesCard title={t("titleLang")} />
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
