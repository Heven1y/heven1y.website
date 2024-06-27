import React from "react";
import { TypeAnimation } from "react-type-animation";

import styles from "./Preview.module.scss";
import { useTranslation } from "react-i18next";

export default function Preview() {
  const { t } = useTranslation("entities.Preview");
  return (
    <div className={styles["preview"]}>
      <TypeAnimation
        data-i18n="[html]content.body"
        className={styles["preview__text"]}
        sequence={[
          3000,
          `${t("hello")}\n${t("name")}\n${t("aboutMe.first")}`,
          3000,
          `${t("hello")}\n${t("name")}\n${t("aboutMe.second")}`,
          3000,
          `${t("hello")}\n${t("name")}\n${t("aboutMe.third")}`,
          0,
        ]}
        speed={30}
        repeat={Infinity}
        cursor={false}
      />
    </div>
  );
}
