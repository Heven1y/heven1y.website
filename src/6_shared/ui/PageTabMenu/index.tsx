import React from "react";

import styles from "./PageTabMenu.module.scss";
import classNames from "classnames";
import { Button } from "@nextui-org/react";

type PropsPageTabMenu = {
  onClick?: () => void;
  active?: boolean;
  title: string;
};

export default function PageTabMenu(props: PropsPageTabMenu) {
  const classPageTabMenu = classNames({
    [styles["page-tab-menu"]]: !props.active,
    [styles["page-tab-menu--active"]]: props.active,
  });

  return (
    <Button
      variant="light"
      onClick={props.onClick}
      className={classPageTabMenu}
      isDisabled={props.active}
    >
      {props.title}
    </Button>
  );
}
