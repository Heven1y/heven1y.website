import { useTranslations } from "next-intl";

import { getProjectChartData } from "@/entities/project";

import ProjectsChart from "../ProjectsChart";

import styles from "./Preview.module.scss";

export default function Preview() {
  const translate = useTranslations("pages_Preview");
  const chartData = getProjectChartData();

  return (
    <section className={styles["section-wrapper--first-section"]}>
      <div className={styles.preview}>
        <div className={styles["preview__wrapper-header"]}>
          <h1 className={styles["preview__title"]}>{translate("header")}</h1>
          <p className={styles["preview__subheader"]}>
            {translate("subheader")}
          </p>
        </div>
        <ProjectsChart data={chartData} />
      </div>
    </section>
  );
}
