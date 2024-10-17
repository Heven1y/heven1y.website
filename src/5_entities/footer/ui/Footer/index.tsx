"use client";

import { useTranslations } from "next-intl";

import { Container } from "@/shared/ui";

import styles from "./Footer.module.scss";

export default function Footer() {
  const t = useTranslations("entities_Footer");
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles["footer__wrapper"]}>
          <p className={styles["footer__message"]}>{t("message")}</p>
        </div>
      </Container>
    </footer>
  );
}
