import { Meta, StoryFn } from "@storybook/react";

import { JavaScriptIcon } from "@/shared/icons/programingLanguages";
import { Skills } from "@/shared/models/enums";

import SkillElement from "./index";

export default {
  title: "Shared/SkillElement",
  component: SkillElement,
} as Meta;

const Template: StoryFn<typeof SkillElement> = (args) => (
  <SkillElement {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: "JavaScript",
  borderColor: Skills.JavaScript,
  children: <JavaScriptIcon />,
};
