const path = require('path')

module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': [
      'error',
      path.join(__dirname, 'pages'),
    ],
  },
}
