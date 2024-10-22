import { Meta, StoryFn } from "@storybook/react";

import { BorderColorsSkills } from "@/shared/models/enums";
import { SkillElement } from "@/shared/ui";

import FirebaseIcon from "../../../5_entities/mySkills/icons/Technologies/Firebase";
import FSDIcon from "../../../5_entities/mySkills/icons/Technologies/FSD";
import GraphQLIcon from "../../../5_entities/mySkills/icons/Technologies/GraphQL";
import IonicIcon from "../../../5_entities/mySkills/icons/Technologies/Ionic";
import MobXIcon from "../../../5_entities/mySkills/icons/Technologies/MobX";
import NextJSIcon from "../../../5_entities/mySkills/icons/Technologies/NextJS";
import ReactIcon from "../../../5_entities/mySkills/icons/Technologies/React";
import ReactQueryIcon from "../../../5_entities/mySkills/icons/Technologies/ReactQuery";
import ReduxIcon from "../../../5_entities/mySkills/icons/Technologies/Redux";
import StorybookIcon from "../../../5_entities/mySkills/icons/Technologies/Storybook";
import ViteIcon from "../../../5_entities/mySkills/icons/Technologies/Vite";
import VueIcon from "../../../5_entities/mySkills/icons/Technologies/Vue";

import CardSkills from "./index";

export default {
  title: "Shared/CardSkills",
  component: CardSkills,
} as Meta;

const Template: StoryFn<typeof CardSkills> = (args) => <CardSkills {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "technologies",
  children: (
    <>
      <SkillElement name="React" borderColor={BorderColorsSkills.React}>
        <ReactIcon />
      </SkillElement>
      <SkillElement
        name="React Native"
        borderColor={BorderColorsSkills.ReactNative}
      >
        <ReactIcon />
      </SkillElement>
      <SkillElement name="Vue" borderColor={BorderColorsSkills.Vue}>
        <VueIcon />
      </SkillElement>
      <SkillElement name="Ionic" borderColor={BorderColorsSkills.Ionic}>
        <IonicIcon />
      </SkillElement>
      <SkillElement name="Redux" borderColor={BorderColorsSkills.Redux}>
        <ReduxIcon />
      </SkillElement>
      <SkillElement name="MobX" borderColor={BorderColorsSkills.MobX}>
        <MobXIcon />
      </SkillElement>
      <SkillElement name="GraphQL" borderColor={BorderColorsSkills.GraphQL}>
        <GraphQLIcon />
      </SkillElement>
      <SkillElement name="Firebase" borderColor={BorderColorsSkills.Firebase}>
        <FirebaseIcon />
      </SkillElement>
      <SkillElement name="Next.js" borderColor={BorderColorsSkills.NextJs}>
        <NextJSIcon />
      </SkillElement>
      <SkillElement
        name="React-Query"
        borderColor={BorderColorsSkills.ReactQuery}
      >
        <ReactQueryIcon />
      </SkillElement>
      <SkillElement
        name="Feature-Sliced Design"
        borderColor={BorderColorsSkills.FeatureSlicedDesign}
      >
        <FSDIcon />
      </SkillElement>
      <SkillElement name="Storybook" borderColor={BorderColorsSkills.Storybook}>
        <StorybookIcon />
      </SkillElement>
      <SkillElement name="Vite" borderColor={BorderColorsSkills.Vite}>
        <ViteIcon />
      </SkillElement>
    </>
  ),
};
