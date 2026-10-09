---
title: Button — API Reference
description: API reference for the standalone Button component. Props, variants, accessibility state, and usage notes.
---

:::note
See [Button](/components/button/) for usage guidance, accessibility advice, and platform behaviour.
:::

An interactive button built from React Native `Pressable`. All styling derived from theme tokens — no hardcoded colours.

```tsx
import { Button } from './design-system/Button';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "tertiary" \| "link"` | `"primary"` | Visual style variant |
| `size` | `"md" \| "sm"` | `"md"` | Button size — affects height, padding and font size |
| `disabled` | `boolean` | `false` | Disables interaction, applies 0.4 opacity |
| `isFullWidth` | `boolean` | `false` | Stretches button to fill container width (`alignSelf: "stretch"`) |
| `onPress` | `(event: GestureResponderEvent) => void` | — | Press handler |
| `onPressIn` | `(event: GestureResponderEvent) => void` | — | Called when press begins |
| `onPressOut` | `(event: GestureResponderEvent) => void` | — | Called when press ends |
| `leftIcon` | `ReactNode` | — | Icon displayed before the label |
| `rightIcon` | `ReactNode` | — | Icon displayed after the label |
| `children` | `string \| ReactNode` | — | Button label |
| `style` | `StyleProp<ViewStyle>` | — | Additional container styles |
| `accessibilityLabel` | `string` | Auto from `children` | Screen reader label. Required for icon-only buttons |
| `accessibilityHint` | `string` | — | Additional hint for screen readers |

## Variants

| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| `primary` | `colorInteractiveDefault` | `colorInteractiveInverse` | None |
| `secondary` | `colorInteractiveInverse` | `colorInteractiveDefault` | 1px `colorInteractiveDefault` |
| `tertiary` | Transparent | `colorInteractiveDefault` | None |
| `link` | Transparent | `colorInteractiveDefault` | None + underline |

Pressed state for `primary` shifts background to `colorInteractiveActive`. All other variants reduce opacity to `0.7` on press.

## Accessibility

The inlined `useButton` hook (sourced from `@ddsrn/headless/button`) handles:

- `accessibilityRole="button"` on the `Pressable`
- `accessibilityState={{ disabled }}` — announced by screen readers
- Auto-derived `accessibilityLabel` from string `children`
- Dev warning when icon-only button is missing `accessibilityLabel`
- Dev warning when `variant="link"` has no icon

## Token usage

All colour and spacing values are derived from the active theme via `useTheme()`:

| Style property | Token |
|---------------|-------|
| Background (primary) | `theme.interaction.colorInteractiveDefault` |
| Background (active) | `theme.interaction.colorInteractiveActive` |
| Text/border (secondary) | `theme.interaction.colorInteractiveDefault` |
| Text (primary) | `theme.interaction.colorInteractiveInverse` |
| Border radius | `theme.borderRadius.pill` |
| Padding horizontal (md) | 16px |
| Padding horizontal (sm) | 12px |
| Min height (md) | 36px |
| Min height (sm) | 28px |
| Font size | `theme.typographyTokens.size16` |
| Font weight | `theme.typographyTokens.weight.bold` |

## Examples

### All variants

```tsx
import { Button } from './design-system/Button';
import { View } from 'react-native';
import { tokens } from './design-system/theme/tokens';

function ButtonDemo() {
  return (
    <View style={{ gap: tokens.spacing.sm }}>
      <Button variant="primary" onPress={() => {}}>Primary</Button>
      <Button variant="secondary" onPress={() => {}}>Secondary</Button>
      <Button variant="tertiary" onPress={() => {}}>Tertiary</Button>
      <Button variant="link" onPress={() => {}}>Link</Button>
    </View>
  );
}
```

### Disabled state

```tsx
<Button disabled onPress={() => {}}>
  Unavailable
</Button>
```

### Full width

```tsx
<Button isFullWidth onPress={() => {}}>
  Confirm order
</Button>
```

### Small size

```tsx
<Button size="sm" variant="secondary" onPress={() => {}}>
  Dismiss
</Button>
```

### Icon with label

```tsx
<Button leftIcon={<MyIcon />} onPress={() => {}}>
  Add to basket
</Button>
```

### Icon-only (requires accessibilityLabel)

```tsx
<Button
  leftIcon={<CloseIcon />}
  accessibilityLabel="Close dialog"
  onPress={() => {}}
/>
```
