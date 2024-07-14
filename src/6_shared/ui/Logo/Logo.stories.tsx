import React from "react";

import { Meta, StoryFn } from "@storybook/react";

import Logo from "./index";

export default {
  title: "Shared/Logo",
  component: Logo,
} as Meta;

const Template: StoryFn<typeof Logo> = () => <Logo />;

export const Primary = Template.bind({});
