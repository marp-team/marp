const {
  colors: { black, current, gray, transparent, white },
  fontFamily,
} = require('tailwindcss/defaultTheme')

module.exports = {
  future: { removeDeprecatedGapUtilities: true },
  plugins: [],
  purge: ['@(components|pages|utils)/**/*.[jt]s?(x)'],
  theme: {
    colors: {
      black,
      current,
      gray,
      transparent,
      white,
      background: '#f8f8f8',
      foreground: gray[800],
      marp: {
        // Brand colors
        brand: '#0288d1',
        light: '#67b8e3',
        dark: '#02669d',

        // Color variations
        darken: '#0277b7',
        darkest: '#1b4d68',
      },
    },
    fontFamily: {
      ...fontFamily,
      sans: ['Inter', ...fontFamily.sans],
      rounded: ['Quicksand', 'Avenir', 'Century Gothic', ...fontFamily.sans],
    },
  },
  variants: { transitionDuration: ['responsive', 'hover'] },
}
