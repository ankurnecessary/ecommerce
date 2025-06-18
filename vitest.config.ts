import path from "node:path";
import { fileURLToPath } from "node:url";
import react from '@vitejs/plugin-react';

import { defineConfig, configDefaults, coverageConfigDefaults } from "vitest/config";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    coverage: {
      exclude: [
        '**/**.config.{?(c|m)js,ts}', // Exclude config files
        '**/**.stories.{tsx}', // Exclude config files
        'storybook-static/**/*.*',
        'stories/**/*.*',
        'lighthouserc.js',
        'fontawesome.ts',
        'setupTests.ts',
        ...coverageConfigDefaults.exclude
      ]
    },
    projects: [
      {
        plugins: [react()],
        test: {
          name: "main",
          browser: {
            enabled: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
          exclude: [...configDefaults.exclude, '**/**.config.{?(c|m)js,ts}', 'fontawesome.ts',
            'setupTests.ts'],
          setupFiles: ['./vitestSetup.tsx']
        },
        resolve: {
          alias: {
            '@': path.resolve(__dirname, './'),
          },
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
