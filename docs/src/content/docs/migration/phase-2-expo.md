---
title: Phase 2 — Expo SDK
description: Migrating from bare React Native to Expo SDK 53. Exactly 5 config files change. Screen code is untouched.
---

## Goal

Migrate from bare React Native to **Expo SDK 53** by changing the minimum number of files, proving that the screen and design system are fully portable.

## The 5-file migration delta

```
git diff phase-1/bare-rn phase-2/expo -- src/
# Output: (empty) — zero screen/design-system changes
```

| File | Phase 1 | Phase 2 |
|------|---------|---------|
| `package.json` | `react-native start` scripts | `expo start` scripts, expo SDK added |
| `app.json` | `{ "name": "DDSNativeShell" }` | Full Expo config with platforms, bundleId |
| `babel.config.js` | `@react-native/babel-preset` | `babel-preset-expo` |
| `metro.config.js` | `@react-native/metro-config` | `expo/metro-config` |
| `index.js` | `AppRegistry.registerComponent(...)` | `registerRootComponent(App)` |

## Key changes explained

### `babel.config.js`

```js
// Phase 1
module.exports = { presets: ['module:@react-native/babel-preset'] };

// Phase 2
module.exports = (api) => {
  api.cache(true);
  return { presets: ['babel-preset-expo'] };
};
```

`babel-preset-expo` is a superset — it includes all bare RN transforms plus web support.

### `metro.config.js`

```js
// Phase 1
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Phase 2
const { getDefaultConfig } = require('expo/metro-config');
```

### `index.js`

```js
// Phase 1
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent(appName, () => App);

// Phase 2
import { registerRootComponent } from 'expo';
registerRootComponent(App);
```

## Branch

`phase-2/expo`
