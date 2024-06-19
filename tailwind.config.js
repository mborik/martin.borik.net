/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import("tailwindcss").Config } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        primary: ['Quicksand', ...fontFamily.sans],
      },
      colors: {},
      keyframes: {},
      animation: {},
      zIndex: {},
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
