import React from "react";

import classNames from "classnames";

import { Skills } from "@/shared/models/enums";

import styles from "./SkillElement.module.scss";

export default function SkillElement({
  children,
  borderColor,
  name,
}: {
  children: React.ReactNode;
  borderColor: Skills;
  name: string;
}) {
  const classSkillElement = classNames(
    styles["skill-element"],
    styles[borderColor],
  );

  return (
    <div className={classSkillElement}>
      {children}
      <p>{name}</p>
    </div>
  );
}
