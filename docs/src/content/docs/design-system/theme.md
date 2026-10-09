---
title: ThemeProvider & useTheme
description: The theme context provider and hook for the standalone design system.
---

## ThemeProvider

Wraps the application root and provides the active theme to all child components.

```tsx
import { ThemeProvider } from './design-system/theme/ThemeProvider';

<ThemeProvider brand="tesco" mode="light">
  <App />
</ThemeProvider>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brand` | `string` | `"tesco"` | Brand identifier (future multi-brand support) |
| `mode` | `"light" \| "dark"` | `"light"` | Colour mode (currently single theme) |
| `children` | `ReactNode` | — | Required |

## useTheme

Access the active theme from any component inside `ThemeProvider`.

```tsx
import { useTheme } from './design-system/theme/useTheme';

function MyComponent() {
  const { theme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.background.colorBackground1 }}>
      ...
    </View>
  );
}
```

### Return value

```ts
{
  theme: {
    typography:       { colorTextHeaderPrimary, colorTextBody, ... }
    interaction:      { colorInteractiveDefault, colorInteractiveActive, ... }
    line:             { colorBorderPrimary, colorBorderSecondary }
    background:       { colorBackground1, colorBackground2 }
    typographyTokens: { family, weight, size12..size64, lineHeight16..lineHeight68 }
    spacing:          { none, xs, sm, md, lg, xl, xxl }
    borderRadius:     { sm, md, lg, pill }
  }
  brand: string
  mode: "light" | "dark"
}
```
