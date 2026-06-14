/**
 * AklaCholo brand design tokens — SINGLE SOURCE OF TRUTH.
 *
 * Plain CommonJS so it can be required by both `tailwind.config.js` (NativeWind
 * class generation) and the typed theme in `src/theme/index.ts`. Change a brand
 * value here once and it propagates everywhere.
 *
 * Palette: warm, earthy, premium — terracotta · indigo · marigold · cream ·
 * deep green. Heritage craft meets modern minimalism.
 */

const palette = {
  // Terracotta — primary brand / clay
  terracotta: {
    50: '#FBEEE8',
    100: '#F3D6C8',
    200: '#E6AD93',
    300: '#D9835E',
    400: '#CE6A45',
    500: '#C45A3B', // base
    600: '#A8482D',
    700: '#853722',
    800: '#5F2719',
    900: '#3D190F',
  },
  // Indigo — Bengal dye, deep contrast
  indigo: {
    50: '#EAECF2',
    100: '#C6CBDC',
    200: '#9AA3BF',
    300: '#6C78A0',
    400: '#48567F',
    500: '#2E3A59', // base
    600: '#283350',
    700: '#1F2840',
    800: '#161C2E',
    900: '#0D111C',
  },
  // Marigold — festive accent
  marigold: {
    50: '#FDF4E2',
    100: '#FAE3B6',
    200: '#F4CB7C',
    300: '#EEB34D',
    400: '#E8A33D', // base
    500: '#D78D24',
    600: '#B0711B',
    700: '#855416',
    800: '#5C3A0F',
    900: '#3A2509',
  },
  // Cream — surfaces / background
  cream: {
    50: '#FDFBF6',
    100: '#FAF5EB',
    200: '#F7F0E3', // base — app background
    300: '#EFE5D2',
    400: '#E3D5BC',
    500: '#D4C2A2',
    600: '#B7A483',
    700: '#8E7E62',
    800: '#615543',
    900: '#3A3327',
  },
  // Deep green — temple foliage / calm
  green: {
    50: '#E8F0ED',
    100: '#C5D9D1',
    200: '#9DBEB1',
    300: '#74A290',
    400: '#4E8470',
    500: '#2F5D50', // base
    600: '#284E44',
    700: '#1F3D35',
    800: '#152A25',
    900: '#0C1916',
  },
  // Ink / neutral text
  ink: {
    DEFAULT: '#2A2420',
    soft: '#5A5048',
    muted: '#8A7E72',
    faint: '#B7AC9E',
  },
  white: '#FFFFFF',
  black: '#1A1612',
};

/** Semantic aliases — what UI code should prefer over raw scale steps. */
const semantic = {
  primary: palette.terracotta[500],
  primaryDark: palette.terracotta[700],
  secondary: palette.indigo[500],
  accent: palette.marigold[400],
  highlight: palette.green[500],
  background: palette.cream[200],
  surface: palette.cream[50],
  surfaceAlt: palette.cream[100],
  border: palette.cream[400],
  textPrimary: palette.ink.DEFAULT,
  textSecondary: palette.ink.soft,
  textMuted: palette.ink.muted,
  onPrimary: palette.cream[50],
};

const fontFamily = {
  // Loaded via @expo-google-fonts in src/theme/fonts.ts
  serif: ['Fraunces_500Medium'],
  'serif-bold': ['Fraunces_600SemiBold'],
  'serif-italic': ['Fraunces_500Medium_Italic'],
  sans: ['Inter_400Regular'],
  'sans-medium': ['Inter_500Medium'],
  'sans-semibold': ['Inter_600SemiBold'],
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
  '4xl': 64,
};

const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  '2xl': 36,
  full: 9999,
};

module.exports = { palette, semantic, fontFamily, spacing, radius };
