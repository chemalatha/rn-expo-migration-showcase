---
title: Standalone Design System
description: A self-contained React Native design system that mirrors the public API of dds-react-native components with zero external dependencies.
---

## Overview

The standalone design system lives entirely in `src/design-system/`. It has **zero `@ddsrn/*` dependencies** — everything needed is either a React Native primitive or inlined code.

## Why standalone?

This design system exists to demonstrate that the **migration path** (bare RN -> Expo -> Web) is purely a tooling concern, not a component concern. The same component API works on all three targets without modification.

## API compatibility with dds-react-native

All components use the same prop names as their `@ddsrn/components` counterparts. Migrating back to the real library is a one-line import change per file:

```tsx
// Standalone
import { Heading } from './design-system/Heading';

// Real library
import { Heading } from '@ddsrn/components/Heading';
```

The prop API is identical.

## Components

| Component | File | Description |
|-----------|------|-------------|
| [ThemeProvider & useTheme](/design-system/theme) | `theme/ThemeProvider.tsx` | Context provider + hook |
| [Heading](/design-system/heading) | `Heading.tsx` | Semantic heading with level and visual size |
| [BodyText](/design-system/body-text) | `BodyText.tsx` | Body copy with size and content style |
| [Button](/design-system/button) | `Button.tsx` | Interactive button with 4 variants |
| [TopBar](/design-system/top-bar) | `TopBar.tsx` | Navigation bar with title and slots |

## Tokens

All design values are defined in `src/design-system/theme/tokens.ts`:

- **Colours** — Tesco light brand palette (typography, interaction, border, background)
- **Typography** — font sizes (`size12` through `size64`), line heights, font weights
- **Spacing** — `none`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`
- **Border radius** — `sm`, `md`, `lg`, `pill`
