import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PageTabMenu from "./index";
import { defaultBackgroundColorStorybook } from "@/shared/styles/storybookStyles";

export default {
  title: "Shared/PageTabMenu",
  component: PageTabMenu,
} as Meta;

const Template: StoryFn<typeof PageTabMenu> = (args) => (
  <div style={defaultBackgroundColorStorybook}>
    <PageTabMenu {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "About me",
};
