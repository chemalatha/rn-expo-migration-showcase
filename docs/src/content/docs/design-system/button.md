---
title: Button
description: Interactive button with 4 variants and inlined accessibility logic. API-compatible with @ddsrn/components/Button.
---

## Usage

```tsx
import { Button } from './design-system/Button';

// Primary (default)
<Button onPress={() => console.log('pressed')}>Tap me</Button>

// Secondary
<Button variant="secondary" onPress={handlePress}>Cancel</Button>

// Disabled
<Button disabled>Unavailable</Button>

// Small
<Button size="sm">Compact</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "tertiary" \| "link"` | `"primary"` | Visual style |
| `size` | `"md" \| "sm"` | `"md"` | Size |
| `disabled` | `boolean` | `false` | Disables interaction, reduces opacity to 0.4 |
| `isFullWidth` | `boolean` | `false` | Stretches button to fill container width |
| `onPress` | `(event) => void` | — | Press handler |
| `onPressIn` | `(event) => void` | — | Press-in handler |
| `onPressOut` | `(event) => void` | — | Press-out handler |
| `leftIcon` | `ReactNode` | — | Icon before label |
| `rightIcon` | `ReactNode` | — | Icon after label |
| `accessibilityLabel` | `string` | Children text | Screen reader label |
| `accessibilityHint` | `string` | — | Screen reader hint |

## Variants

| Variant | Background | Text colour | Border |
|---------|-----------|-------------|--------|
| `primary` | `colorInteractiveDefault` (Tesco blue) | White | None |
| `secondary` | White | `colorInteractiveDefault` | 1px blue |
| `tertiary` | Transparent | `colorInteractiveDefault` | None |
| `link` | Transparent | `colorInteractiveDefault` | None + underline |

## Accessibility

The `useButton` logic (inlined from `@ddsrn/headless`) handles:
- `accessibilityRole="button"`
- `accessibilityState={{ disabled }}`
- Auto-derived `accessibilityLabel` from string children
- Dev warnings for icon-only buttons without `accessibilityLabel`
