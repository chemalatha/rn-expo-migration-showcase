/**
 * Heading — standalone implementation.
 *
 * API matches @ddsrn/components/Heading:
 *   headingLevel  "1" | "2" | "3" | "4" | "5" | "6"   (default "1")
 *   visualSize    HeadingStyle override                  (optional)
 *
 * Uses theme tokens from ThemeProvider for all style values.
 * No external dependencies beyond React Native.
 */

import React, {forwardRef} from 'react';
import {Text, StyleSheet, type TextProps} from 'react-native';
import {useTheme} from './theme/useTheme';
import type {Theme} from './theme/tokens';

// ─── Types ──────────────────────────────────────────────────────────────────

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export type HeadingStyle =
  | 'oversized1'
  | 'oversized2'
  | 'oversized3'
  | 'oversized4'
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6';

export interface HeadingProps extends TextProps {
  headingLevel?: HeadingLevel;
  visualSize?: HeadingStyle;
}

// ─── Maps ────────────────────────────────────────────────────────────────────

type TypographyTokens = Theme['typographyTokens'];
type FontSizeKey = Extract<keyof TypographyTokens, `size${string}`>;
type LineHeightKey = Extract<keyof TypographyTokens, `lineHeight${string}`>;

const fontSizeMap: Record<HeadingStyle, FontSizeKey> = {
  oversized1: 'size64',
  oversized2: 'size56',
  oversized3: 'size48',
  oversized4: 'size40',
  headline1: 'size32',
  headline2: 'size28',
  headline3: 'size24',
  headline4: 'size20',
  headline5: 'size16',
  headline6: 'size14',
};

const lineHeightMap: Record<HeadingStyle, LineHeightKey> = {
  oversized1: 'lineHeight68',
  oversized2: 'lineHeight60',
  oversized3: 'lineHeight52',
  oversized4: 'lineHeight44',
  headline1: 'lineHeight36',
  headline2: 'lineHeight32',
  headline3: 'lineHeight28',
  headline4: 'lineHeight24',
  headline5: 'lineHeight20',
  headline6: 'lineHeight18',
};

const levelToVisualSize: Record<HeadingLevel, HeadingStyle> = {
  '1': 'headline1',
  '2': 'headline2',
  '3': 'headline3',
  '4': 'headline4',
  '5': 'headline5',
  '6': 'headline6',
};

// ─── Component ───────────────────────────────────────────────────────────────

export const Heading = forwardRef<Text, HeadingProps>(function Heading(
  {headingLevel = '1', visualSize, style, children, ...props},
  ref,
) {
  const {theme} = useTheme();
  const effectiveSize = visualSize ?? levelToVisualSize[headingLevel];

  const textStyle = {
    color: theme.typography.colorTextHeaderPrimary,
    fontFamily: theme.typographyTokens.family.heading,
    fontWeight: theme.typographyTokens.weight.bold,
    fontSize: theme.typographyTokens[fontSizeMap[effectiveSize]],
    lineHeight: theme.typographyTokens[lineHeightMap[effectiveSize]],
  };

  return (
    <Text
      ref={ref}
      style={[textStyle, style]}
      accessibilityRole="header"
      {...props}>
      {children}
    </Text>
  );
});
