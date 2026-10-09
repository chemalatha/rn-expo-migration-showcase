/**
 * useTheme — access the active design-system theme.
 *
 * Same API as @ddsrn/components/theme/useTheme.
 * Must be used inside a <ThemeProvider>.
 */

import {useContext} from 'react';
import {ThemeContext} from './ThemeProvider';
import type {ThemeContextValue} from './ThemeProvider';

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
