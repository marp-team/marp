const base = Object.assign({}, require('../../.babelrc.js'))
const nodeSassPackageImporter = require('node-sass-package-importer')

const transformSCSSImportToString = [
  '@researchgate/babel-plugin-transform-scss-import-to-string',
  { importer: nodeSassPackageImporter({ extensions: ['.scss', '.css'] }) },
]

base.plugins.unshift(transformSCSSImportToString)
base.env.test.plugins.unshift(transformSCSSImportToString)

module.exports = base
