import { Meta, StoryFn } from "@storybook/react";
import { action } from "storybook/actions";

import { Categories, Technologies } from "@/shared/models/enums";

import { Sections } from "../../model/enums";
import { DataProject } from "../../model/types";

import Project from "./index";

export default {
  title: "Entities/Project",
  component: Project,
} as Meta;

const mockData: DataProject = {
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
        {
          type: Sections.List,
          subtitle: "radiant.calibrationProcess.subheader",
          list: [
            "radiant.calibrationProcess.list.0",
            "radiant.calibrationProcess.list.1",
            "radiant.calibrationProcess.list.2",
          ],
        },
        {
          type: Sections.Image,
          src: "https://cdn.oneesports.gg/cdn-data/2022/01/GenshinImpact_GordonRamsayRaidenShogunMeme.jpg",
          alt: "Example image",
          width: 944,
          height: 530,
        },
      ],
    },
  ],
  categories: [Categories.Frontend, Categories.Design],
  stack: [Technologies.NextJs, Technologies.ReactSPA],
};

const Template: StoryFn<typeof Project> = (args) => <Project {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isShow: true,
  onHide: action("onHide"),
  data: mockData,
};
