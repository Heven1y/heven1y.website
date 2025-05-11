import { Meta, StoryFn } from "@storybook/react";

import SelectLanguage from "./index";

export default {
  title: "Features/SelectLanguage",
  component: SelectLanguage,
} as Meta;

const Template: StoryFn<typeof SelectLanguage> = () => <SelectLanguage />;

export const Primary = Template.bind({});
