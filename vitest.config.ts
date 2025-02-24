import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
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
