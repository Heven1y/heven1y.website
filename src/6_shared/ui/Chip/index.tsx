import { Chip as ChipUI } from "@heroui/react";

import styles from "./Chip.module.scss";

type PropsChip = {
  label: string;
  active: boolean;
  onChangeActive?: (active: boolean) => void;
  isDisabled?: boolean;
};

export default function Chip(props: PropsChip) {
  const { label, active, onChangeActive, isDisabled } = props;

  const handleClick = () => {
    if (isDisabled) {
      return;
    }
    onChangeActive?.(!active);
  };

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
      isDisabled={isDisabled}
      classNames={active ? classNamesChipActive : classNamesChip}
      onClick={handleClick}
    >
      {label}
    </ChipUI>
  );
}
