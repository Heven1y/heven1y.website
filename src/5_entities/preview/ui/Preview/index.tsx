import React from "react";
import { TypeAnimation } from "react-type-animation";

import styles from "./Preview.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

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
      {flagRender ? (
        <TypeAnimation
          className={styles["preview__text"]}
          sequence={[
            (el) => el!.classList.remove(styles["preview__text--animation"]),
            `${t("hello")}\n${t("name")}\n${t("aboutMe.first")}`,
            (el) => el!.classList.add(styles["preview__text--animation"]),
            3000,
            (el) => el!.classList.remove(styles["preview__text--animation"]),
            `${t("hello")}\n${t("name")}\n${t("aboutMe.second")}`,
            (el) => el!.classList.add(styles["preview__text--animation"]),
            3000,
            (el) => el!.classList.remove(styles["preview__text--animation"]),
            `${t("hello")}\n${t("name")}\n${t("aboutMe.third")}`,
            (el) => el!.classList.add(styles["preview__text--animation"]),
            3000,
          ]}
          speed={30}
          repeat={Infinity}
          cursor={false}
          wrapper="h1"
        />
      ) : (
        <></>
      )}
    </div>
  );
}
