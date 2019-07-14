# Common scripts for Marp team repositories

> :warning: Currently this package is marked as private so can use only in this monorepo. It's better to use [obsoleted scripts](#obsoleted-scripts) when running scripts in the other repositories.

<!--
```bash
yarn add --dev @marp-team/common-scripts
```
-->

## `marp-version`

Automation helper for updating `CHANGELOG.md` when bumps version via `npm version`.

```json
{
  "scripts": {
    "version": "marp-version && git add -A CHANGELOG.md"
  }
}
```

## `marp-github-release`

Create GitHub release for the targeted tag from `CHANGELOG.md`, and output release ID.

```bash
yarn marp-github-release
```

### Environments

You should pass some environments to use this script.

- `GITHUB_TOKEN`: Access token for using GitHub API.
- `OWNER`: Repository owner, e.g. `marp-team`.
- `REPO`: Repository name.
- `TAG`: Tag name to create release.

You have only to pass `GITHUB_TOKEN` when running in CircleCI job triggered by pushing tags.

## Obsoleted scripts

```bash
curl https://raw.githubusercontent.com/marp-team/marp/master/version.js | node
```

```bash
curl https://raw.githubusercontent.com/marp-team/marp/master/github-release.js | node
```
