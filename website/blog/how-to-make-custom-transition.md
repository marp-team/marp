---
title: 'Marp CLI experimental: How to make custom transition'
date: 2022-05-30
description: Marp CLI v2 has supported page transitions as experimental.
author: Yuki Hattori
github: yhatt
image: /og-images/how-to-make-custom-transition.jpg
---

**[Marp CLI v2](/blog/202205-ecosystem-update#marp-cli-v2)** has supported [brand-new page transitions for `bespoke` HTML template as experimental](/blog/202205-ecosystem-update#slide-transition-experiment).

Effective transitions will be helpful making a dramatic presentation. Adding a touch of effects to slides is often common in great talks. By using Marp CLI with `--bespoke.transition` (and `--preview`) option, [you can start to use varied 33 transition effects](https://github.com/marp-team/marp-cli/issues/447) out of the box, by just a simple definition `transition` directive.

Built-in transitions should be useful for 90% of Marp users. But what you can do if there are no effects you are satisfied? Make your own effects in CSS!

<!-- more -->

This article will describe following things:

- How the transition effect will work in Marp bespoke template
- How to define custom transitions in CSS
- Helpful tips for making your animation
