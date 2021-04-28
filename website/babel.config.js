const path = require('path')

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'styled-jsx': {
          plugins: [
            [
              require.resolve('styled-jsx-plugin-postcss'),
              { path: path.resolve(__dirname, './postcss.config.js') },
            ],
          ],
        },
      },
    ],
  ],
}
