/**
 * capture-screenshots.ts - Phase 4
 *
 * Captures PNG screenshots of the Expo web app for use in the Phase 5
 * Astro docs site. Requires the Expo dev server to be running on port 4477.
 *
 * Usage:
 *   npm run screenshot
 *   SCREENSHOT_URL=http://localhost:4477 npm run screenshot
 *
 * Dependencies:
 *   @playwright/test  Apache-2.0 (no GPL)
 *   tsx               MIT
 *
 * Outputs:
 *   screenshots/hello-world-mobile.png   (390x844, iPhone 14 viewport)
 *   screenshots/hello-world-desktop.png  (1280x800, desktop viewport)
 */

import {chromium} from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

const BASE_URL = process.env.SCREENSHOT_URL ?? 'http://localhost:4477';
const OUTPUT_DIR = path.resolve(__dirname, '../screenshots');
const HEADING_SELECTOR = 'text=Hello, World!';
const TIMEOUT_MS = 30_000;

async function captureScreenshots(): Promise<void> {
  fs.mkdirSync(OUTPUT_DIR, {recursive: true});

  const browser = await chromium.launch({headless: true});

  try {
    // Mobile viewport (iPhone 14)
    console.log('[mobile] Navigating to ' + BASE_URL + '...');
    const mobileCtx = await browser.newContext({
      viewport: {width: 390, height: 844},
      deviceScaleFactor: 3,
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
    });
    const mobilePage = await mobileCtx.newPage();
    await mobilePage.goto(BASE_URL, {waitUntil: 'networkidle', timeout: TIMEOUT_MS});
    await mobilePage.waitForSelector(HEADING_SELECTOR, {timeout: TIMEOUT_MS});
    console.log('[mobile] Heading visible - app rendered successfully');

    const mobilePath = path.join(OUTPUT_DIR, 'hello-world-mobile.png');
    await mobilePage.screenshot({path: mobilePath, fullPage: true});
    console.log('[mobile] Screenshot saved -> ' + mobilePath);
    await mobileCtx.close();

    // Desktop viewport
    console.log('[desktop] Navigating to ' + BASE_URL + '...');
    const desktopCtx = await browser.newContext({
      viewport: {width: 1280, height: 800},
      deviceScaleFactor: 2,
    });
    const desktopPage = await desktopCtx.newPage();
    await desktopPage.goto(BASE_URL, {waitUntil: 'networkidle', timeout: TIMEOUT_MS});
    await desktopPage.waitForSelector(HEADING_SELECTOR, {timeout: TIMEOUT_MS});

    const desktopPath = path.join(OUTPUT_DIR, 'hello-world-desktop.png');
    await desktopPage.screenshot({path: desktopPath, fullPage: true});
    console.log('[desktop] Screenshot saved -> ' + desktopPath);
    await desktopCtx.close();

    console.log('');
    console.log('All screenshots captured successfully.');
    console.log('Output: ' + OUTPUT_DIR);
  } finally {
    await browser.close();
  }
}

captureScreenshots().catch(err => {
  console.error('Screenshot capture failed:', err);
  process.exit(1);
});
