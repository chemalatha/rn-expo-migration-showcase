---
title: Heading
description: Semantic heading component with decoupled visual size. API-compatible with @ddsrn/components/Heading.
---

## Usage

```tsx
import { Heading } from './design-system/Heading';

<Heading headingLevel="1">Hello, World!</Heading>

// Override visual size independently of semantic level
<Heading headingLevel="2" visualSize="headline4">Section title</Heading>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headingLevel` | `"1" \| "2" \| "3" \| "4" \| "5" \| "6"` | `"1"` | Semantic HTML heading level (sets `accessibilityRole="header"`) |
| `visualSize` | `HeadingStyle` | Matches `headingLevel` | Override the visual size independently of semantic level |
| `style` | `TextStyle` | — | Additional style overrides |

## HeadingStyle values

`oversized1` `oversized2` `oversized3` `oversized4` `headline1` `headline2` `headline3` `headline4` `headline5` `headline6`

## Font size scale

| Visual size | Font size | Line height |
|------------|-----------|-------------|
| `oversized1` | 64px | 68px |
| `oversized2` | 56px | 60px |
| `headline1` | 32px | 36px |
| `headline2` | 28px | 32px |
| `headline3` | 24px | 28px |
| `headline4` | 20px | 24px |
| `headline5` | 16px | 20px |
| `headline6` | 14px | 18px |

All values sourced from `src/design-system/theme/tokens.ts`.
