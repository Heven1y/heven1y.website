import React from "react";

import { Meta, StoryFn } from "@storybook/react";

import Header from "./index";

export default {
  title: "Widgets/Header",
  component: Header,
} as Meta;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Primary = Template.bind({});
