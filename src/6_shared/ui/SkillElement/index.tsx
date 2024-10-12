import React from "react";

import classNames from "classnames";

import { BorderColorsSkills } from "@/shared/models/enums";

import styles from "./SkillElement.module.scss";

export default function SkillElement({
  children,
  borderColor,
  name,
}: {
  children: React.ReactNode;
  borderColor: BorderColorsSkills;
  name: string;
}) {
  const classSkillElement = classNames(
    styles["skill-element"],
    styles[borderColor],
  );

  return (
    <div className={classSkillElement}>
      <div className={styles["skill-element__inner-block"]}>
        {children}
        <p>{name}</p>
      </div>
    </div>
  );
}
