import type { Preview } from "@storybook/react";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import "../src/6_shared/styles/tailwind.css";
import "../src/6_shared/styles/storybookGlobal.css";
import { nextIntl } from "./next-intl";

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
  initialGlobals: {
    locale: 'en',
    locales: {
        en: 'English',
        ru: 'Русский',
        ja: '日本語',
    },
  },
  parameters: {
    nextIntl,
    nextjs: {
      appDirectory: true,
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
