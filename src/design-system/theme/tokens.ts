/**
 * Standalone design-system tokens — Tesco light theme.
 *
 * Values are lifted from dds-react-native's generated token file
 * (legacy/tesco/light) and inlined here so this app has zero external
 * token dependencies. No Platform.select needed — font family falls back
 * to the system font if custom fonts are not loaded.
 *
 * Single theme only (Tesco light). Multi-brand / dark-mode support
 * is out of scope for this migration PoC.
 */

export const tokens = {
  // ─── Colour ────────────────────────────────────────────────────────────────
  typography: {
    colorTextHeaderPrimary: '#333333',
    colorTextBody: '#666666',
    colorTextOnDark: '#FFFFFF',
    colorTextHeaderSecondary: '#00539F',
  },
  interaction: {
    colorInteractiveDefault: '#00539F',
    colorInteractiveActive: '#007EB3',
    colorInteractiveInverse: '#FFFFFF',
  },
  line: {
    colorBorderPrimary: '#CCCCCC',
    colorBorderSecondary: '#E5E5E5',
  },
  background: {
    colorBackground1: '#FFFFFF',
    colorBackground2: '#F6F6F6',
  },

  // ─── Typography ────────────────────────────────────────────────────────────
  typographyTokens: {
    family: {
      // Falls back to system font if Tesco Modern is not loaded.
      heading: undefined as string | undefined,
      body: undefined as string | undefined,
    },
    weight: {
      light: '300' as const,
      regular: '400' as const,
      medium: '500' as const,
      bold: '700' as const,
    },
    // Font sizes
    size12: 12,
    size14: 14,
    size16: 16,
    size20: 20,
    size24: 24,
    size28: 28,
    size32: 32,
    size40: 40,
    size48: 48,
    size56: 56,
    size64: 64,
    // Line heights
    lineHeight16: 16,
    lineHeight18: 18,
    lineHeight20: 20,
    lineHeight22: 22,
    lineHeight24: 24,
    lineHeight28: 28,
    lineHeight32: 32,
    lineHeight36: 36,
    lineHeight44: 44,
    lineHeight52: 52,
    lineHeight60: 60,
    lineHeight68: 68,
  },

  // ─── Spacing ───────────────────────────────────────────────────────────────
  spacing: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  // ─── Border radius ─────────────────────────────────────────────────────────
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    pill: 999,
  },
} as const;

export type Theme = typeof tokens;
