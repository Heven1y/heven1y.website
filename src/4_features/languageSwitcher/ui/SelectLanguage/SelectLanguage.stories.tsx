import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectLanguage from "./index";
import { defaultBackgroundColorStorybook } from "@/shared/styles/storybookStyles";
import { Button, Selection } from "@nextui-org/react";
import { LANGUAGES } from "@/shared/config/constants";

export default {
  title: "Features/SelectLanguage",
  component: SelectLanguage,
} as Meta;

const Template: StoryFn<typeof SelectLanguage> = () => (
  <div style={defaultBackgroundColorStorybook}>
    <SelectLanguage />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
