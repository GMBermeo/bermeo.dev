import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import parser from "@typescript-eslint/parser";
import eslintReact from "@eslint-react/eslint-plugin";
import pluginNext from "@next/eslint-plugin-next";

import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "**/*.mjs",
      "eslint.config.mjs",
      "**/*.js",
      ".next/**",
      "node_modules/**",
    ],
  },
  {
    files: ["lib/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["lib/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintReact.configs["recommended-typescript"],
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    name: "ESLint Config - nextjs",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      next: pluginNext,
    },
    rules: {
      "next/no-img-element": "off",
      "next/no-html-link-for-pages": "warn",
      "next/no-head-element": "warn",
      "next/no-title-in-document-head": "warn",
      "next/no-css-tags": "warn",
      "next/no-sync-scripts": "warn",
      "next/no-unwanted-polyfillio": "warn",
      "next/no-page-custom-font": "warn",
      "next/no-before-interactive-script-outside-document": "warn",
      "next/no-styled-jsx-in-document": "warn",
      "next/no-typos": "warn",
      "next/no-async-client-component": "warn",
      "next/google-font-display": "warn",
      "next/google-font-preconnect": "warn",
      "next/next-script-for-ga": "warn",

      "next/no-script-component-in-head": "error",
      "next/inline-script-id": "error",
      "next/no-assign-module-variable": "error",
      "next/no-document-import-in-page": "error",
      "next/no-duplicate-head": "error",
      "next/no-head-import-in-document": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off",
      // Warnings
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "react/no-unstable-nested-components": "warn",
      "react/prop-types": "warn",
      "@eslint-react/prefer-read-only-props": "warn",
      "@eslint-react/no-complex-conditional-rendering": "warn",
      "@eslint-react/no-children-prop": "warn",
      "@eslint-react/no-implicit-key": "warn",
      "@eslint-react/no-array-index-key": "warn",
      "@eslint-react/no-unstable-default-props": "warn",
      "@eslint-react/web-api/no-leaked-timeout": "warn",
      "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "warn",
      "@eslint-react/no-use-context": "warn",
      "@eslint-react/no-context-provider": "warn",
      "@eslint-react/dom/no-missing-iframe-sandbox": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/no-misused-spread": "warn",
      "@typescript-eslint/no-confusing-void-expression": "warn",
      "@typescript-eslint/prefer-reduce-type-parameter": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-invalid-void-type": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unnecessary-type-arguments": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-deprecated": "warn",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-enum-comparison": "warn",
      "@typescript-eslint/restrict-plus-operands": "warn",
      "@typescript-eslint/no-duplicate-type-constituents": "warn",
      "@typescript-eslint/dot-notation": "warn",
      "@typescript-eslint/consistent-indexed-object-style": "warn",
      "@typescript-eslint/non-nullable-type-assertion-style": "warn",
      "@typescript-eslint/no-unnecessary-template-expression": "warn",
      "@typescript-eslint/no-base-to-string": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/consistent-type-definitions": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",

      // Errors
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-empty-function": "warn",
    },
    settings: {
      react: {
        version: "19.0.0",
      },
      next: {
        rootDir: ".",
      },
    },
  },
]);
