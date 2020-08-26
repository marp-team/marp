module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    tailwindcss: {},
    'postcss-preset-env': {
      autoprefixer: { flexbox: 'no-2009' },
      stage: 3,
      features: {
        'custom-properties': false,
        'focus-visible-pseudo-class': true,
      },
    },
    [require.resolve('./css/plugin-rem')]: {},
  },
}
