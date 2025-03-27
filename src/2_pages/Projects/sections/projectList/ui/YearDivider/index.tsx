import { Divider } from "@heroui/react";

import styles from "./YearDivider.module.scss";

type YearDividerProps = {
  year: number;
};

export default function YearDivider({ year }: YearDividerProps) {
  return (
    <div className={styles["year-divider__wrapper"]}>
      <h2 className={styles["year-divider__year"]}>{year}</h2>
      <Divider className={styles["year-divider__divider"]} />
    </div>
  );
}
