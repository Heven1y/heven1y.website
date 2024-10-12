import type { Preview } from "@storybook/react";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import "../src/6_shared/styles/tailwind.css";
import "../src/6_shared/styles/storybookGlobal.css";
import i18next from "./i18next.ts";
import { I18nextProvider } from "react-i18next";

const decorators = [
  (Story, context) => {

    const {locale} = context.globals;

    React.useEffect(() => {
      if (i18next.isInitialized) {
        i18next.changeLanguage(locale);
      }
    }, [locale]);

    return (
      <NextUIProvider>
        <I18nextProvider i18n={i18next}>
          <Story />
        </I18nextProvider>
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

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "jp", title: "Japan" },
        { value: "ru", title: "Russian" },
      ],
      showName: true,
    },
  },
};


export default preview;
