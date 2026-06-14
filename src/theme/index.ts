/**
 * Typed theme surface for code that needs token values directly (charts, SVG
 * motifs, navigation chrome, Reanimated/Moti style objects) where NativeWind
 * className strings aren't ergonomic.
 *
 * Tokens live in `tokens.js` (the single source of truth, also consumed by
 * tailwind.config.js). This file re-exports them with TypeScript types.
 */
// Plain JS token module (the single source of truth, also used by tailwind.config.js).
import tokens from './tokens';

const { palette, semantic, fontFamily, spacing, radius } = tokens as {
  palette: Palette;
  semantic: Semantic;
  fontFamily: Record<string, string[]>;
  spacing: Record<string, number>;
  radius: Record<string, number>;
};

type Scale = {
  50: string; 100: string; 200: string; 300: string; 400: string;
  500: string; 600: string; 700: string; 800: string; 900: string;
};

export interface Palette {
  terracotta: Scale;
  indigo: Scale;
  marigold: Scale;
  cream: Scale;
  green: Scale;
  ink: { DEFAULT: string; soft: string; muted: string; faint: string };
  white: string;
  black: string;
}

export interface Semantic {
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  highlight: string;
  background: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  onPrimary: string;
}

export const colors = palette;
export const brand = semantic;
export const fonts = {
  serif: 'Fraunces_500Medium',
  serifBold: 'Fraunces_600SemiBold',
  serifItalic: 'Fraunces_500Medium_Italic',
  sans: 'Inter_400Regular',
  sansMedium: 'Inter_500Medium',
  sansSemibold: 'Inter_600SemiBold',
} as const;

export const theme = { colors: palette, brand: semantic, fonts, fontFamily, spacing, radius };
export type Theme = typeof theme;
export default theme;
