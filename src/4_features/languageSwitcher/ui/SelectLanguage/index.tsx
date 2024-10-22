"use client";

import React from "react";

import { Button, Selection } from "@nextui-org/react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/routing";
import { LANGUAGES } from "@/shared/config/constants";
import { Languages } from "@/shared/models/enums";
import { Select } from "@/shared/ui";

import ArrowIcon from "../../icons/Arrow";
import LanguageIcon from "../../icons/Language";

import styles from "./SelectLanguage.module.scss";

export default function SelectLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  function switchHandler(values: Selection) {
    const keyLocal = Array.from(values).join(", ").replaceAll("_", " ");
    if (keyLocal.length > 0) {
      router.replace(pathname, { locale: keyLocal as Languages });
    }
  }

  return (
    <Select
      className={styles["select-language"]}
      value={locale}
      onChange={switchHandler}
      items={LANGUAGES}
    >
      <Button
        aria-label="The button for switching the language"
        className={styles["select-language__trigger"]}
        variant="light"
      >
        <LanguageIcon />
        <ArrowIcon />
      </Button>
    </Select>
  );
}
