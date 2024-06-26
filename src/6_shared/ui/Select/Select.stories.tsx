import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Select from "./index";
import { defaultBackgroundColorStorybook } from "@/shared/styles/storybookStyles";
import { Button } from "@nextui-org/react";
import { LANGUAGES } from "@/shared/config/constants";

export default {
  title: "Shared/Select",
  component: Select,
} as Meta;

const Template: StoryFn<typeof Select> = (args) => (
  <div style={defaultBackgroundColorStorybook}>
    <Select {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <Button>Select</Button>,
  items: LANGUAGES,
};
