const path = require('path')

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'styled-jsx': {
          plugins: [
            [
              'styled-jsx-plugin-postcss',
              { path: path.resolve(__dirname, './postcss.config.js') },
            ],
          ],
        },
      },
    ],
  ],
}
