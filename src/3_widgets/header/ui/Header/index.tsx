"use client";

import React from "react";

import { useTranslations } from "next-intl";

import { SelectLanguage } from "@/features/languageSwitcher";
import { MenuHeader } from "@/features/menuHeader";
import { useRouter } from "@/i18n/routing";
import { BREAKPOINT_MINI_LAPTOP_PX } from "@/shared/config/constants";
import { useWindowWidthResize } from "@/shared/hooks";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
} from "@/shared/icons/social";
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
      <LinkButton ariaLabel="Mail" link={Links.mail}>
        <MailIcon />
      </LinkButton>
      <LinkButton ariaLabel="Telegram" link={Links.telegram}>
        <TelegramIcon />
      </LinkButton>
      <LinkButton ariaLabel="LinkedIn" link={Links.linkedIn}>
        <LinkedInIcon />
      </LinkButton>
      <LinkButton ariaLabel="GitHub" link={Links.gitHub}>
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
