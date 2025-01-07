import { Meta, StoryFn } from "@storybook/react";

import {
  FirebaseIcon,
  FSDIcon,
  GraphQLIcon,
  IonicIcon,
  MobXIcon,
  NextJSIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  StorybookIcon,
  ViteIcon,
  VueIcon,
} from "@/shared/icons/technologies";
import { BorderColorsSkills } from "@/shared/models/enums";
import { SkillElement } from "@/shared/ui";

import CardSkills from "./index";

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
