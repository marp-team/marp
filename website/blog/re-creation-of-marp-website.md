---
title: Re-creation of Marp website for the unified docs
date: 2020-08-22
description: We are announcing that Marp team is working to the re-creation of marp.app website for hosting the unified documentation.
author: Yuki Hattori
github: yhatt
---

[marpit framework]: https://marpit.marp.app/
[marp core]: https://github.com/marp-team/marp-core
[marp cli]: https://github.com/marp-team/marp-cli
[marp for vs code]: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode

I could not have imagined that now we are living in a unique pandemic era when I wrote [the last article](/blog/the-story-of-marp-next). Even under those severe circumstances, I'm still making progress of Marp.

Marp gives some tools for making a convincing slide deck with fewer efforts, and they get loved by a lot of users. In early this year, [Marp Core] has reached the stable v1 release, and our tools around the core are keeping steps with it. Needless to mention here, we will keep going to enhance our tools.

Today we are announcing that **Marp team is working to the re-creation of [marp.app](/) website for hosting the unified documentation**. If you are reading this article, you should have already seen the re-created website! Currently the unified docs is not yet ready but we are going to announce here as soon as getting ready.

<!-- more -->

# For the unified documentation

As Marp ecosystem spreads out, Marp team has become to regard the lack of unified documentation as an important issue. Our docs are scattered to many repos per tool, and it would make confusion when learning overall of Marp. In addition, we often have been asked basics of Marp in the issue tracker and sometimes even prevent our works for evolving Marp.

For making users take advantage of Marp easier, I'm going to work improving the documentation together with evolving Marp tools.

## Re-created [marp.app](/)

The re-created web page is the first step for building the unified docs. I had tried various tools to build the website and found a place to rest in [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). I believe we will be able to build more useful documentation pages by these.

It is managed in our entrance repository [marp-team/marp](https://github.com/marp-team/marp) as same as before. If shipped new documentation, we would accept some improvements in the documentation from the community.

---

## Mid-term plans for Marp tools

Might as well, finally let me share some mid-term plans for each tools I'll work shortly.

- [Marpit framework]: Enhance directives
- [Marp Core]: Add new built-in theme and simplify auto-scaling feature
- [Marp CLI]: Handout template
- [Marp for VS Code]: Better auto-completion for Marp directives

We also had announced [long-term plans earlier](/blog/the-story-of-marp-next): [Marp Web](https://web.marp.app/), Marp integration modules with [React](https://github.com/marp-team/marp-react) and [Vue](https://github.com/marp-team/marp-react), and [Marpit v2](https://github.com/marp-team/marpit/issues/194). However, _they are not yet in active and may need to reconsider plans because we have not enough positive feedbacks from community._
