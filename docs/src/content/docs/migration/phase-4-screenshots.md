---
title: Phase 4 — Screenshot Capture
description: Automated screenshot capture of the Expo web app using Playwright. Produces mobile and desktop PNGs for the docs site.
---

## Goal

Automatically capture PNG screenshots of the web-rendered Hello World screen for use in this docs site.

## Tool: Playwright

**Playwright** (Apache-2.0 licensed — no GPL) drives a headless Chromium browser against the live Expo Metro dev server.

## Usage

The Expo dev server must be running first:

```bash
# Terminal 1 — start Expo
npm start

# Terminal 2 — capture screenshots
npm run screenshot
```

## Script: `scripts/capture-screenshots.ts`

```ts
import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });

// Mobile viewport — iPhone 14 (390x844 @3x)
const mobilePage = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 3,
}).then(ctx => ctx.newPage());

await mobilePage.goto('http://localhost:4477', { waitUntil: 'networkidle' });
await mobilePage.waitForSelector('text=Hello, World!');
await mobilePage.screenshot({ path: 'screenshots/hello-world-mobile.png', fullPage: true });

// Desktop viewport (1280x800 @2x)
const desktopPage = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 2,
}).then(ctx => ctx.newPage());

await desktopPage.goto('http://localhost:4477', { waitUntil: 'networkidle' });
await desktopPage.screenshot({ path: 'screenshots/hello-world-desktop.png', fullPage: true });
```

## Outputs

| File | Viewport | Scale | Size |
|------|----------|-------|------|
| `screenshots/hello-world-mobile.png` | 390x844 | @3x | ~178KB |
| `screenshots/hello-world-desktop.png` | 1280x800 | @2x | ~122KB |

## `package.json` script

```json
"screenshot": "tsx scripts/capture-screenshots.ts"
```

## Verification

The script uses `waitForSelector('text=Hello, World!')` to confirm the React tree has rendered before capturing. If the app fails to render, the script exits with code 1.

## Branch

`phase-4/screenshots` (branched from `phase-3/expo-web`)
