"use client";

import React from "react";

import { useLocale, useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";

import { RevealOnScroll } from "@/shared/ui";

import styles from "./Preview.module.scss";

export default function Preview() {
  const locale = useLocale();
  const t = useTranslations("pages_Preview");
  const [flagRender, setFlagRender] = React.useState(true);

  /*

  Attention!

  Unfortunately, the <TypeAnimation> component does not allow me to update its sequence, 
  which contains dynamic variables with text translation, 
  so I have to use setTimeout to forcibly re-render the component.
  
  Follow this link to find out more about the problem: https://react-type-animation.netlify.app/#immutability
  
  */

  React.useEffect(() => {
    setFlagRender(false);
    const timeout = setTimeout(() => {
      setFlagRender(true);
    }, 50);

    return () => {
      clearTimeout(timeout);
    };
  }, [locale]);

  return (
    <div className={styles.preview}>
      <RevealOnScroll variant="arise-from-top" delay={500}>
        <p className={styles["preview__static-text"]}>{t("hello")}</p>
      </RevealOnScroll>
      <RevealOnScroll variant="arise-from-top" delay={1000}>
        <p className={styles["preview__static-text"]}>
          {t("preName")} <strong>{t("name")}</strong>
        </p>
      </RevealOnScroll>
      <RevealOnScroll variant="arise-from-top" delay={1500}>
        {flagRender && (
          <TypeAnimation
            preRenderFirstString
            className={styles["preview__anim-text"]}
            sequence={[
              2000,
              `${t("aboutMe.first")}`,
              3000,
              `${t("aboutMe.second")}`,
              1000,
            ]}
            speed={30}
            repeat={Infinity}
            cursor={false}
            wrapper="h1"
          />
        )}
      </RevealOnScroll>
    </div>
  );
}
