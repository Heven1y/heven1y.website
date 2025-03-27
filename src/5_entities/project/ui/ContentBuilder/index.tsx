"use client";

import { Image } from "@heroui/react";

import { Sections } from "../../model/enums";
import { ProjectContent } from "../../model/types";

import styles from "./ContentBuilder.module.scss";

type ContentBuilderProps = {
  data: ProjectContent;
  projectName: string;
};

export function ContentBuilder({ data }: ContentBuilderProps) {
  return (
    <section className={styles["content-builder"]} title={data.header}>
      <h2 className={styles["content-builder__title"]}>{data.header}</h2>
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
                    {section.subtitle}
                  </p>
                )}
                <ul className={styles["content-builder__list"]}>
                  {section.list.map((element, indexElem) => (
                    <li
                      className={styles["content-builder__list-elem"]}
                      key={indexElem}
                    >
                      {element}
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
                  {section.content}
                </p>
              </section>
            );
          // TODO: Change to Next Image
          case Sections.Image:
            return (
              <section
                className={styles["content-builder__section"]}
                key={indexSection}
              >
                <Image isBlurred src={section.src} alt={section.alt} />
              </section>
            );
          default:
            return null;
        }
      })}
    </section>
  );
}
