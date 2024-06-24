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
        150: '37.5rem', // 600px
        160: '40rem', // 640px
        '4xl': '56rem', // 896px
        '5xl': '64rem', // 1024px
        youtube: '56.25%', // 16:9
      },
      fontSize: {
        heading: '2.5rem', // 40px
      },
      boxShadow: {
        'inset-border': 'inset 0 0 0 1px var(--header-fill)',
        'primary-button':
          '0 0 0 3px var(--accent-glow), 0 0 32px var(--primary-glow)',
        'primary-button-hover':
          '0 0 0 3px var(--accent-glow), 0 0 48px var(--primary-glow)',
        'secondary-button':
          '0 0 1px 2px var(--secondary-glow), 0 0 1px 4px var(--secondary-glow)',
        'secondary-button-hover':
          '0 0 1px 2px var(--secondary-glow), 0 0 1px 4px var(--secondary-glow), 0 0 1px 6px var(--secondary-glow)',
      },
      keyframes: {
        albumCover: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-25deg)' },
        },
      },
      animation: {},
      zIndex: { 1: '1' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
