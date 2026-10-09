---
title: Button
description: An interactive button component with multiple visual variants, sizes, and states. Supports icons and selection states.
---

:::note
See the [API Reference](/reference/button/) for full prop tables and component tokens.
:::

An interactive button component with multiple visual variants, sizes, and states.

## Usage

```tsx
import { Button } from './design-system/Button';

<Button onPress={() => console.log('Pressed')}>Click me</Button>
```

### Variants

```tsx
<Button variant="primary" onPress={handlePress}>Primary</Button>
<Button variant="secondary" onPress={handlePress}>Secondary</Button>
<Button variant="tertiary" onPress={handlePress}>Tertiary</Button>
<Button variant="link" onPress={handlePress}>Link</Button>
```

### Disabled

```tsx
<Button disabled onPress={handlePress}>Unavailable</Button>
```

### Small size

```tsx
<Button size="sm" onPress={handlePress}>Compact</Button>
```

### Full width

```tsx
<Button isFullWidth onPress={handlePress}>Full width</Button>
```

### With icons

```tsx
<Button leftIcon={<MyIcon />} onPress={handlePress}>
  Add item
</Button>
```

### Icon-only

Requires `accessibilityLabel` — no visible text, so the screen reader label must be explicit:

```tsx
<Button
  leftIcon={<CloseIcon />}
  accessibilityLabel="Close"
  onPress={handlePress}
/>
```

## Accessibility

### Built-in

- Has `button` accessibility role
- Exposes `disabled` state to assistive technologies
- Uses `children` string as the accessibility label automatically
- Dev warnings logged for icon-only buttons missing `accessibilityLabel`

### Usage

- Always provide `accessibilityLabel` for icon-only buttons
- Add `accessibilityHint` to describe the action result when the label alone is insufficient

## Platform behaviour

### Pressed state

While pressed, button opacity reduces to `0.7` (secondary/tertiary/link) or background shifts to `colorInteractiveActive` (primary). Disabled buttons have `0.4` opacity and do not respond to press.

## API compatibility with dds-react-native

The standalone `Button` implements the core API subset. The dds-react-native `Button` adds:

| Feature | Standalone | dds-react-native |
|---------|-----------|-----------------|
| `variant` primary/secondary/tertiary/link | ✅ | ✅ |
| `disabled` | ✅ | ✅ |
| `isFullWidth` | ✅ | ✅ |
| `leftIcon` / `rightIcon` | ✅ | ✅ |
| `accessibilityLabel` / `accessibilityHint` | ✅ | ✅ |
| `isLoading` (spinner) | ❌ | ✅ |
| `isSelected` | ❌ | ✅ |
| `enableHaptics` | ❌ | ✅ |
| `transparent` variant | ❌ | ✅ |
| `componentTokens` | ❌ | ✅ |
