import { getTranslations } from "next-intl/server";

import { Container } from "@/shared/ui";

import styles from "./Footer.module.scss";

export default async function Footer() {
  const t = await getTranslations("entities_Footer");
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
