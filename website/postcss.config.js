const path = require('path')
const remoteInlineCache = new Map()

const encodeForInlining = (buffer) =>
  encodeURIComponent(buffer.toString('utf8').replace(/\n+/g, ''))
    .replace(/%20/g, ' ')
    .replace(/#/g, '%23')

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
    'postcss-url': [
      {
        filter: '**/assets/**/*.svg',
        basePath: path.resolve(__dirname, './public'),
        url: 'inline',
        maxSize: 1,
      },
      {
        filter: ({ url }) => url.startsWith('https://icongr.am/'),
        url: async ({ url }) => {
          if (remoteInlineCache.has(url)) return remoteInlineCache.get(url)

          const { default: fetch } = await import('node-fetch')
          const response = await fetch(url)

          if (!response.ok) {
            console.error(`Failed to make inline the remote URL: ${url}`)
            return url
          }

          const buffer = await response.buffer()
          const mimeType =
            response.headers.get('Content-Type') || 'application/octet-stream'

          const svg = [
            `data:${mimeType};base64,${buffer.toString('base64')}`,
            `data:${mimeType},${encodeForInlining(buffer)}`,
          ].sort((a, b) => a.length - b.length)[0]

          remoteInlineCache.set(url, svg)
          return svg
        },
      },
    ],
    [require.resolve('./css/plugin-rem')]: {},
  },
}
