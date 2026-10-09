/**
 * Standalone design-system barrel export.
 *
 * Import components from here instead of @ddsrn/components/*.
 * API is intentionally compatible with DDS React Native so migration
 * to the real library is a path-only change.
 */

export {Heading} from './Heading';
export type {HeadingProps, HeadingLevel, HeadingStyle} from './Heading';

export {BodyText} from './BodyText';
export type {BodyTextProps, TextSize, ContentStyle} from './BodyText';

export {Button} from './Button';
export type {ButtonProps, ButtonVariant, ButtonSize} from './Button';

export {TopBar} from './TopBar';
export type {TopBarProps} from './TopBar';

export {ThemeProvider} from './theme/ThemeProvider';
export type {ThemeProviderProps, ThemeContextValue} from './theme/ThemeProvider';

export {useTheme} from './theme/useTheme';

export {tokens} from './theme/tokens';
export type {Theme} from './theme/tokens';
