import type { Preview } from "@storybook/react";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import "../src/6_shared/styles/tailwind.css";
import "../src/6_shared/styles/storybookGlobal.css";

const decorators = [
  (Story) => {
    return (
      <NextUIProvider>
        <Story />
      </NextUIProvider>
    );
  },
];

const preview: Preview = {
  parameters: {
    nextjs: {
      router: {
        locale: "en",
        basePath: "/",
        isReady: true,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#121316",
        },
      ],
    },
  },
  decorators,
};

export default preview;
