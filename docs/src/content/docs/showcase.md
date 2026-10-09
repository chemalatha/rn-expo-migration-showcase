---
title: Component Showcase
description: The main screen of rn-expo-migration-showcase. Demonstrates TopBar, Heading, BodyText, and Button from the standalone design system.
---

`src/ComponentShowcase.tsx` is the single screen that drives the entire showcase. It uses all five standalone design-system components and runs unchanged on iOS, Android, and Expo Web.

## What is on screen

```
┌─────────────────────────────┐
│  Component Showcase  (TopBar)│
├─────────────────────────────┤
│                             │
│  DDS Standalone Components  │  ← Heading level 1
│                             │
│  These components are built │  ← BodyText md
│  from React Native          │
│  primitives...              │
│                             │
│  Interactive Button         │  ← Heading level 2, visualSize headline4
│                             │
│  Tap the button below...    │  ← BodyText md (live state)
│                             │
│  [ Tap me ]                 │  ← Button primary
│                             │
│  Migration phases           │  ← Heading level 2
│  Phase 1 - ...              │  ← BodyText sm × 5
│  Phase 2 - ...              │
│  ...                        │
└─────────────────────────────┘
```

## Screenshots

Captured by Playwright from the live Expo Web dev server (`npm run screenshot`).

### Mobile — 390 x 844 @3x (iPhone 14 viewport)

![Component Showcase on mobile web — TopBar, Heading DDS Standalone Components, BodyText, interactive Button, and migration phases list](/screenshots/showcase-mobile.png)

### Desktop — 1280 x 800 @2x

![Component Showcase on desktop web — full page layout at 1280px width](/screenshots/showcase-desktop.png)

## Source

```tsx
// src/ComponentShowcase.tsx

import { Heading }  from './design-system/Heading';
import { BodyText } from './design-system/BodyText';
import { Button }   from './design-system/Button';
import { TopBar }   from './design-system/TopBar';
import { tokens }   from './design-system/theme/tokens';

export function ComponentShowcase() {
  const [tapCount, setTapCount] = useState(0);

  return (
    <SafeAreaView>
      <TopBar title="Component Showcase" />
      <ScrollView>
        <Heading headingLevel="1">DDS Standalone Components</Heading>
        <BodyText size="md">...</BodyText>

        <Heading headingLevel="2" visualSize="headline4">Interactive Button</Heading>
        <BodyText size="md">{tapLabel}</BodyText>
        <Button onPress={() => setTapCount(c => c + 1)}>Tap me</Button>

        <Heading headingLevel="2" visualSize="headline4">Migration phases</Heading>
        <BodyText size="sm">Phase 1 - Standalone bare React Native</BodyText>
        <BodyText size="sm">Phase 2 - Expo SDK</BodyText>
        <BodyText size="sm">Phase 3 - Expo Web</BodyText>
        <BodyText size="sm">Phase 4 - Screenshot capture</BodyText>
        <BodyText size="sm">Phase 5 - Astro docs site</BodyText>
      </ScrollView>
    </SafeAreaView>
  );
}
```

## Key facts

- **Never modified** across any phase of the migration
- **Identical output** on iOS, Android, and Expo Web
- **No external imports** beyond `react-native` and `react-native-safe-area-context`
- **5 tests** verifying render, content, and button interaction (`__tests__/ComponentShowcase.test.tsx`)
