import React, { ReactNode } from "react";

import styles from "./SkillElement.module.scss";
import classNames from "classnames";
import { BORDER_COLORS_SKILLS } from "@/shared/models/enums";

export default function SkillElement({
  children,
  borderColor,
  name,
}: {
  children: ReactNode;
  borderColor: BORDER_COLORS_SKILLS;
  name: string;
}) {
  const classSkillElement = classNames(
    styles["skill-element"],
    styles[borderColor]
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
