import { configDefaults, coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
    exclude: [...configDefaults.exclude, '**/**.config.{?(c|m)js,ts}', 'fontawesome.ts',
      'setupTests.ts'],
    coverage: {
      exclude: [
        '**/**.config.{?(c|m)js,ts}', // Exclude config files
        'fontawesome.ts',
        'setupTests.ts',
        ...coverageConfigDefaults.exclude
      ]
    }
  },
});
