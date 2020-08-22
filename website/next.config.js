const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.ANALYZE,
})

module.exports = withBundleAnalyzer({
  env: { BUILD_YEAR: new Date().getFullYear().toString() },
  webpack: (config) => {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
    return config
  },
})
