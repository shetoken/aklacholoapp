const { palette, semantic, fontFamily, spacing, radius } = require('./src/theme/tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        terracotta: palette.terracotta,
        indigo: palette.indigo,
        marigold: palette.marigold,
        vermillion: palette.vermillion,
        ivory: palette.ivory,
        cream: palette.cream,
        green: palette.green,
        text: palette.text,
        brand: {
          // Canonical Kalighat tokens
          ink: semantic.ink,
          indigo: semantic.indigo,
          surface: semantic.surface,
          ivory: semantic.ivory,
          'ivory-soft': semantic['ivory-soft'],
          'ivory-muted': semantic['ivory-muted'],
          marigold: semantic.marigold,
          vermillion: semantic.vermillion,
          terracotta: semantic.terracotta,
          kolka: semantic.kolka,
          bindu: semantic.bindu,
          border: semantic.border,
          /** Flat token — avoids NativeWind mis-parsing `text-brand-ivory-muted`. */
          muted: semantic['ivory-muted'],
          // Legacy aliases (unchanged light-mode screens)
          primary: semantic.primary,
          'primary-dark': semantic.primaryDark,
          secondary: semantic.secondary,
          accent: semantic.accent,
          highlight: semantic.highlight,
          bg: semantic.background,
          'bg-deep': semantic.backgroundDeep,
          'surface-alt': semantic.surfaceAlt,
          'ink-soft': semantic.textSecondary,
          'ink-muted': semantic.textMuted,
        },
      },
      fontFamily,
      spacing,
      borderRadius: radius,
    },
  },
  plugins: [],
};
