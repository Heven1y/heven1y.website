import { Meta, StoryFn } from "@storybook/react";

import YearDivider from "./index";

export default {
  title: "Sections/Projects/YearDivider",
  component: YearDivider,
} as Meta;

const Template: StoryFn<typeof YearDivider> = (args) => (
  <YearDivider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  year: 2025,
};
