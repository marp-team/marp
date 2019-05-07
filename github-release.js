/* marp-team common script to create release on GitHub based on a version tag. */

const { execFileSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Get tag name (w/ CircleCI Support)
const tag = process.env.TAG || process.env.CIRCLE_TAG

if (!tag) {
  console.error('Please specify tag name to TAG env.')
  process.exit(1)
}

// Parse CHANGELOG.md
const changelog = path.resolve(__dirname, 'CHANGELOG.md')
const content = fs.readFileSync(changelog, 'utf8')
const current = { parsing: false, body: '' }

for (const line of content.split('\n')) {
  if (current.parsing) {
    if (line.startsWith('## ') || line === '---' || line === '</details>') {
      current.parsing = false
    } else {
      current.body += `${line}\n`
    }
  } else if (line.startsWith(`## ${tag} - `)) {
    current.parsing = true
  }
}

const body = current.body.trim()

if (!body) {
  console.error(`Not found release notes for ${tag}.`)
  process.exit(1)
}

// Create GitHub release via curl
const token = process.env.GITHUB_TOKEN
const user = process.env.USER || process.env.CIRCLE_PROJECT_USERNAME
const repo = process.env.REPO || process.env.CIRCLE_PROJECT_REPONAME
const entry = `https://api.github.com/repos/${user}/${repo}/releases`
const data = {
  tag_name: tag,
  name: tag,
  body,
  prerelease: tag.startsWith('v0.0.'),
}

if (!token || !user || !repo) {
  console.error(`Required environment(s) for GitHub release is lacked.`)
  process.exit(1)
}

const ret = JSON.parse(
  execFileSync('curl', [
    '-sS',
    '-H',
    'Accept: application/vnd.github.v3+json',
    '-H',
    `Authorization: token ${token}`,
    '-d',
    JSON.stringify(data),
    entry,
  ])
)

// Output release ID for GitHub release API
console.log(ret.id)
