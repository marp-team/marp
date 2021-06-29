const path = require('path')

module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': [
      'error',
      path.join(__dirname, 'pages'),
    ],

    // Marp website is completely static. Automatic Image Optimization by Next.js requires a server for on-demand conversion.
    '@next/next/no-img-element': 'off',
  },
}
