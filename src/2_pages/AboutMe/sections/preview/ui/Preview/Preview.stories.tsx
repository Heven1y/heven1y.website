import React from "react";

import { Meta, StoryFn } from "@storybook/react";

import Preview from "./index";

export default {
  title: "Sections/AboutMe/Preview",
  component: Preview,
} as Meta;

const Template: StoryFn<typeof Preview> = () => <Preview />;

export const Primary = Template.bind({});
