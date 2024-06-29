import { Meta, StoryFn } from "@storybook/react";
import CardSkills from "./index";
import { BORDER_COLORS_SKILLS } from "@/shared/models/enums";
import SkillElement from "@/shared/ui/SkillElement";
import ReactIcon from "../../icons/Technologies/React";
import VueIcon from "../../icons/Technologies/Vue";
import IonicIcon from "../../icons/Technologies/Ionic";
import ReduxIcon from "../../icons/Technologies/Redux";
import MobXIcon from "../../icons/Technologies/MobX";
import GraphQLIcon from "../../icons/Technologies/GraphQL";
import FirebaseIcon from "../../icons/Technologies/Firebase";
import NextJSIcon from "../../icons/Technologies/NextJS";
import ReactQueryIcon from "../../icons/Technologies/ReactQuery";
import FSDIcon from "../../icons/Technologies/FSD";
import StorybookIcon from "../../icons/Technologies/Storybook";
import ViteIcon from "../../icons/Technologies/Vite";

export default {
  title: "Entities/CardSkills",
  component: CardSkills,
} as Meta;

const Template: StoryFn<typeof CardSkills> = (args) => <CardSkills {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "technologies",
  children: (
    <>
      <SkillElement name="React" borderColor={BORDER_COLORS_SKILLS.React}>
        <ReactIcon />
      </SkillElement>
      <SkillElement
        name="React Native"
        borderColor={BORDER_COLORS_SKILLS.ReactNative}
      >
        <ReactIcon />
      </SkillElement>
      <SkillElement name="Vue" borderColor={BORDER_COLORS_SKILLS.Vue}>
        <VueIcon />
      </SkillElement>
      <SkillElement name="Ionic" borderColor={BORDER_COLORS_SKILLS.Ionic}>
        <IonicIcon />
      </SkillElement>
      <SkillElement name="Redux" borderColor={BORDER_COLORS_SKILLS.Redux}>
        <ReduxIcon />
      </SkillElement>
      <SkillElement name="MobX" borderColor={BORDER_COLORS_SKILLS.MobX}>
        <MobXIcon />
      </SkillElement>
      <SkillElement name="GraphQL" borderColor={BORDER_COLORS_SKILLS.GraphQL}>
        <GraphQLIcon />
      </SkillElement>
      <SkillElement name="Firebase" borderColor={BORDER_COLORS_SKILLS.Firebase}>
        <FirebaseIcon />
      </SkillElement>
      <SkillElement name="Next.js" borderColor={BORDER_COLORS_SKILLS.NextJs}>
        <NextJSIcon />
      </SkillElement>
      <SkillElement
        name="React-Query"
        borderColor={BORDER_COLORS_SKILLS.ReactQuery}
      >
        <ReactQueryIcon />
      </SkillElement>
      <SkillElement
        name="Feature-Sliced Design"
        borderColor={BORDER_COLORS_SKILLS.FeatureSlicedDesign}
      >
        <FSDIcon />
      </SkillElement>
      <SkillElement
        name="Storybook"
        borderColor={BORDER_COLORS_SKILLS.Storybook}
      >
        <StorybookIcon />
      </SkillElement>
      <SkillElement name="Vite" borderColor={BORDER_COLORS_SKILLS.Vite}>
        <ViteIcon />
      </SkillElement>
    </>
  ),
};
