import {defineConfig} from '@playwright/test';

/**
 * Playwright configuration — Phase 6 (CI Screenshot Pipeline)
 *
 * webServer lifecycle:
 *   1. Runs `expo export --platform web` to produce a static build in web-dist/
 *   2. Serves web-dist/ on port 4477 via `serve`
 *   3. Waits until http://localhost:4477 is ready before running tests
 *   4. Shuts down the server after all tests complete
 *
 * Local behaviour:
 *   reuseExistingServer: true  — if Expo dev server is already on :4477, use it.
 *   This means `npm run screenshot` works both with and without a running dev server.
 *
 * CI behaviour (process.env.CI is set by GitHub Actions):
 *   reuseExistingServer: false — always run the full export pipeline.
 *   Guarantees a clean, reproducible state on every run.
 */
export default defineConfig({
  webServer: {
    command:
      'npx expo export --platform web --output-dir web-dist && npx serve web-dist -p 4477 -s --no-clipboard',
    port: 4477,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
  use: {
    baseURL: 'http://localhost:4477',
  },
  // Point at our capture script as the test file
  testDir: './scripts',
  testMatch: '**/capture-screenshots.ts',
  // One worker — screenshots run sequentially (mobile then desktop)
  workers: 1,
  // Retry once on CI in case of transient flakiness
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
});
