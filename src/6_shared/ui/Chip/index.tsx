import { Chip as ChipUI } from "@heroui/react";

import styles from "./Chip.module.scss";

type PropsChip = {
  label: string;
  active: boolean;
  onChangeActive: (active: boolean) => void;
};

export default function Chip(props: PropsChip) {
  const { label, active, onChangeActive } = props;

  const classNamesChipActive = {
    base: styles["chip--active"],
    content: styles["chip__content--active"],
  };

  const classNamesChip = {
    base: styles.chip,
    content: styles.chip__content,
  };

  return (
    <ChipUI
      classNames={active ? classNamesChipActive : classNamesChip}
      onClick={() => onChangeActive(!active)}
    >
      {label}
    </ChipUI>
  );
}
