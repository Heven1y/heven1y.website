import { useEffect } from "react";

import { I18nextProvider } from "react-i18next";
import type { Preview } from "@storybook/react";

import i18n from "./i18next";
import React from "react";

const decorators = [
  (Story, context) => {
    const { locale } = context.globals;

    useEffect(() => {
      i18n.changeLanguage(locale);
    }, [locale]);

    return (
      <I18nextProvider i18n={i18n}>
        <Story/>
      </I18nextProvider>
    )
  }
];

const preview: Preview = {
  parameters: {
    nextjs: {
      router: {
        locale: "en",
        basePath: "/",
        isReady: true
      },
      appDirectory: true
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators
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

