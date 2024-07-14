import React from "react";

import {
  Button,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useTranslation } from "next-i18next";

import { Tabs } from "@/shared/models/enums";

import MenuIcon from "../../icons/Menu";

import styles from "./MenuHeader.module.scss";

export default function MenuHeader({
  onClickItem,
  activeTabId,
  children,
}: {
  onClickItem?: (tabId: Tabs) => void;
  activeTabId: Tabs;
  children?: React.ReactNode;
}) {
  const { t } = useTranslation("features.MenuHeader");

  const handleClickItem = (tabId: Tabs) => {
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
            onClick={() => handleClickItem(Tabs.about)}
            key={Tabs.about}
          >
            {t("aboutTitle")}
          </ListboxItem>
          <ListboxItem
            className={styles["menu-header__item"]}
            onClick={() => handleClickItem(Tabs.projects)}
            key={Tabs.projects}
          >
            {t("projectsTitle")}
          </ListboxItem>
        </Listbox>
        {children}
      </PopoverContent>
    </Popover>
  );
}
