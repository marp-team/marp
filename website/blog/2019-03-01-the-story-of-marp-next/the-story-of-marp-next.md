---
author: Yuki Hattori
date: 2019-03-01
github: yhatt
title: The story of Marp Next
---

<!--![Marp](marp.png)-->

The first version of [Marp](https://yhatt.github.io/marp/) was released at almost 3 years ago. At first, it was started from a simple tool for personal usage called "mdSlide". And now, Marp has been used by a lot of users who would recognize the real value of the presentation writer. Marp is amassed over [7,500 stars](https://github.com/yhatt/marp/stargazers) until now.

However, our headache came from lacked maintainability to develop. We had received so many requests to the old Marp app, and it has to evolve to keep providing the best writing environment of presentation deck.

Today, I'm so excited to introduce the story of Marp Next! The full-rewritten Marp is not only just a writer. To be usable in various situations, we build **a brand-new Marp ecosystem** consisted of multiple modules. They are developed with JavaScript and TypeScript, and much more maintainable than the previous Marp.

<!-- more -->

# Marp ecosystem

## [Marpit]

<!--![Marpit](marpit.png)-->

**[Marpit]** is _skinny framework_ for creating slide deck from Markdown. It is designed to output only minimum assets consisted of static HTML and CSS, and the output can convert into PDF slide deck by printing through Chrome / Chromium.

Marpit has created for using as the base of Marp ecosystem, but it is independent framework. You may integrate Marpit with your tool if you want. e.g. [MetaBake] supports Marpit Markdown.

[marpit]: https://marpit.marp.app/
[metabake]: https://www.metabake.org/

### [Marpit Markdown]: Keep compatibillity with a plain Markdown document

We had received [many requests][issues] to the old Marp, about the additional syntax to help creating beautiful slide deck. On the other hand, we also have received a request that [must respect Markdown syntax strictly](https://github.com/yhatt/marp/issues/87). We have to deal with these contradicted issues.

Additional syntax provided by Marpit should never break [CommonMark](https://commonmark.org/) document. Thus, the result of rendering keeps looking nice even if you open the Marpit Markdown in a general Markdown editor. And you can even extend the additional syntax via [markdown-it plugins](https://marpit.marp.app/usage?id=extend-marpit-by-plugins) if you need.

[marpit markdown]: https://marpit.marp.app/markdown
[issues]: https://github.com/yhatt/marp/issues

### [Theme CSS]: Design your deck with clean markup

Marpit has the theming system to allow designing everything of slides by CSS.

The old Marp had the _limited_ theming system and required deep diving to internal for customization: Build system, [Sass], the logic of Marp app, and so on. Marpit's it only requires a pure CSS, and no additional knowledges! You have only to focus styling HTML.

In addition, Marpit has the pixel-perfect slide system. Theme creator never needs to worry about the responsive layout, and could provide design exactly as the author wanted with less effort.

[theme css]: https://marpit.marp.app/theme-css
[sass]: https://sass-lang.com/

### [Inline SVG slide]: for many advantages

Our unique idea is wrapping each slides by inline SVG.

Currently, this feature has implemented as experimental feature because of the strange rendering in some browsers. However, it makes many advantages.

- Supports pixel-perfect scaling via style definition and **realizes Zero-JS slide deck**.
- Isolates Markdown contents and prevents that injected DOM by Marpit's advanced feature breaks design defined in theme CSS.

[inline svg slide]: https://marpit.marp.app/inline-svg

## Marp Core

## Marp CLI

## Marp Web