"use client";

import React from "react";

import {
  Button,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { useTranslations } from "next-intl";

import { Pages } from "@/shared/models/enums";

import MenuIcon from "../../icons/Menu";

import styles from "./MenuHeader.module.scss";

export default function MenuHeader({
  onClickItem,
  activeTabId,
  children,
}: {
  onClickItem?: (tabId: Pages) => void;
  activeTabId: Pages;
  children?: React.ReactNode;
}) {
  const t = useTranslations("features_MenuHeader");

  const handleClickItem = (tabId: Pages) => {
    if (activeTabId === tabId) {
      return;
    }
    onClickItem?.(tabId);
  };

  return (
    <Popover
      className={styles["menu-header"]}
      placement="bottom"
      backdrop="blur"
    >
      <PopoverTrigger>
        <Button className={styles["menu-header__trigger"]} variant="light">
          <MenuIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={styles["menu-header__content"]}>
        <Listbox
          className={styles["menu-header__box-items"]}
          selectionMode="single"
          selectedKeys={[activeTabId]}
          variant="faded"
          shouldHighlightOnFocus
          hideSelectedIcon
          autoFocus
        >
          <ListboxItem
            className={styles["menu-header__item"]}
            onPress={() => handleClickItem(Pages.about)}
            key={Pages.about}
          >
            {t("aboutTitle")}
          </ListboxItem>
          <ListboxItem
            className={styles["menu-header__item"]}
            onPress={() => handleClickItem(Pages.projects)}
            key={Pages.projects}
          >
            {t("projectsTitle")}
          </ListboxItem>
        </Listbox>
        {children}
      </PopoverContent>
    </Popover>
  );
}
