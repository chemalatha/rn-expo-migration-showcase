/**
 * TopBar — standalone implementation.
 *
 * API mirrors @ddsrn/components/TopBar (core subset):
 *   title       string                 — centre title text
 *   left        ReactNode              — left slot (e.g. back button)
 *   right       ReactNode              — right slot (e.g. action button)
 *   hasBorder   boolean (default true) — show bottom border
 *
 * Title is left-aligned on Android, centered on iOS — matching DDS behaviour.
 * No slot measurement / absolute title logic (simplified for PoC).
 * No external dependencies beyond React Native.
 */

import React, {forwardRef} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  type ViewProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {useTheme} from './theme/useTheme';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface TopBarProps extends ViewProps {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  hasBorder?: boolean;
  style?: StyleProp<ViewStyle>;
}

// ─── Component ───────────────────────────────────────────────────────────────

export const TopBar = forwardRef<View, TopBarProps>(function TopBar(
  {title, left, right, hasBorder = true, style, ...props},
  ref,
) {
  const {theme} = useTheme();
  const isIOS = Platform.OS === 'ios';

  const containerStyle: ViewStyle = {
    backgroundColor: theme.background.colorBackground1,
    borderBottomWidth: hasBorder ? StyleSheet.hairlineWidth : 0,
    borderBottomColor: theme.line.colorBorderSecondary,
    width: '100%',
  };

  const rowStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: isIOS ? 44 : 56,
    paddingHorizontal: theme.typographyTokens.size16,
    gap: theme.typographyTokens.size12,
  };

  const titleStyle = {
    flex: 1,
    color: theme.typography.colorTextHeaderPrimary,
    fontFamily: theme.typographyTokens.family.heading,
    fontWeight: theme.typographyTokens.weight.bold,
    fontSize: theme.typographyTokens.size16,
    lineHeight: theme.typographyTokens.lineHeight20,
    textAlign: (isIOS ? 'center' : 'left') as 'center' | 'left',
  };

  return (
    <View
      ref={ref}
      style={[containerStyle, style]}
      accessibilityRole="none"
      {...props}>
      <View style={rowStyle}>
        {left != null && <View>{left}</View>}
        {title != null && (
          <Text
            style={titleStyle}
            numberOfLines={1}
            accessibilityRole="header">
            {title}
          </Text>
        )}
        {right != null && <View>{right}</View>}
      </View>
    </View>
  );
});
