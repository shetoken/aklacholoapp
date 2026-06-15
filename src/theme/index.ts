/**
 * Typed theme surface for code that needs token values directly (charts, SVG
 * motifs, navigation chrome, Reanimated/Moti style objects) where NativeWind
 * className strings aren't ergonomic.
 */
import tokens from './tokens';

const { core, palette, semantic, fontFamily, spacing, radius } = tokens as {
  core: Core;
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

export interface Core {
  ink: string;
  indigo: string;
  surface: string;
  ivory: string;
  marigold: string;
  vermillion: string;
  terracotta: string;
}

export interface Palette {
  terracotta: Scale;
  indigo: Scale;
  marigold: Scale;
  vermillion: Scale;
  ivory: Scale;
  cream: Scale;
  green: Scale;
  text: { DEFAULT: string; soft: string; muted: string; faint: string };
  /** @deprecated legacy alias of `text` */
  ink: { DEFAULT: string; soft: string; muted: string; faint: string };
  white: string;
  black: string;
}

export interface Semantic {
  ink: string;
  indigo: string;
  surface: string;
  ivory: string;
  marigold: string;
  vermillion: string;
  terracotta: string;
  kolka: string;
  bindu: string;
  border: string;
  'ivory-soft': string;
  'ivory-muted': string;
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  highlight: string;
  background: string;
  backgroundDeep: string;
  surfaceAlt: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnDark: string;
  onPrimary: string;
}

export const colors = palette;
export const brand = semantic;
export { core };
export const fonts = {
  serif: 'Fraunces_500Medium',
  serifBold: 'Fraunces_600SemiBold',
  serifItalic: 'Fraunces_500Medium_Italic',
  sans: 'Inter_400Regular',
  sansMedium: 'Inter_500Medium',
  sansSemibold: 'Inter_600SemiBold',
} as const;

export const theme = { core, colors: palette, brand: semantic, fonts, fontFamily, spacing, radius };
export type Theme = typeof theme;
export default theme;
