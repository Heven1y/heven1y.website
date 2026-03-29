import React from "react";

import styles from "./LinkButton.module.scss";

type PropsLinkButton = {
  children: React.ReactNode;
  link: string;
  ariaLabel?: string;
};

export default function LinkButton(props: PropsLinkButton) {
  return (
    <a
      aria-label={props.ariaLabel}
      href={props.link}
      className={styles["link-button"]}
    >
      {props.children}
    </a>
  );
}
