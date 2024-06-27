import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Header from "./index";
import { TABS } from "../../model/enums";

export default {
  title: "Widgets/Header",
  component: Header,
} as Meta;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  activeTabId: TABS.about,
};
