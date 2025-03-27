import { Sections } from "@/entities/project/model/enums";
import { DataProject } from "@/entities/project/model/types";
import { Categories, Technologies } from "@/shared/models/enums";

export const dataProjects: DataProject[] = [
  {
    title: "Radiant Metrics",
    year: 2023,
    shortDescription: "radiant.shortDescription",
    colors: ["#0F0055", "#4B3CFF", "#B4C3FF"],
    link: {
      ref: "https://radiant-metrics.com",
      value: "radiant-metrics.com",
    },
    content: [
      {
        header: "radiant.aboutProject.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "radiant.aboutProject.paragraph",
          },
        ],
      },
      {
        header: "radiant.calibrationProcess.header",
        sections: [
          {
            type: Sections.List,
            subtitle: "radiant.calibrationProcess.subheader",
            list: [
              "radiant.calibrationProcess.list.0",
              "radiant.calibrationProcess.list.1",
              "radiant.calibrationProcess.list.2",
              "radiant.calibrationProcess.list.3",
              "radiant.calibrationProcess.list.4",
              "radiant.calibrationProcess.list.5",
            ],
          },
        ],
      },
      {
        header: "radiant.challenges.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "radiant.challenges.paragraphs.0",
          },
          {
            type: Sections.Paragraph,
            content: "radiant.challenges.paragraphs.1",
          },
        ],
      },
      {
        header: "radiant.commercial.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "radiant.commercial.paragraph",
          },
        ],
      },
    ],
    categories: [Categories.Frontend, Categories.Design],
    stack: [
      Technologies.React,
      Technologies.NextJs,
      Technologies.MobX,
      Technologies.Storybook,
      Technologies.FSD,
    ],
  },
];
