/**
 * AklaCholo brand design tokens — SINGLE SOURCE OF TRUTH.
 *
 * Kalighat + kolka folk art: deep indigo grounds, luminous ivory linework,
 * marigold glow, vermillion bindu (sparingly).
 *
 * Canonical hex values live in `core`. Scales + semantic aliases are derived
 * from `core` for NativeWind (`bg-brand-*`, `text-brand-*`) and typed theme.
 */

/** Exact palette — the seven named colours. */
const core = {
  ink: '#0E0E12', // near-black, deepest background
  indigo: '#1A1F3A', // primary deep-indigo background
  surface: '#232842', // cards / raised surfaces
  ivory: '#F4EFE6', // warm white — kolka linework + primary text on dark
  marigold: '#E8A92C', // gold highlights, the glow
  vermillion: '#D72E1F', // bindu — use once per screen, never as fill
  terracotta: '#C66B3D', // secondary warmth
};

/** Tailwind scales anchored on `core` (+ legacy light-mode text / cream). */
const palette = {
  indigo: {
    50: '#E8EAF2',
    100: '#C5CAD9',
    200: '#9BA3BF',
    300: '#717BA0',
    400: '#525D82',
    500: '#3A4166',
    600: '#2E3554',
    700: core.surface,
    800: core.indigo,
    900: core.ink,
  },
  ivory: {
    50: '#FDFBF7',
    100: core.ivory,
    200: '#E8E2D6',
    300: '#D4CBBE',
    400: '#B8AE9E',
    500: '#9A8F7E',
    600: '#7A7164',
    700: '#5C554B',
    800: '#3D3832',
    900: '#221F1C',
  },
  // Alias — other screens still reference `cream` until migrated
  cream: {
    50: '#FDFBF6',
    100: '#FAF5EB',
    200: '#F7F0E3',
    300: '#EFE5D2',
    400: '#E3D5BC',
    500: '#D4C2A2',
    600: '#B7A483',
    700: '#8E7E62',
    800: '#615543',
    900: '#3A3327',
  },
  marigold: {
    50: '#FDF6E6',
    100: '#FAEBC4',
    200: '#F5D88A',
    300: '#EFC456',
    400: core.marigold,
    500: '#D49520',
    600: '#B07A18',
    700: '#855C12',
    800: '#5C400D',
    900: '#3A2808',
  },
  terracotta: {
    50: '#F9EDE6',
    100: '#EFD4C4',
    200: '#E0B096',
    300: '#D08C68',
    400: core.terracotta,
    500: core.terracotta,
    600: '#A85532',
    700: '#854228',
    800: '#5F2F1C',
    900: '#3D1E12',
  },
  vermillion: {
    50: '#FDEAE8',
    100: '#FAC5C0',
    200: '#F5938A',
    300: '#EF6154',
    400: '#E84334',
    500: core.vermillion,
    600: '#B82618',
    700: '#8C1D12',
    800: '#60140D',
    900: '#3A0C08',
  },
  green: {
    50: '#E6EEE9',
    100: '#C2D9CE',
    200: '#98BFAE',
    300: '#6EA48E',
    400: '#4E8770',
    500: '#3A6B58',
    600: '#305849',
    700: '#254539',
    800: '#193028',
    900: '#0E1C18',
  },
  /** Legacy body text on light (cream) screens — unchanged tabs. */
  text: {
    DEFAULT: '#2A2420',
    soft: '#5A5048',
    muted: '#8A7E72',
    faint: '#B7AC9E',
  },
  /** @deprecated use `text` — kept so unchanged screens compile. */
  ink: {
    DEFAULT: '#2A2420',
    soft: '#5A5048',
    muted: '#8A7E72',
    faint: '#B7AC9E',
  },
  white: core.ivory,
  black: core.ink,
};

/** Semantic aliases for `bg-brand-*`, `text-brand-*`, SVG, navigation. */
const semantic = {
  // Canonical names (match the brief)
  ink: core.ink,
  indigo: core.indigo,
  surface: core.surface,
  ivory: core.ivory,
  marigold: core.marigold,
  vermillion: core.vermillion,
  terracotta: core.terracotta,
  kolka: core.ivory,
  bindu: core.vermillion,
  // Derived
  border: palette.indigo[500],
  'ivory-soft': '#C9C2B8',
  'ivory-muted': '#8A8498',
  // Legacy aliases (light-mode screens + existing components)
  primary: core.terracotta,
  primaryDark: palette.terracotta[700],
  secondary: core.surface,
  accent: core.marigold,
  highlight: core.marigold,
  background: core.indigo,
  backgroundDeep: core.ink,
  surfaceAlt: palette.indigo[600],
  textPrimary: palette.text.DEFAULT,
  textSecondary: palette.text.soft,
  textMuted: palette.text.muted,
  textOnDark: core.ivory,
  onPrimary: core.ivory,
};

const fontFamily = {
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

module.exports = { core, palette, semantic, fontFamily, spacing, radius };
