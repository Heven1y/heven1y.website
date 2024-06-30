import { useTranslation } from "next-i18next";
import { Container } from "@/shared/index";

import styles from "./Footer.module.scss";

export default function Footer() {
  const { t } = useTranslation("entities.Footer");
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
