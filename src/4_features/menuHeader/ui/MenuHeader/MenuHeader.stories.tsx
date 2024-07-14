import React from "react";

import { Meta, StoryFn } from "@storybook/react";

import { Tabs } from "@/shared/models/enums";

import MenuHeader from "./index";

export default {
  title: "Features/MenuHeader",
  component: MenuHeader,
} as Meta;

const Template: StoryFn<typeof MenuHeader> = (args) => <MenuHeader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  activeTabId: Tabs.about,
};
