/* marp-team common script for bumping version.
 *
 * Usage in package.json:
 * {
 *   "scripts": {
 *     "version": "curl https://raw.githubusercontent.com/marp-team/marp/master/version.js | node && git add -A CHANGELOG.md"
 *   }
 * }
 */

const fs = require('fs')
const path = require('path')

const unreleased = '## [Unreleased]'
const [date] = new Date().toISOString().split('T')
const version = `## v${process.env.npm_package_version} - ${date}`

const changelog = path.resolve(__dirname, 'CHANGELOG.md')
const content = fs.readFileSync(changelog, 'utf8')

fs.writeFileSync(
  changelog,
  content.replace(unreleased, `${unreleased}\n\n${version}`)
)
