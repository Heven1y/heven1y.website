"use client";

import { Image } from "@heroui/react";

import { Sections } from "../../model/enums";
import { ProjectContent } from "../../model/types";

type ContentBuilderProps = {
  data: ProjectContent;
  projectName: string;
};

export function ContentBuilder({ data }: ContentBuilderProps) {
  return (
    <section title={data.title}>
      <h2>{data.title}</h2>
      {data.sections.map((section, indexSection) => {
        switch (section.type) {
          case Sections.List:
            return (
              <section key={indexSection}>
                {section.subtitle && <p>{section.subtitle}</p>}
                <ul>
                  {section.list.map((element, indexElem) => (
                    <li key={indexElem}>{element}</li>
                  ))}
                </ul>
              </section>
            );
          case Sections.Paragraph:
            return (
              <section key={indexSection}>
                <p>{section.content}</p>
              </section>
            );
          // TODO: Change to Next Image
          case Sections.Image:
            return (
              <section key={indexSection}>
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
