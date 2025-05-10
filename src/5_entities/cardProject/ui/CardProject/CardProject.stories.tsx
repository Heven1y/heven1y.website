import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";

import { Categories } from "@/shared/models/enums";

import CardProject from "./index";

export default {
  title: "Entities/CardProject",
  component: CardProject,
} as Meta;

const Template: StoryFn<typeof CardProject> = (args) => (
  <CardProject {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  colors: ["#3877EE", "#EF5DA8"],
  title: "Radiant",
  description:
    "Web application for tracking activity on a project (Similar to Tempo).",
  categories: new Map([
    [Categories.Design, true],
    [Categories.Frontend, false],
    [Categories.Backend, false],
  ]),
  onClick: action("onClick"),
};
