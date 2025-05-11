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
      Technologies.NextJs,
      Technologies.MobX,
      Technologies.Storybook,
      Technologies.FSD,
      Technologies.ReactQuery,
    ],
  },
  {
    title: "Ci Craft",
    year: 2021,
    shortDescription: "ciCraft.shortDescription",
    colors: ["#E26A2C", "#F5C063", "#F9E7C1"],
    content: [
      {
        header: "ciCraft.aboutProject.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "ciCraft.aboutProject.paragraph",
          },
        ],
      },
      {
        header: "ciCraft.gameplay.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "ciCraft.gameplay.paragraph",
          },
        ],
      },
      {
        header: "ciCraft.dictionary.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "ciCraft.dictionary.paragraph",
          },
        ],
      },
      {
        header: "ciCraft.audience.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "ciCraft.audience.paragraph",
          },
        ],
      },
      {
        header: "ciCraft.myRole.header",
        sections: [
          {
            type: Sections.List,
            list: [
              "ciCraft.myRole.list.0",
              "ciCraft.myRole.list.1",
              "ciCraft.myRole.list.2",
              "ciCraft.myRole.list.3",
            ],
          },
        ],
      },
      {
        header: "ciCraft.technicalChallenges.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "ciCraft.technicalChallenges.paragraph",
          },
        ],
      },
      {
        header: "ciCraft.results.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "ciCraft.results.paragraph",
          },
        ],
      },
      {
        header: "ciCraft.meaning.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "ciCraft.meaning.paragraph",
          },
        ],
      },
    ],
    categories: [Categories.Frontend, Categories.Design],
    stack: [Technologies.Ionic, Technologies.MobX],
  },
  {
    title: "Bretzel",
    year: 2022,
    shortDescription: "bretzel.shortDescription",
    colors: ["#2ECC40", "#A3E635", "#D9F99D"],
    content: [
      {
        header: "bretzel.aboutProject.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "bretzel.aboutProject.paragraph",
          },
        ],
      },
      {
        header: "bretzel.mainFunctionality.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "bretzel.mainFunctionality.paragraph",
          },
        ],
      },
      {
        header: "bretzel.myRole.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "bretzel.myRole.paragraph",
          },
        ],
      },
      {
        header: "bretzel.technologies.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "bretzel.technologies.paragraph",
          },
        ],
      },
      {
        header: "bretzel.challenges.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "bretzel.challenges.paragraph",
          },
        ],
      },
      {
        header: "bretzel.results.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "bretzel.results.paragraph",
          },
        ],
      },
    ],
    categories: [Categories.Frontend, Categories.Design],
    stack: [Technologies.ReactSPA, Technologies.MobX],
  },
  {
    title: "Squad Ready IT",
    year: 2022,
    link: {
      ref: "https://squadready.it",
      value: "squadready.it",
    },
    shortDescription: "squadReady.shortDescription",
    colors: ["#003769", "#013F78", "#0075E0"],
    content: [
      {
        header: "squadReady.aboutProject.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "squadReady.aboutProject.paragraph",
          },
        ],
      },
      {
        header: "squadReady.mainFunctionality.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "squadReady.mainFunctionality.paragraph",
          },
        ],
      },
      {
        header: "squadReady.myRole.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "squadReady.myRole.paragraph",
          },
        ],
      },
      {
        header: "squadReady.technologies.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "squadReady.technologies.paragraph",
          },
        ],
      },
      {
        header: "squadReady.challenges.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "squadReady.challenges.paragraph",
          },
        ],
      },
      {
        header: "squadReady.results.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "squadReady.results.paragraph",
          },
        ],
      },
    ],
    categories: [Categories.Frontend, Categories.Design],
    stack: [Technologies.NextJs],
  },
  {
    title: "214 Kangxi radicals",
    year: 2022,
    link: {
      ref: "https://214-keys.ru",
      value: "214-keys.ru",
    },
    shortDescription: "kanxiKeys.shortDescription",
    colors: ["#705883", "#cecafe"],
    content: [
      {
        header: "kanxiKeys.aboutProject.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "kanxiKeys.aboutProject.paragraph",
          },
        ],
      },
      {
        header: "kanxiKeys.mainFunctionality.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "kanxiKeys.mainFunctionality.paragraph",
          },
        ],
      },
      {
        header: "kanxiKeys.myRole.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "kanxiKeys.myRole.paragraph",
          },
        ],
      },
      {
        header: "kanxiKeys.technologies.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "kanxiKeys.technologies.paragraph",
          },
        ],
      },
      {
        header: "kanxiKeys.challenges.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "kanxiKeys.challenges.paragraph",
          },
        ],
      },
      {
        header: "kanxiKeys.results.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "kanxiKeys.results.paragraph",
          },
        ],
      },
    ],
    categories: [Categories.Frontend, Categories.Design],
    stack: [Technologies.NextJs],
  },
  {
    title: "Planyway",
    year: 2024,
    link: {
      ref: "https://planyway.com",
      value: "planyway.com",
    },
    shortDescription: "planyway.shortDescription",
    colors: ["#26D37C", "#4990FA"],
    content: [
      {
        header: "planyway.aboutProject.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "planyway.aboutProject.paragraph",
          },
        ],
      },
      {
        header: "planyway.myContribution.header",
        sections: [
          {
            type: Sections.List,
            subtitle: "planyway.myContribution.subtitle",
            list: [
              "planyway.myContribution.list.0",
              "planyway.myContribution.list.1",
              "planyway.myContribution.list.2",
              "planyway.myContribution.list.3",
              "planyway.myContribution.list.4",
              "planyway.myContribution.list.5",
            ],
          },
        ],
      },
      {
        header: "planyway.architecture.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "planyway.architecture.paragraph",
          },
        ],
      },
      {
        header: "planyway.challenges.header",
        sections: [
          {
            type: Sections.Paragraph,
            content: "planyway.challenges.paragraph",
          },
        ],
      },
    ],
    categories: [Categories.Frontend, Categories.Backend],
    stack: [
      Technologies.ReactSPA,
      Technologies.Angular,
      Technologies.Redux,
      Technologies.FSD,
      Technologies.Storybook,
    ],
  },
];
