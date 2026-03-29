import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
  })),

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".storybook/**",
  ]),

  {
    files: ["**/*.{js,mjs,ts,tsx}"],
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "import/newline-after-import": ["error", { count: 1 }],
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "import/order": [
        "warn",
        {
          groups: [
            "external",
            "builtin",
            "internal",
            "sibling",
            "parent",
            "index",
          ],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "components", group: "internal" },
            { pattern: "@/**", group: "internal" },
            { pattern: "../**", group: "parent" },
            { pattern: "./**", group: "index" },
            { pattern: "**.scss", group: "internal", position: "after" },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "linebreak-style": "off",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/dot-notation": [
        "error",
        { allowPattern: "^[a-z]+(__[a-z]+)+$" },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true },
      ],
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/require-await": "off",
    },
  },

  ...storybook.configs["flat/recommended"],

  {
    files: ["**/*.stories.*"],
    rules: {
      "import/no-anonymous-default-export": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
]);

export default eslintConfig;
