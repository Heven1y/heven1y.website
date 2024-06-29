import { Meta, StoryFn } from "@storybook/react";
import SkillElement from "./index";
import JavaScriptIcon from "@/entities/mySkills/icons/ProgramingLanguages/JavaScript";
import { BORDER_COLORS_SKILLS } from "@/shared/models/enums";

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
  borderColor: BORDER_COLORS_SKILLS.JavaScript,
  children: <JavaScriptIcon />,
};
