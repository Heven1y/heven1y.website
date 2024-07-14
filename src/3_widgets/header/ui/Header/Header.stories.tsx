import React from "react";

import { Meta, StoryFn } from "@storybook/react";

import { TABS } from "../../model/enums";

import Header from "./index";

export default {
  title: "Widgets/Header",
  component: Header,
} as Meta;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  activeTabId: TABS.about,
};
