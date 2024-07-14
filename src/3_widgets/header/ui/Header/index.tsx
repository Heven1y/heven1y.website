import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { SelectLanguage } from "@/features/languageSwitcher";
import GitHubIcon from "@/shared/icons/GitHub";
import LinkedInIcon from "@/shared/icons/LinkedIn";
import MailIcon from "@/shared/icons/Mail";
import TelegramIcon from "@/shared/icons/Telegram";
import { PageTabMenu, LinkButton, Logo } from "@/shared/ui";

import { LINKS, TABS } from "../../model/enums";

import styles from "./Header.module.scss";

type PropsHeader = {
  activeTabId: TABS;
};

export default function Header(props: PropsHeader) {
  const { t } = useTranslation("widgets.Header");
  const router = useRouter();

  const tabToLink = {
    [TABS.about]: "/",
    [TABS.projects]: "/projects",
  };

  const toPage = (idPage: TABS) => {
    router.push(tabToLink[idPage]);
  };

  return (
    <div className={styles.header}>
      <div className={styles["header__logo"]}>
        <Logo />
      </div>
      <div className={styles["header__tabs"]}>
        <PageTabMenu
          onClick={() => toPage(TABS.about)}
          active={TABS.about === props.activeTabId}
          title={t("aboutTitle")}
        />
        <PageTabMenu
          onClick={() => toPage(TABS.projects)}
          active={TABS.projects === props.activeTabId}
          title={t("projectsTitle")}
        />
      </div>
      <div className={styles["header__actions"]}>
        <div className={styles["header__links"]}>
          <LinkButton link={LINKS.mail}>
            <MailIcon />
          </LinkButton>
          <LinkButton link={LINKS.telegram}>
            <TelegramIcon />
          </LinkButton>
          <LinkButton link={LINKS.linkedIn}>
            <LinkedInIcon />
          </LinkButton>
          <LinkButton link={LINKS.gitHub}>
            <GitHubIcon />
          </LinkButton>
        </div>
        <SelectLanguage />
      </div>
    </div>
  );
}
