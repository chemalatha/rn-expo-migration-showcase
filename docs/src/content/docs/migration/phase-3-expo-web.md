---
title: Phase 3 — Expo Web
description: Enabling browser rendering via react-native-web. The app runs identically in iOS, Android, and a browser — with no screen code changes.
---

## Goal

Enable the Hello World screen to run **in a browser** via `react-native-web`, with no changes to `src/`.

## Dependencies added

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

| Package | Purpose |
|---------|---------|
| `react-dom` | React's browser renderer |
| `react-native-web` | Maps RN primitives (`View`, `Text`, `Pressable`) to DOM elements |
| `@expo/metro-runtime` | Expo's Metro runtime shim for web |

## Version alignment

Both `react` and `react-dom` must be the exact same version. Expo 53 expects `19.0.0`:

```json
"react":     "19.0.0",
"react-dom": "19.0.0"
```

## `app.json` — web bundler

```json
{
  "expo": {
    "web": { "bundler": "metro" }
  }
}
```

Metro is used as the web bundler (not webpack), which is the Expo SDK 53 default.

## Running on web

```bash
expo start --web --port 4477
# Opens http://localhost:4477 in the browser
```

## DDS component web compatibility

All 5 standalone design-system components are web-compatible out of the box:

| Component | Web status | Reason |
|-----------|-----------|--------|
| `ThemeProvider` | Works | Pure React context |
| `useTheme` | Works | Pure React hook |
| `Heading` | Works | `Text` -> `<span>` via react-native-web |
| `BodyText` | Works | `Text` -> `<span>` |
| `Button` | Works | `Pressable` -> `<div>` with event handlers |
| `TopBar` | Works | `View` -> `<div>` |

No SVG, no reanimated, no gesture-handler — the standalone design system has zero native-only deps.

## Screenshot preview

_(Screenshot will be embedded here in Phase 5)_

## Branch

`phase-3/expo-web` (branched from `phase-2/expo`)
