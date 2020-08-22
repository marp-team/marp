const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.ANALYZE,
})

const env = { BUILD_YEAR: new Date().getFullYear().toString() }

// for Netlify's deploy preview
if (process.env.DEPLOY_URL) env.NEXT_PUBLIC_HOST = process.env.DEPLOY_URL

module.exports = withBundleAnalyzer({
  env,
  webpack: (config) => {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
    return config
  },
})
