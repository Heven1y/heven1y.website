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
import { Skills } from "@/shared/models/enums";
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
      <SkillElement name="React" borderColor={Skills.React}>
        <ReactIcon />
      </SkillElement>
      <SkillElement name="React Native" borderColor={Skills.ReactNative}>
        <ReactIcon />
      </SkillElement>
      <SkillElement name="Vue" borderColor={Skills.Vue}>
        <VueIcon />
      </SkillElement>
      <SkillElement name="Ionic" borderColor={Skills.Ionic}>
        <IonicIcon />
      </SkillElement>
      <SkillElement name="Redux" borderColor={Skills.Redux}>
        <ReduxIcon />
      </SkillElement>
      <SkillElement name="MobX" borderColor={Skills.MobX}>
        <MobXIcon />
      </SkillElement>
      <SkillElement name="GraphQL" borderColor={Skills.GraphQL}>
        <GraphQLIcon />
      </SkillElement>
      <SkillElement name="Firebase" borderColor={Skills.Firebase}>
        <FirebaseIcon />
      </SkillElement>
      <SkillElement name="Next.js" borderColor={Skills.NextJs}>
        <NextJSIcon />
      </SkillElement>
      <SkillElement name="React-Query" borderColor={Skills.ReactQuery}>
        <ReactQueryIcon />
      </SkillElement>
      <SkillElement
        name="Feature-Sliced Design"
        borderColor={Skills.FeatureSlicedDesign}
      >
        <FSDIcon />
      </SkillElement>
      <SkillElement name="Storybook" borderColor={Skills.Storybook}>
        <StorybookIcon />
      </SkillElement>
      <SkillElement name="Vite" borderColor={Skills.Vite}>
        <ViteIcon />
      </SkillElement>
    </>
  ),
};
