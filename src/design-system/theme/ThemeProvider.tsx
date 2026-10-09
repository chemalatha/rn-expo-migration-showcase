/**
 * ThemeProvider — standalone design-system context.
 *
 * Same public API as @ddsrn/components/theme/ThemeProvider:
 *   <ThemeProvider brand="tesco" mode="light">...</ThemeProvider>
 *
 * Currently only the Tesco light theme is implemented (single-theme PoC).
 * The brand/mode props are accepted for API compatibility; future phases
 * can wire them to different token sets.
 */

import React, {createContext, useMemo} from 'react';
import {tokens} from './tokens';
import type {Theme} from './tokens';

export interface ThemeContextValue {
  theme: Theme;
  brand: string;
  mode: 'light' | 'dark';
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  brand?: string;
  mode?: 'light' | 'dark';
  children: React.ReactNode;
}

export function ThemeProvider({
  brand = 'tesco',
  mode = 'light',
  children,
}: ThemeProviderProps) {
  // Single token set for now. Multi-brand/dark-mode can be added by
  // selecting from a map keyed by brand+mode when needed.
  const value = useMemo<ThemeContextValue>(
    () => ({theme: tokens, brand, mode}),
    [brand, mode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
