import type { Meta, StoryObj } from "@storybook/react";

import { contentItems } from "../../model/content";

import ContentSwitcher from "./index";

const meta = {
  title: "Sections/AboutMe/ContentSwitcher",
  component: ContentSwitcher,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", minHeight: "100vh", padding: "80px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContentSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: contentItems,
    ariaLabel: "Biography sections",
  },
};
