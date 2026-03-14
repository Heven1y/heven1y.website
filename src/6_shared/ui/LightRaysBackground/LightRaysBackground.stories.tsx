import { Meta, StoryFn } from "@storybook/react";

import LightRaysBackground from "./index";

export default {
  title: "Shared/LightRaysBackground",
  component: LightRaysBackground,
  argTypes: {
    raysOrigin: {
      control: "select",
      options: [
        "top-center",
        "top-left",
        "top-right",
        "right",
        "left",
        "bottom-center",
        "bottom-right",
        "bottom-left",
      ],
    },
    raysColor: { control: "color" },
    raysSpeed: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
    lightSpread: { control: { type: "range", min: 0.1, max: 5, step: 0.1 } },
    rayLength: { control: { type: "range", min: 0.1, max: 5, step: 0.1 } },
    pulsating: { control: "boolean" },
    fadeDistance: { control: { type: "range", min: 0, max: 3, step: 0.1 } },
    saturation: { control: { type: "range", min: 0, max: 2, step: 0.1 } },
    followMouse: { control: "boolean" },
    mouseInfluence: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    noiseAmount: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    distortion: { control: { type: "range", min: 0, max: 2, step: 0.1 } },
    className: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "100vh", background: "#0a0a0a" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof LightRaysBackground>;

const Template: StoryFn<typeof LightRaysBackground> = (args) => (
  <LightRaysBackground {...args} />
);

export const Default = Template.bind({});
Default.args = {
  raysOrigin: "top-center",
  raysColor: "#ffffff",
  raysSpeed: 1,
  lightSpread: 1,
  rayLength: 2,
  pulsating: false,
  fadeDistance: 1.0,
  saturation: 1.0,
  followMouse: true,
  mouseInfluence: 0.1,
  noiseAmount: 0.0,
  distortion: 0.0,
};

export const WarmSunset = Template.bind({});
WarmSunset.args = {
  raysOrigin: "bottom-center",
  raysColor: "#ff6622",
  raysSpeed: 0.5,
  lightSpread: 1.5,
  rayLength: 2.5,
  pulsating: true,
  fadeDistance: 2.0,
  saturation: 1.5,
  followMouse: true,
  mouseInfluence: 0.3,
  noiseAmount: 0.05,
  distortion: 0.3,
};
