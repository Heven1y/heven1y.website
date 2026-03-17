import { Meta, StoryFn } from "@storybook/react";

import Preview from "./index";

export default {
  title: "Sections/AboutMe/Preview",
  component: Preview,
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<typeof Preview> = () => <Preview />;

export const Primary = Template.bind({});
