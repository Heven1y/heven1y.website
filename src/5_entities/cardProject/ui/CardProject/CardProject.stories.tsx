import React from "react";

import { Meta, StoryFn } from "@storybook/react";

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
  dataCard: {
    title: "DESIGNER",
    description: "Some description",
    performedWork: [],
    toolsAndTechnologies: [],
  },
  actionsHeaderCard: null,
};
