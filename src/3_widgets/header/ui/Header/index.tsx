"use client";

import React from "react";

import { useTranslations } from "next-intl";

import { SelectLanguage } from "@/features/languageSwitcher";
import { MenuHeader } from "@/features/menuHeader";
import { usePathname, useRouter } from "@/i18n/routing";
import { BREAKPOINT_MINI_LAPTOP_PX } from "@/shared/config/constants";
import { useWindowWidthResize } from "@/shared/hooks";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "@/shared/icons/social";
import { Pages } from "@/shared/models/enums";
import { LinkButton, Logo, Tabs } from "@/shared/ui";

import { Links } from "../../model/enums";

import styles from "./Header.module.scss";

export default function Header() {
  const translate = useTranslations("widgets_Header");
  const windowWidth = useWindowWidthResize();
  const router = useRouter();
  const pathname = usePathname();

  const activePage = pathname === "/projects" ? Pages.projects : Pages.about;

  const navigateTo = (page: Pages) => {
    router.push(page === Pages.about ? "/" : `/${page}`);
  };

  const personLinks = (
    <div className={styles["header__links"]}>
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
          <Tabs
            items={[
              {
                id: Pages.about,
                title: translate("aboutTitle"),
                href: "/",
              },
              {
                id: Pages.projects,
                title: translate("projectsTitle"),
                href: "/projects",
              },
            ]}
            activeId={activePage}
          />
        </div>
      )}
      <div className={styles["header__actions"]}>
        {windowWidth >= BREAKPOINT_MINI_LAPTOP_PX ? (
          personLinks
        ) : (
          <MenuHeader onClickItem={navigateTo} activeTabId={activePage}>
            {personLinks}
          </MenuHeader>
        )}
        <SelectLanguage />
      </div>
    </div>
  );
}
