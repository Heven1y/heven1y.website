"use client";

import React from "react";

import { Button } from "@heroui/react";
import classNames from "classnames";

import styles from "./PageTabMenu.module.scss";

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
      onPress={props.onClick}
      className={classPageTabMenu}
      isDisabled={props.active}
    >
      {props.title}
    </Button>
  );
}
