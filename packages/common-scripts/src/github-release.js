#!/usr/bin/env node
/* github-release.js: marp-team common script to create release on GitHub based on a version tag */

const Octokit = require('@octokit/rest')
const fs = require('fs')
const path = require('path')

// Get tag name (w/ CircleCI Support)
const tag = process.env.TAG || process.env.CIRCLE_TAG

if (!tag) {
  console.error('Please specify tag name to TAG env.')
  process.exit(1)
}

const prerelease = tag.startsWith('v0.0.')

// Parse CHANGELOG.md
const changelog = path.resolve(process.cwd(), 'CHANGELOG.md')
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

// Create GitHub release
const owner =
  process.env.OWNER || process.env.USER || process.env.CIRCLE_PROJECT_USERNAME
const repo = process.env.REPO || process.env.CIRCLE_PROJECT_REPONAME
const token = process.env.GITHUB_TOKEN

if (!token || !owner || !repo) {
  console.error(`Required environment(s) for GitHub release is lacked.`)
  process.exit(1)
}

new Octokit({ auth: token }).repos
  .createRelease({
    owner,
    repo,
    body,
    prerelease,
    name: tag,
    tag_name: tag,
  })
  .then(ret => {
    // Output release ID for GitHub release API
    console.log(ret.data.id)
  })
  .catch(e => {
    console.error(e.toString())
    process.exit(1)
  })
