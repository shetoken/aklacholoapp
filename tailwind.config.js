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
        cream: palette.cream,
        green: palette.green,
        ink: palette.ink,
        // Semantic shortcuts usable as e.g. `bg-brand-primary`
        brand: {
          primary: semantic.primary,
          'primary-dark': semantic.primaryDark,
          secondary: semantic.secondary,
          accent: semantic.accent,
          highlight: semantic.highlight,
          bg: semantic.background,
          surface: semantic.surface,
          'surface-alt': semantic.surfaceAlt,
          border: semantic.border,
          ink: semantic.textPrimary,
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
