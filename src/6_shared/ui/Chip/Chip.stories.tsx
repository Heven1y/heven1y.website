import { Meta, StoryFn } from "@storybook/react";

import Chip from "./index";

export default {
  title: "Shared/Chip",
  component: Chip,
} as Meta;

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Frontend",
  active: false,
  isDisabled: false,
};
