"use client";

import React from "react";

import { useTranslations } from "next-intl";

import { SelectLanguage } from "@/features/languageSwitcher";
import MenuHeader from "@/features/menuHeader/ui/MenuHeader";
import { useRouter } from "@/i18n/routing";
import { BREAKPOINT_MINI_LAPTOP_PX } from "@/shared/config/constants";
import useWindowWidthResize from "@/shared/hooks/useWindowWidthResize";
import GitHubIcon from "@/shared/icons/GitHub";
import LinkedInIcon from "@/shared/icons/LinkedIn";
import MailIcon from "@/shared/icons/Mail";
import TelegramIcon from "@/shared/icons/Telegram";
import { Tabs } from "@/shared/models/enums";
import { PageTabMenu, LinkButton, Logo } from "@/shared/ui";

import { Links } from "../../model/enums";

import styles from "./Header.module.scss";

type PropsHeader = {
  activeTabId: Tabs;
};

export default function Header(props: PropsHeader) {
  const t = useTranslations("widgets_Header");
  const windowWidth = useWindowWidthResize();
  const router = useRouter();

  const tabToLink = {
    [Tabs.about]: "/",
    [Tabs.projects]: "/projects",
  };

  const toPage = (idPage: Tabs) => {
    router.push(tabToLink[idPage]);
  };

  const personLinks = (
    <div className={styles["header__links"]}>
      <LinkButton link={Links.mail}>
        <MailIcon />
      </LinkButton>
      <LinkButton link={Links.telegram}>
        <TelegramIcon />
      </LinkButton>
      <LinkButton link={Links.linkedIn}>
        <LinkedInIcon />
      </LinkButton>
      <LinkButton link={Links.gitHub}>
        <GitHubIcon />
      </LinkButton>
    </div>
  );

  return (
    <div className={styles.header}>
      <div className={styles["header__logo"]}>
        <Logo />
      </div>
      {windowWidth >= BREAKPOINT_MINI_LAPTOP_PX && (
        <div className={styles["header__tabs"]}>
          <PageTabMenu
            onClick={() => toPage(Tabs.about)}
            active={Tabs.about === props.activeTabId}
            title={t("aboutTitle")}
          />
          <PageTabMenu
            onClick={() => toPage(Tabs.projects)}
            active={Tabs.projects === props.activeTabId}
            title={t("projectsTitle")}
          />
        </div>
      )}
      <div className={styles["header__actions"]}>
        {windowWidth >= BREAKPOINT_MINI_LAPTOP_PX ? (
          personLinks
        ) : (
          <MenuHeader onClickItem={toPage} activeTabId={props.activeTabId}>
            {personLinks}
          </MenuHeader>
        )}
        <SelectLanguage />
      </div>
    </div>
  );
}
