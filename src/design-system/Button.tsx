/**
 * Button — standalone implementation.
 *
 * API mirrors @ddsrn/components/Button (core subset):
 *   variant   "primary" | "secondary" | "tertiary" | "link"  (default "primary")
 *   size      "md" | "sm"                                     (default "md")
 *   disabled  boolean                                          (default false)
 *   isFullWidth boolean                                        (default false)
 *   leftIcon / rightIcon  ReactNode
 *   onPress   (event) => void
 *   children  string | ReactNode
 *
 * The useButton logic (accessibility state, icon-only detection, dev warnings)
 * is inlined here — lifted from @ddsrn/headless/button/useButton.ts which is
 * pure TypeScript with no native dependencies.
 *
 * Styling uses plain StyleSheet values derived from theme tokens.
 * No react-native-reanimated, no react-native-gesture-handler needed.
 */

import React, {forwardRef, useState, useCallback} from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  type GestureResponderEvent,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import {useTheme} from './theme/useTheme';

// ─── Types ───────────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';
export type ButtonSize = 'md' | 'sm';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isFullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  children?: string | React.ReactNode;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

// ─── Inlined useButton logic (from @ddsrn/headless/button/useButton.ts) ──────

function useButton({
  variant,
  disabled = false,
  accessibilityLabel,
  children,
  leftIcon,
  rightIcon,
}: {
  variant?: ButtonVariant;
  disabled?: boolean;
  accessibilityLabel?: string;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}) {
  const hasChildren = Boolean(children);
  const isIconOnly =
    !hasChildren && (Boolean(leftIcon) || Boolean(rightIcon));
  const isDisabled = disabled;

  // Derive accessibility label: explicit label wins, then fall back to
  // string children, then undefined (screen reader reads children).
  const effectiveAccessibilityLabel: string | undefined =
    accessibilityLabel ??
    (typeof children === 'string' ? children : undefined);

  // Link variant without icons is a misconfiguration — warn in dev.
  if (__DEV__ && variant === 'link' && !leftIcon && !rightIcon) {
    console.warn('Button: link variant should have leftIcon or rightIcon');
  }
  if (__DEV__ && isIconOnly && !accessibilityLabel) {
    console.warn('Button: icon-only buttons require accessibilityLabel');
  }

  return {isDisabled, isIconOnly, effectiveAccessibilityLabel};
}

// ─── Component ───────────────────────────────────────────────────────────────

export const Button = forwardRef<View, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    disabled = false,
    isFullWidth = false,
    leftIcon,
    rightIcon,
    onPress,
    onPressIn,
    onPressOut,
    children,
    style,
    accessibilityLabel,
    accessibilityHint,
  },
  ref,
) {
  const {theme} = useTheme();
  const [isPressed, setIsPressed] = useState(false);

  const {isDisabled, isIconOnly, effectiveAccessibilityLabel} = useButton({
    variant,
    disabled,
    accessibilityLabel,
    children,
    leftIcon,
    rightIcon,
  });

  const handlePressIn = useCallback(
    (e: GestureResponderEvent) => {
      setIsPressed(true);
      onPressIn?.(e);
    },
    [onPressIn],
  );

  const handlePressOut = useCallback(
    (e: GestureResponderEvent) => {
      setIsPressed(false);
      onPressOut?.(e);
    },
    [onPressOut],
  );

  // ── Variant colours ────────────────────────────────────────────────────────
  const {
    colorInteractiveDefault,
    colorInteractiveInverse,
  } = theme.interaction;
  const {colorBorderSecondary} = theme.line;

  type VariantStyle = {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    textColor: string;
  };

  const variantStyles: Record<ButtonVariant, VariantStyle> = {
    primary: {
      backgroundColor: isPressed
        ? theme.interaction.colorInteractiveActive
        : colorInteractiveDefault,
      borderColor: 'transparent',
      borderWidth: 0,
      textColor: colorInteractiveInverse,
    },
    secondary: {
      backgroundColor: colorInteractiveInverse,
      borderColor: colorInteractiveDefault,
      borderWidth: 1,
      textColor: colorInteractiveDefault,
    },
    tertiary: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
      textColor: colorInteractiveDefault,
    },
    link: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
      textColor: colorInteractiveDefault,
    },
  };

  const vs = variantStyles[variant];

  // ── Size ──────────────────────────────────────────────────────────────────
  const minHeight = size === 'sm' ? 28 : 36;
  const paddingHorizontal = isIconOnly ? 0 : size === 'sm' ? 12 : 16;
  const fontSize =
    theme.typographyTokens.size16;
  const lineHeight = theme.typographyTokens.lineHeight20;

  // ── Disabled opacity ──────────────────────────────────────────────────────
  const opacity = isDisabled ? 0.4 : isPressed && variant !== 'primary' ? 0.7 : 1;

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight,
    paddingHorizontal,
    paddingVertical: size === 'sm' ? 4 : 8,
    backgroundColor: vs.backgroundColor,
    borderColor: vs.borderColor,
    borderWidth: vs.borderWidth,
    borderRadius: theme.borderRadius.pill,
    opacity,
    alignSelf: isFullWidth ? 'stretch' : 'auto',
    gap: 6,
  };

  return (
    <Pressable
      ref={ref}
      style={[containerStyle, style]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={effectiveAccessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{disabled: isDisabled}}>
      {leftIcon}
      {children != null && (
        <Text
          style={StyleSheet.flatten([
            {
              color: vs.textColor,
              fontSize,
              lineHeight,
              fontWeight: theme.typographyTokens.weight.bold,
              fontFamily: theme.typographyTokens.family.body,
              textDecorationLine:
                variant === 'link' ? 'underline' : 'none',
            },
          ])}>
          {children}
        </Text>
      )}
      {rightIcon}
    </Pressable>
  );
});
