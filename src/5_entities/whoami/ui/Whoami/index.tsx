import { useTranslation } from "next-i18next";

import { RevealOnScroll } from "@/shared/ui";

import Spot from "../Spot";

import styles from "./Whoami.module.scss";

export default function Whoami() {
  const { t } = useTranslation("entities.Whoami");
  return (
    <div className={styles.whoami}>
      <Spot className={styles["whoami__spot"]} />
      <RevealOnScroll variant="arise-from-top">
        <h2 className={styles["whoami__title"]}> {t("title")}</h2>
      </RevealOnScroll>
      <RevealOnScroll variant="arise-from-top" delay={750}>
        <p className={styles["whoami__paragraph"]}>{t("paragraph")}</p>
      </RevealOnScroll>
    </div>
  );
}
