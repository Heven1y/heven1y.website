import { useTranslations } from "next-intl";

import styles from "./Preview.module.scss";

export default function Preview() {
  const translate = useTranslations("pages_Preview");
  return (
    <div className={styles.preview}>
      <div className={styles["preview__wrapper-header"]}>
        <h1 className={styles["preview__title"]}>{translate("header")}</h1>
        <p className={styles["preview__subheader"]}>{translate("subheader")}</p>
      </div>
    </div>
  );
}
