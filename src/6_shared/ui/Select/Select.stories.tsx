import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Select from "./index";
import { Button } from "@nextui-org/react";
import { LANGUAGES } from "@/shared/config/constants";

export default {
  title: "Shared/Select",
  component: Select,
} as Meta;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Button>Select</Button>,
  items: LANGUAGES,
};
