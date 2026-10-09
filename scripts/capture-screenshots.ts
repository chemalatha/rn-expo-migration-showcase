/**
 * capture-screenshots.ts — Phase 6 (CI Screenshot Pipeline)
 *
 * Playwright test file that captures screenshots of the Expo web app.
 * Runs as part of the Playwright test suite so it integrates with the
 * webServer lifecycle in playwright.config.ts:
 *   - locally: reuses existing Expo dev server on :4477 if running,
 *              otherwise auto-exports and serves via `serve`
 *   - CI:      always runs expo export + serve (clean, reproducible)
 *
 * Usage:
 *   npm run screenshot          (local — reuses live server if available)
 *   CI=true npm run screenshot  (simulates CI behaviour)
 *
 * Outputs:
 *   screenshots/showcase-mobile.png   (390x844 @3x — iPhone 14 viewport)
 *   screenshots/showcase-desktop.png  (1280x800 @2x — desktop viewport)
 *   docs/public/screenshots/          (auto-copied for Astro docs site)
 */

import {test, expect} from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

const SCREENSHOTS_DIR = path.resolve(__dirname, '../screenshots');
const DOCS_PUBLIC_DIR = path.resolve(
  __dirname,
  '../docs/public/screenshots',
);
const HEADING_TEXT = 'DDS Standalone Components';

function ensureDirs() {
  fs.mkdirSync(SCREENSHOTS_DIR, {recursive: true});
  fs.mkdirSync(DOCS_PUBLIC_DIR, {recursive: true});
}

function copyToDocs(src: string, filename: string) {
  fs.copyFileSync(src, path.join(DOCS_PUBLIC_DIR, filename));
  console.log('[docs] Copied ' + filename + ' to docs/public/screenshots/');
}

// Mobile viewport — iPhone 14 (390x844 @3x)
test('capture mobile screenshot', async ({browser}) => {
  ensureDirs();

  const ctx = await browser.newContext({
    viewport: {width: 390, height: 844},
    deviceScaleFactor: 3,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
  });
  const page = await ctx.newPage();

  await page.goto('/');

  // Confirm the app has rendered before screenshotting
  await expect(page.getByText(HEADING_TEXT)).toBeVisible({timeout: 15_000});

  const outputPath = path.join(SCREENSHOTS_DIR, 'showcase-mobile.png');
  await page.screenshot({path: outputPath, fullPage: true});
  console.log('[mobile] Saved -> ' + outputPath);

  copyToDocs(outputPath, 'showcase-mobile.png');
  await ctx.close();
});

// Desktop viewport (1280x800 @2x)
test('capture desktop screenshot', async ({browser}) => {
  ensureDirs();

  const ctx = await browser.newContext({
    viewport: {width: 1280, height: 800},
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  await page.goto('/');
  await expect(page.getByText(HEADING_TEXT)).toBeVisible({timeout: 15_000});

  const outputPath = path.join(SCREENSHOTS_DIR, 'showcase-desktop.png');
  await page.screenshot({path: outputPath, fullPage: true});
  console.log('[desktop] Saved -> ' + outputPath);

  copyToDocs(outputPath, 'showcase-desktop.png');
  await ctx.close();
});
