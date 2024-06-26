import { LANGUAGES } from "@/shared/config/constants";
import Select from "@/shared/ui/Select";
import { Button, Selection } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

import styles from "./SelectLanguage.module.scss";
import LanguageIcon from "../../icons/Language";
import ArrowIcon from "../../icons/Arrow";

export default function SelectLanguage() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  function switchHandler(values: Selection) {
    const keyLocal = Array.from(values).join(", ").replaceAll("_", " ");
    if (keyLocal.length > 0) {
      router.push({ pathname, query }, asPath, { locale: keyLocal });
    }
  }

  return (
    <Select
      className={styles["select-language"]}
      value={locale}
      onChange={switchHandler}
      items={LANGUAGES}
    >
      <Button className={styles["select-language__trigger"]} variant="light">
        <LanguageIcon />
        <ArrowIcon />
      </Button>
    </Select>
  );
}
