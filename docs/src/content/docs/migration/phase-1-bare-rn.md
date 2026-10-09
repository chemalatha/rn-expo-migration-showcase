---
title: Phase 1 — Bare React Native
description: The baseline app using bare React Native with a standalone design system. Identical toolchain to dds-react-native Playground.
---

## Goal

Create a standalone bare React Native app at `/work/dds-rn-hello-world/` that:

- Uses the **exact same toolchain** as the `dds-react-native` Playground
- Implements its own design system (`src/design-system/`) with zero `@ddsrn/*` dependencies
- Serves as the **baseline** that all subsequent phases diff against

## What was built

### Standalone design system

All components live in `src/design-system/` — no external packages required beyond `react` and `react-native`:

| Component | API |
|-----------|-----|
| `ThemeProvider` | `brand`, `mode` — same props as DDS |
| `useTheme()` | Returns `{ theme }` — same shape as DDS |
| `Heading` | `headingLevel`, `visualSize` |
| `BodyText` | `size`, `contentStyle` |
| `Button` | `variant`, `size`, `disabled`, `onPress` |
| `TopBar` | `title`, `left`, `right`, `hasBorder` |

Tokens are inlined in `src/design-system/theme/tokens.ts` — Tesco light colour, typography and spacing values.

### HelloWorldScreen

```tsx
// src/HelloWorldScreen.tsx
import { Heading } from './design-system/Heading';
import { BodyText } from './design-system/BodyText';
import { Button } from './design-system/Button';
import { TopBar } from './design-system/TopBar';
import { tokens } from './design-system/theme/tokens';
```

This file **never changes** across all 5 phases.

## Toolchain (matches dds-react-native Playground exactly)

```json
{
  "react": "19.0.0",
  "react-native": "0.84.0",
  "scripts": {
    "start": "react-native start --port 4477",
    "ios":   "react-native run-ios --port 4477"
  }
}
```

**Babel:** `module:@react-native/babel-preset`

**Metro:** `@react-native/metro-config` with `disableHierarchicalLookup: true`, port 4477

**Entry:** `AppRegistry.registerComponent(appName, () => App)`

## Runtime dependencies

Only 3 runtime packages — the minimum possible for a React Native app with safe areas:

```
react
react-native
react-native-safe-area-context
```

## Branch

`phase-1/bare-rn`
