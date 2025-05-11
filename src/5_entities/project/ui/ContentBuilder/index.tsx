"use client";

import { Image } from "@heroui/react";
import NextImage from "next/image";
import { useTranslations } from "next-intl";

import { Sections } from "../../model/enums";
import { ProjectContent } from "../../model/types";

import styles from "./ContentBuilder.module.scss";

type ContentBuilderProps = {
  data: ProjectContent;
  projectName: string;
};

export function ContentBuilder({ data }: ContentBuilderProps) {
  const t = useTranslations("entities_ContentBuilder");
  return (
    <section className={styles["content-builder"]} title={t(data.header)}>
      <h2 className={styles["content-builder__title"]}>{t(data.header)}</h2>
      {data.sections.map((section, indexSection) => {
        switch (section.type) {
          case Sections.List:
            return (
              <section
                className={styles["content-builder__section"]}
                key={indexSection}
              >
                {section.subtitle && (
                  <p className={styles["content-builder__subtitle-list"]}>
                    {t(section.subtitle)}
                  </p>
                )}
                <ul className={styles["content-builder__list"]}>
                  {section.list.map((element, indexElem) => (
                    <li
                      className={styles["content-builder__list-elem"]}
                      key={indexElem}
                    >
                      {t(element)}
                    </li>
                  ))}
                </ul>
              </section>
            );
          case Sections.Paragraph:
            return (
              <section
                className={styles["content-builder__section"]}
                key={indexSection}
              >
                <p className={styles["content-builder__paragraph"]}>
                  {t(section.content)}
                </p>
              </section>
            );
          case Sections.Image:
            return (
              <section
                className={styles["content-builder__section"]}
                key={indexSection}
              >
                <Image
                  as={NextImage}
                  isBlurred
                  src={section.src}
                  alt={section.alt}
                />
              </section>
            );
          default:
            return null;
        }
      })}
    </section>
  );
}
