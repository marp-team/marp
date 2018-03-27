const base = Object.assign({}, require('../../.babelrc.js'))
const transformSCSSImportToString =
  '@researchgate/babel-plugin-transform-scss-import-to-string'

base.plugins.unshift(transformSCSSImportToString)
base.env.test.plugins.unshift(transformSCSSImportToString)

module.exports = base
