import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";

import { Tags } from "@/entities/project/model/enums";
import { Categories } from "@/shared/models/enums";

import FilterByTags from "./index";

export default {
  title: "Features/FilterByTags",
  component: FilterByTags,
} as Meta;

const Template: StoryFn<typeof FilterByTags> = (args) => (
  <FilterByTags {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: Tags.Category,
  tags: [
    { label: Categories.Design, active: true },
    { label: Categories.Frontend, active: false },
    { label: Categories.Backend, active: false },
  ],
  onChangeStateTag: action("onChangeStateTag"),
};
