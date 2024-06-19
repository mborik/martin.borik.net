/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

const generateColorPalette = (color, glow = false) => {
  const palette = {};
  for (const suffix of [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    ...(glow ? ['glow'] : []),
  ]) {
    palette[suffix] = `var(--${color}-${suffix})`;
  }
  return palette;
};

/** @type {import("tailwindcss").Config } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      primary: ['Quicksand', ...fontFamily.sans],
    },
    extend: {
      colors: {
        'header-fill': 'var(--header-fill)',
        primary: generateColorPalette('primary', true),
        secondary: generateColorPalette('secondary', true),
        accent: generateColorPalette('accent', true),
        white: {
          DEFAULT: 'var(--text-base)',
          ...generateColorPalette('text'),
        },
        background: {
          DEFAULT: 'var(--background-gradient-start)',
          ...generateColorPalette('background'),
        },
      },
      spacing: {
        25: '6.25rem', // 100px
      },
      boxShadow: {
        'secondary-button':
          '0 0 1px 2px var(--secondary-glow), 0 0 1px 4px var(--secondary-glow)',
        'secondary-button-hover':
          '0 0 1px 2px var(--secondary-glow), 0 0 1px 4px var(--secondary-glow), 0 0 1px 6px var(--secondary-glow)',
      },
      keyframes: {},
      animation: {},
      zIndex: { 1: '1' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
