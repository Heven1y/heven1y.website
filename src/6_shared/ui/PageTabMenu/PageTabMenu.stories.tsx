import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PageTabMenu from "./index";

export default {
  title: "Shared/PageTabMenu",
  component: PageTabMenu,
} as Meta;

const Template: StoryFn<typeof PageTabMenu> = (args) => (
  <PageTabMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "About me",
};
