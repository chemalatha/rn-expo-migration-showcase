---
title: BodyText
description: Body copy component with size and content style variants. API-compatible with @ddsrn/components/BodyText.
---

## Usage

```tsx
import { BodyText } from './design-system/BodyText';

<BodyText size="md">Short form body copy.</BodyText>

<BodyText size="sm" contentStyle="longForm">
  Long form body copy uses a taller line height for readability
  in paragraphs with multiple lines.
</BodyText>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | Font size |
| `contentStyle` | `"shortForm" \| "longForm"` | `"shortForm"` | Line height — `longForm` is taller for multi-line paragraphs |
| `style` | `TextStyle` | — | Additional style overrides |

## Size scale

| Size | Font | shortForm lineHeight | longForm lineHeight |
|------|------|---------------------|---------------------|
| `xs` | 12px | 16px | 20px |
| `sm` | 14px | 18px | 22px |
| `md` | 16px | 20px | 24px |
| `lg` | 20px | 24px | 28px |
