import React from "react";

import styles from "./CardSkills.module.scss";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function CardSkills(props: CardProps) {
  return (
    <div className={styles["card-skills"]}>
      <h3 className={styles["card-skills__title"]}>{props.title}</h3>
      <div className={styles["card-skills__wrapper"]}>{props.children}</div>
    </div>
  );
}
