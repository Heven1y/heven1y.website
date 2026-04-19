"use client";

import React from "react";

import classNames from "classnames";

import { Link } from "@/i18n/navigation";

import styles from "./Tabs.module.scss";

export type TabItem = {
  id: string;
  title: string;
  href: string;
};

type PropsTabs = {
  items: TabItem[];
  activeId: string;
  onChange?: (id: string) => void;
};

export default function Tabs(props: PropsTabs) {
  const activeIndex = props.items.findIndex(
    (item) => item.id === props.activeId,
  );

  return (
    <nav className={styles.tabs}>
      <div
        className={styles["tabs__indicator"]}
        style={{ "--active-index": activeIndex } as React.CSSProperties}
      />
      {props.items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={classNames(styles["tabs__item"], {
            [styles["tabs__item--active"]]: item.id === props.activeId,
          })}
          onClick={() => props.onChange?.(item.id)}
          aria-current={item.id === props.activeId ? "page" : undefined}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
