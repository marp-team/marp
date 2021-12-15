const { fontFamily } = require('tailwindcss/defaultTheme')

const marp = {
  // Brand colors
  brand: '#0288d1',
  light: '#67b8e3',
  dark: '#02669d',

  // Color variations
  darken: '#0277b7',
  darkest: '#1b4d68',
}

const gray = {
  100: '#f7fafc',
  200: '#edf2f7',
  300: '#e2e8f0',
  400: '#cbd5e0',
  500: '#a0aec0',
  600: '#718096',
  700: '#4a5568',
  800: '#2d3748',
  900: '#1a202c',
}

module.exports = {
  content: ['@(components|pages|utils)/**/*.[jt]s?(x)'],
  theme: {
    borderColor: (theme) => ({ ...theme('colors'), DEFAULT: gray[300] }),
    colors: {
      black: '#000',
      current: 'currentColor',
      gray,
      transparent: 'transparent',
      white: '#fff',
      background: '#f8f8f8',
      foreground: gray[800],
      marp,
    },
    ringColor: (theme) => ({ ...theme('colors'), DEFAULT: marp.light }),
    ringOffsetColor: (theme) => ({ ...theme('colors'), DEFAULT: marp.light }),
    fontFamily: {
      ...fontFamily,
      sans: ['Inter', ...fontFamily.sans],
      rounded: ['Quicksand', 'Avenir', 'Century Gothic', ...fontFamily.sans],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: { transitionDuration: { 0: '0s' } },
  },
}
