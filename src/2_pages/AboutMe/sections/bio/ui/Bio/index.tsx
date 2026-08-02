import ContentSwitcher from "../ContentSwitcher";

import styles from "./Bio.module.scss";

export default function Bio() {
  return (
    <section aria-label="Bio" className={styles["bio-section"]}>
      <ContentSwitcher />
    </section>
  );
}
