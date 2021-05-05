---
title: Marpit v2, Marp Core v2, and Marp CLI v1
date: 2021-05-06
description: I'm so glad to announce shipping Marpit framework v2, Marp Core v2, and Marp CLI v1! Especially, Marp CLI is getting stable now!
author: Yuki Hattori
github: yhatt
---

[marpit framework]: https://marpit.marp.app/
[marp core]: https://github.com/marp-team/marp-core
[marp cli]: https://github.com/marp-team/marp-cli

I'm so glad to announce shipping [Marpit framework] v2, [Marp Core] v2, and [Marp CLI] v1! Especially, Marp CLI is getting stable now!

They are major update that may be including some breaking changes. However, we have not intended to include any drastic changes. We have recognized well that user hates to break the existing slide.

The biggest reason why bumped major version is ending support for outdated Node.js 10. It has reached to End-of-Life and we are just following that.

Marpit and Marp Core still can use in EOL Node 10, but we are just making a window time for transition. By the security reason, we don't recommend to use outdated Node.js.

<!-- more -->

# Release notes

## [Marpit framework: v2.0.0](https://github.com/marp-team/marpit/releases/tag/v2.0.0)

### Breaking

- Marpit requires Node.js >= 10 to install ([#284](https://github.com/marp-team/marpit/pull/284))

### Fixed

- Reset CSS columns in advanced background ([#283](https://github.com/marp-team/marpit/pull/283))

### Changed

- Upgrade to PostCSS 8 ([#260](https://github.com/marp-team/marpit/issues/260), [#284](https://github.com/marp-team/marpit/pull/284))
- Upgrade Node and dependent packages to the latest version ([#285](https://github.com/marp-team/marpit/pull/285))

### Removed

- Remove deprecated `markdownItPlugins`, the getter of plugin interface for markdown-it ([#286](https://github.com/marp-team/marpit/pull/286))

## [Marp Core: v2.0.0](https://github.com/marp-team/marp-core/releases/tag/v2.0.0)

### Added

- Allow color customization through CSS variables in Gaia and Uncover theme ([#209](https://github.com/marp-team/marp-core/issues/209), [#221](https://github.com/marp-team/marp-core/pull/221))

> May break appearance of existing presentation if you have a slide with custom style.

### Changed

- Upgrade Marpit to [v2.0.0](https://github.com/marp-team/marpit/releases/v2.0.0) ([#220](https://github.com/marp-team/marp-core/pull/220))
- Upgrade Node LTS and dependent packages to the latest version ([#222](https://github.com/marp-team/marp-core/pull/222))

## [Marp CLI: v1.0.0](https://github.com/marp-team/marp-cli/releases/tag/v1.0.0)

### Breaking

- Dropped Node 10 support ([#338](https://github.com/marp-team/marp-cli/pull/338))

### Added

- Build Docker container image for ARM64 ([#328](https://github.com/marp-team/marp-cli/issues/328), [#339](https://github.com/marp-team/marp-cli/pull/339))
- Allow `MARP_USER` env for Docker image to set an explicit UID/GID ([#334](https://github.com/marp-team/marp-cli/pull/334) by [@davebaird](https://github.com/davebaird))
- Test against Node 16 for Windows ([#338](https://github.com/marp-team/marp-cli/pull/338))

### Changed

- Upgrade [Marpit v2.0.0](https://github.com/marp-team/marpit/releases/tag/v2.0.0) and [Marp Core v2.0.0](https://github.com/marp-team/marp-core/releases/tag/v2.0.0) ([#338](https://github.com/marp-team/marp-cli/pull/338))
- Upgrade Node and dependent packages to the latest version ([#338](https://github.com/marp-team/marp-cli/pull/338))

# What's Next?

I've posted about [the unified docs, and future plans for our toolset in the last article](/blog/re-creation-of-marp-website). But it was a mistake! Marp team is still alone and I cannot take full-time working for that, so the most of planned features are delayed. Sorry for late.

For helping us, contribution in [Marp discussion forum](https://github.com/marp-team/marp/discussions) will be good start.

## Marpit framework v3

We have ve already started for working Marpit v3 on [`v3` branch](https://github.com/marp-team/marpit/tree/v3).

It's going to be rewritten fully by TypeScript. We are planning to separate Marp slide specific plugins internally, for improvement of collaboration with other slide renderers. In addition, I want to support async conversion by returning Promise in `render()`.

We also had considered about changing Markdown parser, but we decided not to change. Some Marp users are depending on third party plugins, and it would make a lot of breakings if changed.

# Thanks

Over 5 years have passed from the first release of classic Marp. For keeping maintainability for long time, Marp ecosystem is still aiming to "minimal". And now, Marp has used by projects hosted on [Microsoft](https://github.com/microsoft/lage), [Google](https://github.com/google/applied-machine-learning-intensive), and [Facebook](https://github.com/facebookincubator/cargo-guppy).

In the last year, we opened our [discussion forum](https://github.com/marp-team/marp/discussions) to accept asking and reporting for the whole of Marp toolset. And we have received many feedbacks and contributions from users.

Thanks for our community! Marp will keep a growth with users.
