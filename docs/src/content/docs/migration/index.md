---
title: Migration Overview
description: A complete guide to migrating a React Native app with a standalone design system to Expo, Expo Web, and beyond.
---

## What this guide covers

This guide documents the migration path of the **DDS React Native Hello World** application through 5 phases — from a bare React Native baseline to a fully web-capable Expo app with automated screenshots and a documentation site.

The application was built with a **standalone design system** (`src/design-system/`) that mirrors the public API of `dds-react-native` components — with no external `@ddsrn/*` package dependencies. This makes the migration portable and demonstrable in isolation.

## Migration path

| Phase | What changes | Screen code changes |
|-------|-------------|-------------------|
| [Phase 1 — Bare React Native](/migration/phase-1-bare-rn) | Baseline: bare RN + standalone design system | — |
| [Phase 2 — Expo SDK](/migration/phase-2-expo) | 5 config files only | None |
| [Phase 3 — Expo Web](/migration/phase-3-expo-web) | 3 web deps added | None |
| [Phase 4 — Screenshots](/migration/phase-4-screenshots) | Playwright script added | None |
| [Phase 5 — Astro Docs](/migration/phase-5-astro-docs) | This docs site | None |

## Key principle

> `git diff phase-1/bare-rn phase-3/expo-web -- src/` outputs **0 lines**.

The screen component and the entire design system are never touched across the migration. Only build tooling and configuration changes.

## Repository structure

```
dds-rn-hello-world/
├── src/
│   ├── design-system/        # Standalone components (zero @ddsrn/* deps)
│   │   ├── theme/            # ThemeProvider, useTheme, tokens
│   │   ├── Heading.tsx
│   │   ├── BodyText.tsx
│   │   ├── Button.tsx
│   │   ├── TopBar.tsx
│   │   └── index.ts
│   └── HelloWorldScreen.tsx  # The demo screen (never changes)
├── App.tsx                   # Root: SafeAreaProvider + ThemeProvider
├── docs/                     # This Astro docs site
├── scripts/                  # Screenshot capture (Playwright)
├── screenshots/              # Generated PNGs (Phase 4+)
├── ios/ + android/           # Native projects
└── package.json              # Changes per phase
```
