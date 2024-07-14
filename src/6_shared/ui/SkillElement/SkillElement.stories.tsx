import { Meta, StoryFn } from "@storybook/react";

import JavaScriptIcon from "@/entities/mySkills/icons/ProgramingLanguages/JavaScript";
import { BorderColorsSkills } from "@/shared/models/enums";

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
  borderColor: BorderColorsSkills.JavaScript,
  children: <JavaScriptIcon />,
};
