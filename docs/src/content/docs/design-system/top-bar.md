---
title: TopBar
description: Navigation bar with title and left/right slots. Platform-aware title alignment. API-compatible with @ddsrn/components/TopBar.
---

## Usage

```tsx
import { TopBar } from './design-system/TopBar';

// Simple title
<TopBar title="My Screen" />

// With left/right slots
<TopBar
  title="Settings"
  left={<BackButton />}
  right={<SaveButton />}
/>

// No border
<TopBar title="Fullscreen" hasBorder={false} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Centre title text |
| `left` | `ReactNode` | — | Left slot — typically a back button |
| `right` | `ReactNode` | — | Right slot — typically an action button |
| `hasBorder` | `boolean` | `true` | Show 1px bottom border (`StyleSheet.hairlineWidth`) |
| `style` | `ViewStyle` | — | Container style overrides |

## Platform behaviour

| Platform | Title alignment | Min height |
|----------|----------------|------------|
| iOS | Centred | 44px |
| Android | Left-aligned | 56px |
| Web | Centred | 44px |

This matches the `dds-react-native` TopBar behaviour — iOS follows Apple HIG, Android follows Material Design.

## Accessibility

- Container: `accessibilityRole="none"` (not a landmark)
- Title text: `accessibilityRole="header"` (announced by screen readers as a heading)
