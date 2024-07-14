import React from "react";

import Link from "next/link";

import styles from "./LinkButton.module.scss";

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
