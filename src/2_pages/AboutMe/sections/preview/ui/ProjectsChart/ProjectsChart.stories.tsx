import { Meta, StoryObj } from "@storybook/react";

import ProjectsChart from "./index";

const data = [
  {
    year: 2021,
    total: 1,
    projects: [
      {
        title: "Ci Craft",
        shortDescription: "ciCraft.shortDescription",
      },
    ],
  },
  {
    year: 2022,
    total: 4,
    projects: [
      {
        title: "Bretzel",
        shortDescription: "bretzel.shortDescription",
      },
      {
        title: "Squad Ready IT",
        shortDescription: "squadReady.shortDescription",
      },
      {
        title: "214 Kangxi radicals",
        shortDescription: "kanxiKeys.shortDescription",
      },
    ],
  },
  {
    year: 2023,
    total: 5,
    projects: [
      {
        title: "Radiant Metrics",
        shortDescription: "radiant.shortDescription",
      },
    ],
  },
  {
    year: 2027,
    total: 6,
    projects: [
      {
        title: "Planyway",
        shortDescription: "planyway.shortDescription",
      },
    ],
  },
];

const meta = {
  title: "Sections/AboutMe/ProjectsChart",
  component: ProjectsChart,
  parameters: {
    layout: "padded",
  },
  args: {
    data,
  },
} satisfies Meta<typeof ProjectsChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
