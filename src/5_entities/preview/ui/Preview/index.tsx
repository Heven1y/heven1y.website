import React from "react";
import { TypeAnimation } from "react-type-animation";

import styles from "./Preview.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import RevealOnScroll from "@/shared/ui/RevealOnScroll";

export default function Preview() {
  const { locale } = useRouter();
  const { t } = useTranslation("entities.Preview");
  const [flagRender, setFlagRender] = React.useState(true);

  /*

  Attention!

  Unfortunately, the <TypeAnimation> component does not allow me to update its sequence, 
  which contains dynamic variables with text translation, 
  so I have to use setTimeout to forcibly re-render the component.
  
  Follow this link to find out more about the problem: https://react-type-animation.netlify.app/#immutability
  
  */

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    setFlagRender(false);
    timeout = setTimeout(() => {
      setFlagRender(true);
    }, 1);

    return () => {
      clearTimeout(timeout);
    };
  }, [locale]);

  return (
    <div className={styles["preview"]}>
      <RevealOnScroll variant="arise-from-top" delay={1000}>
        <h1>{t("hello")}</h1>
      </RevealOnScroll>
      <RevealOnScroll variant="arise-from-top" delay={1500}>
        <h1>
          {t("preName")} <strong>{t("name")}</strong>
        </h1>
      </RevealOnScroll>
      <RevealOnScroll variant="arise-from-top" delay={2000}>
        {flagRender ? (
          <TypeAnimation
            className={styles["preview__text"]}
            sequence={[
              (el) => el!.classList.add(styles["preview__text--animation"]),
              2000,
              (el) => el!.classList.remove(styles["preview__text--animation"]),
              `${t("aboutMe.first")}`,
              (el) => el!.classList.add(styles["preview__text--animation"]),
              3000,
              (el) => el!.classList.remove(styles["preview__text--animation"]),
              `${t("aboutMe.second")}`,
              0,
            ]}
            speed={30}
            repeat={Infinity}
            cursor={false}
            wrapper="h1"
          />
        ) : (
          <></>
        )}
      </RevealOnScroll>
    </div>
  );
}
