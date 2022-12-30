const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.ANALYZE,
})
const { devDependencies } = require('./package.json')

// Build test function to ignore devDependencies in client build
const ignoreIncludedPaths = Object.keys(devDependencies).map(
  (m) => path.join(path.resolve(__dirname, '../node_modules'), m) + path.sep
)
const ignoreExcludedPaths = [require.resolve('@marp-team/marp-core/browser')]

const testToignoreDevDependenciesInClient = (id) =>
  !ignoreExcludedPaths.some((p) => id.startsWith(p)) &&
  ignoreIncludedPaths.some((p) => id.startsWith(p))

// Environments
const env = { BUILD_YEAR: new Date().getFullYear().toString() }
if (process.env.URL) env.NEXT_PUBLIC_HOST = process.env.URL // for Netlify's deploy preview

module.exports = withBundleAnalyzer({
  env,
  transpilePackages: [
    'hast-util-sanitize',
    'hast-util-whitespace',
    'unist-util-is',
    'unist-util-remove-position',
    'unist-util-visit',
  ],
  webpack: (config, { isServer }) => {
    config.module.rules.push({ test: /\.md$/, type: 'asset/source' })
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: {
        loader: 'yaml-loader',
        options: { asJSON: true },
      },
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    })

    if (!isServer) {
      config.module.rules.push({
        test: testToignoreDevDependenciesInClient,
        issuer: [__dirname],
        use: 'null-loader',
      })
    }

    return config
  },
})
