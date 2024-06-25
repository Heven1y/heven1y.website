import React from "react";

import styles from "./LinkButton.module.scss";
import Link from "next/link";

type PropsLinkButton = {
  children: React.ReactNode;
  link: string;
};

export default function LinkButton(props: PropsLinkButton) {
  return (
    <Link href={props.link} className={styles["link-button"]}>
      {props.children}
    </Link>
  );
}
