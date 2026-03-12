"use client";

import { useTranslations } from "next-intl";

import LanguagesCard from "../LanguagesCard";
import ProgrammingLanguagesCard from "../ProgrammingLanguagesCard";
import SoftwareAndToolsCard from "../SoftwareAndToolsCard";
import TechnologiesCard from "../TechnologiesCard";

import styles from "./Skills.module.scss";

export default function Skills() {
  const t = useTranslations("pages_Skills");
  return (
    <div className={styles["my-skills"]}>
      <h2 className={styles["my-skills__title"]}>{t("title")}</h2>
      <div className={styles["my-skills__wrapper-cards"]}>
        <div className={styles["my-skills__row-1"]}>
          <SoftwareAndToolsCard title={t("titleSoftwareAndTools")} />
          <TechnologiesCard title={t("titleTechnologies")} />
        </div>
        <div className={styles["my-skills__row-2"]}>
          <ProgrammingLanguagesCard title={t("titlePrograming")} />
          <LanguagesCard title={t("titleLang")} />
        </div>
      </div>
    </div>
  );
}
