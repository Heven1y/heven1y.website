import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";

import { Categories, Technologies } from "@/shared/models/enums";

import { Sections } from "../../model/enums";
import { DataProject } from "../../model/types";

import Project from "./index";

export default {
  title: "Entities/Project",
  component: Project,
} as Meta;

const mockData: DataProject = {
  title: "Radiant",
  content: [
    {
      title: "Introduction",
      sections: [
        {
          type: Sections.Paragraph,
          content:
            "Web application for tracking activity on a project (Similar to Tempo).",
        },
        {
          type: Sections.List,
          subtitle: "Some list",
          list: ["Item 1", "Item 2", "Item 3"],
        },
        {
          type: Sections.Image,
          src: "https://cdn.oneesports.gg/cdn-data/2022/01/GenshinImpact_GordonRamsayRaidenShogunMeme.jpg",
          alt: "Example image",
        },
      ],
    },
  ],
  categories: [
    { active: true, label: Categories.Design },
    { active: false, label: Categories.Frontend },
  ],
  stack: [
    { active: true, label: Technologies.React },
    { active: false, label: Technologies.NextJs },
  ],
};

const Template: StoryFn<typeof Project> = (args) => <Project {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isShow: true,
  onHide: action("onHide"),
  data: mockData,
};
