/**
 * BodyText — standalone implementation.
 *
 * API matches @ddsrn/components/BodyText:
 *   size          "xs" | "sm" | "md" | "lg"              (default "md")
 *   contentStyle  "shortForm" | "longForm"                (default "shortForm")
 *
 * Uses theme tokens from ThemeProvider for all style values.
 * No external dependencies beyond React Native.
 */

import React, {forwardRef} from 'react';
import {Text, type TextProps} from 'react-native';
import {useTheme} from './theme/useTheme';
import type {Theme} from './theme/tokens';

// ─── Types ───────────────────────────────────────────────────────────────────

export type TextSize = 'xs' | 'sm' | 'md' | 'lg';
export type ContentStyle = 'shortForm' | 'longForm';

export interface BodyTextProps extends TextProps {
  size?: TextSize;
  contentStyle?: ContentStyle;
}

// ─── Maps ────────────────────────────────────────────────────────────────────

type TypographyTokens = Theme['typographyTokens'];
type FontSizeKey = Extract<keyof TypographyTokens, `size${string}`>;
type LineHeightKey = Extract<keyof TypographyTokens, `lineHeight${string}`>;

const fontSizeMap: Record<TextSize, FontSizeKey> = {
  xs: 'size12',
  sm: 'size14',
  md: 'size16',
  lg: 'size20',
};

const lineHeightMap: Record<TextSize, Record<ContentStyle, LineHeightKey>> = {
  xs: {shortForm: 'lineHeight16', longForm: 'lineHeight20'},
  sm: {shortForm: 'lineHeight18', longForm: 'lineHeight22'},
  md: {shortForm: 'lineHeight20', longForm: 'lineHeight24'},
  lg: {shortForm: 'lineHeight24', longForm: 'lineHeight28'},
};

// ─── Component ───────────────────────────────────────────────────────────────

export const BodyText = forwardRef<Text, BodyTextProps>(function BodyText(
  {size = 'md', contentStyle = 'shortForm', style, children, ...props},
  ref,
) {
  const {theme} = useTheme();

  const textStyle = {
    color: theme.typography.colorTextBody,
    fontFamily: theme.typographyTokens.family.body,
    fontWeight: theme.typographyTokens.weight.regular,
    fontSize: theme.typographyTokens[fontSizeMap[size]],
    lineHeight: theme.typographyTokens[lineHeightMap[size][contentStyle]],
  };

  return (
    <Text
      ref={ref}
      style={[textStyle, style]}
      accessibilityRole="text"
      {...props}>
      {children}
    </Text>
  );
});
