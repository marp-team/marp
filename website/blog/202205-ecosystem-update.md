---
title: 'Ecosystem update: Marp Core v3 & Slide transitions in CLI v2'
date: 2022-05-26
description: Introduce a stable release of Marp Core v3, and updated CLI v2 with an entirely new slide transition experiment.
author: Yuki Hattori
github: yhatt
image: /og-images/202205-ecosystem-update.jpg
---

We are so excited to introduce a stable release of **[Marp Core](https://github.com/marp-team/marp-core) v3**, and **[Marp CLI](https://github.com/marp-team/marp-cli) v2** update with [an entirely new slide transition experiment](#slide-transition-experiment).

- **[Marp Core v3](#marp-core-v3)**: MathJax rendering as default, updated `default` theme, and new components for auto-scaling.
- **[Marp CLI v2](#marp-cli-v2)**: Bundled core v3, and [brand-new slide transition experiment](#slide-transition-experiment) with 33 built-in effects + CSS custom transitions.

<!-- more -->

# Marp Core v3

[We had released Marp Core v3.0.0 as a release candidate in November 2021.](https://github.com/marp-team/marp-core/releases/tag/v3.0.0) For a half year, it had been available in the `next` tag as an opt-in engine of Marp CLI, and had accepted feedback from the community.

This month [v3.2.0](https://github.com/marp-team/marp-core/releases/tag/v3.2.0) has become a stable release, and **we are starting work to make v3 core the default in downstream Marp tools gradually.**

An updated Marp Core v3 has some major changes, but we also have worked to keep backward compatibility in many existing slides. Most slide authors should not be concerned about regressions as long as your tweaks to the slide theme are not complicated.

If you are a theme author, you may have to modify some of the styles. This update includes a brand-new auto scaling component, the change of `default` theme caused by the update of [`github-markdown-css`](https://github.com/sindresorhus/github-markdown-css), and so on.

Even so, you should not too worry: We worked to v3 core to reduce friction between Marp's CSS and common CSS, so I think the complex part of our theming system (e.g. styling auto-scaled element) must be easier to understand than v2.

## Notable changes

### Drop support for End-of-Life Node.js

First, Marp Core v3 has dropped support for end-of-life Node.js 10.

We have supported EoL Node.js v12 yet, but continuous support may not guarantee depending on the support status of dependency modules. We recommend following up on [the active LTS Node.js](https://nodejs.org/).

> Check out https://endoflife.date/nodejs to know which version of Node.js is EoL.

### MathJax is a default typesetting library for math

[katex]: https://katex.org/
[mathjax]: https://www.mathjax.org/

Marp Core v3 has changed the default library for rendering math, from [KaTeX] to [MathJax].

Marp had used [KaTeX] as a default library for long years for taking better performance. But currently, this opinion has become the past thinking with the advent of MathJax 3. [See this interesting insight.](https://groups.google.com/g/mathjax-users/c/aboJLMb50uQ/m/Y77FexF_AwAJ)

And some incompatibilities of KaTeX with Marp Core's auto scaling feature that are hard to fix had given us a headache. ([marp-team/marp-core#159](https://github.com/marp-team/marp-core/issues/159), [marp-team/marp-core#236](https://github.com/marp-team/marp-core/issues/236))

MathJax implementation in Marp Core has more reliable rendering than KaTeX. In addition, it also has more TeX function supports, and no network is required to show.

Now a lot of Markdown flavors have adopted MathJax for math typesetting (e.g. [GitHub](https://github.blog/2022-05-19-math-support-in-markdown/)), and we expect Marp Markdown would get higher compatibility in several Markdown services.

#### `math` global directive

If your Markdown is not yet ready to migrate math typesettings into MathJax, you can continue to use KaTeX as a math typesetting library by setting [`math` global directive](https://github.com/marp-team/marp-core#math-global-directive) as `katex`.

```markdown
---
math: katex
---

Continue to use KaTeX: $ax^2+bc+c$
```

We have no plans to remove KaTeX integration for a while. So you can keep rendering math with KaTeX if you're using KaTeX specific syntaxes or met rendering performance issues in MathJax.

> For smooth migration of exist slides to v3, Marp for VS Code is [annotating to math use without `math` global directive](https://github.com/marp-team/marp-vscode#diagnostics) since a year ago.

### Renewed auto-scaling component

Marp Core has a tiny runtime script to activate element auto-scaling for a code block, math block, and [fitting header `# <!--fit--> header`](https://github.com/marp-team/marp-core#fitting-header). v3 has updated auto scaling logic into [Web Components](https://developer.mozilla.org/docs/Web/Web_Components) based, to improve output lucidity and compatibility with some CSS selectors.

This update does not change the actual auto-scaling behavior from v2, so most Markdown slide authors should not need to take care of that. But if you have a custom theme that was styled to auto-scaling elements, you should review and modify CSS declarations in your theme to match with v3.

Please refer to the pull request **[marp-team/marp-core#263](https://github.com/marp-team/marp-core/pull/263)** for details of auto-scaling components.

### Updated `default` theme

To provide a familiar Markdown style to users as default, Marp Core `default` theme is based on [GitHub's Markdown CSS](https://github.com/sindresorhus/github-markdown-css).

The latest Marp Core has included the following updates about `default` theme:

- Updated color schemes based on the latest [github-markdown-css v5](https://github.com/sindresorhus/github-markdown-css)
- Match colors for code highlight with GitHub style
- Allow color customization through CSS variables ([See theme docs](https://github.com/marp-team/marp-core/tree/main/themes#custom-color-css-variables))

````markdown:marp
<!-- paginate: true -->
<style>:root { font-size: 40px; }</style>

# This is a new `default` theme

```markdown
<!-- theme: default -->

# This is a new `default` theme
```

---

<!-- class: invert -->

# Updated `invert` color scheme

based on GitHub dark mode

```markdown
<!-- class: invert -->
```

````

### URL without HTTP(S) scheme does no longer auto-linkify

Marp Core up to v2 had detected URL-like strings and converted them to hyperlinks automatically. However, that was too fuzzy and often brought linkify in not intended words, such as "[Amazon.com](https://amazon.com/)" and "[ML.NET](https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet)".

But there are no more fuzzy links in v3! Now auto link feature requires the URL string with `https://` or `http://` scheme.

Please make a Markdown link `[Amazon.com](https://amazon.com/)` explicitly if you want the hyperlink in previously auto-linked words.

# Marp CLI v2

According to the time to become core v3 stable, we also worked on **[a major update of Marp CLI](https://github.com/marp-team/marp-cli/releases/tag/v2.0.0)** to bundle a new core.

There are no major changes in the general use of Marp CLI, and I believe your CLI workflow would never break by this update in most cases.

So what feature is a "major" update of CLI? [_Perhaps you may have interested in a hidden gem..._ 💎](#slide-transition-experiment)

## Notable changes

### Required Node.js v14 and later

The new release of Marp CLI is required **the latest Node.js v14 and later**, because depending modules such as Puppeteer (for PDF/PPTX generation) were dropped support for EoL Node.js versions v12 and older.

### Bundled Marp Core v3

As described earlier, Marp CLI v2 has bundled an updated Marp Core v3.2.0 as a core engine.

```bash
$ marp --version
@marp-team/marp-cli v2.0.0 (w/ @marp-team/marp-core v3.2.0)
```

###### Continue to use v2 core in Marp CLI

We recommend getting ready for using the updated v3 core, but Marp CLI also can stick to the v2 core by installing `@marp-team/marp-core@^2` to your project individually.

```bash
npm i --save-dev @marp-team/marp-cli @marp-team/marp-core@^2
npx marp ./your-markdown.md
```

It's useful when your Markdown slide files are not ready for v3 core. But please keep in mind we would hardly provide more updates to v2 core, and **continuous use may bring a risk of unpatched security issues.**

# Slide transitions

A really loving part of this CLI update for me is **[a brand-new slide transition in `bespoke` HTML template.](https://github.com/marp-team/marp-cli/issues/447)**

We had started testing experimental slide transition effects since [Marp CLI v1.4.0](https://github.com/marp-team/marp-cli/releases/tag/v1.4.0) (Aug 2021). `--bespoke.transition` CLI option had been working well, but not so practical compared to the common presentation tools.

As a result of catching up on the new spec of [View Transitions API proposal][view transitions api] in Marp CLI v2, I'm so excited to provide powerful transition features that are in no other Markdown slide tools, such as CSS custom transition effects and morphing animations!

[view transitions api]: https://www.w3.org/TR/css-view-transitions-1/

> The slide transitions feature has made stable in v2.4.0. You can dive into all about of transitions at [the documentation of Marp CLI transitions][transition-docs].

[transition-docs]: https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md

## Quick look

![Marp CLI transition showcase poster=/assets/202205-ecosystem-update/transition-showcase-poster.jpg controls](https://user-images.githubusercontent.com/3993388/169697466-283dd2f2-b6e5-4b33-86d4-b10cc0a6c3e9.mp4)

- **[33 built-in transitions](https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md#built-in-transitions)**: Marp CLI provides a lot of transition effects out of the box.
- **[Define custom transitions via CSS](https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md#custom-transitions)**: Markdown author and theme designer can define the custom transition through `@keyframes` declaration in CSS.
- **[Morphing animations](https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md#morphing-animations)**: [`view-transition-name` CSS property](https://www.w3.org/TR/css-view-transitions-1/#view-transition-name-prop) supplied by View Transition API helps to make morphing animation while transition.

## Usage

The slide transitions in HTML output can opt in and out through `--bespoke.transition` CLI option. _It is only working in the browser that supports [View Transitions API], such as Chrome/Chromium 110 and later._

The `--preview` CLI option is helpful see transition effects surely. Try this in Marp CLI v2.4.0+ to open a preview window for the transition showcase:

```bash
curl -o ./showcase.md https://gist.githubusercontent.com/yhatt/d9e86ee53eb8816aaf9c996e773b6f82/raw/transition-showcase.md
marp --preview ./showcase.md
```

## Showcase

You can see online demo slides about Marp CLI brand new transitions! See them in the browser that supports [View Transitions API].

- **[Marp CLI page transition showcase](https://marp-cli-page-transitions.glitch.me/)**: The showcase of built-in transitions
- **[Custom transitions example](https://marp-cli-page-transitions.glitch.me/custom.html)**: Some examples and ideas about custom transitions
- **[Transition with morphing animation](https://marp-cli-page-transitions.glitch.me/morph.html)**: An example of morphing animation powered by [View Transitions API].

## `transition` local directive

You can set and change the kind of transition through `transition` local directive.

```markdown
---
transition: fade
---

Fade transition with 0.5s duration

---

<!-- transition: cover 1s -->

Changed the kind of transition to `cover` with 1s duration

---

<!-- _transition: none -->

Disabled transition for this slide

---

Got back to cover transition
```

Each transition has a default 0.5s duration, but you can also set custom duration by space-separated value such as `<!-- transition: fade 1s -->`.

## Custom transition

The custom transition can define through just a few conventional [`@keyframes` at-rules](https://developer.mozilla.org/docs/Web/CSS/@keyframes) within the inline `<style>` element or custom theme CSS.

<!-- prettier-ignore-start -->

```css
/* Simple definition: "dissolve" custom transition */
@keyframes marp-transition-dissolve {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Splitted definitions: "triangle" custom transition */
@keyframes marp-incoming-transition-triangle {
  from { clip-path: polygon(0% 0%, 0% 0%, 0% 0%); }
  to { clip-path: polygon(0% 0%, 200% 0%, 0% 200%); }
}
@keyframes marp-incoming-transition-backward-triangle {
  from { clip-path: polygon(100% 100%, 100% 100%, 100% 100%); }
  to { clip-path: polygon(-100% 100%, 100% -100%, 100% 100%); }
}

/* With backward animations: Overloading "zoom" transition */
@keyframes marp-incoming-transition-zoom {
  from { transform: scale(0); }
  to { transform: scale(1); }
}
@keyframes marp-outgoing-transition-backward-zoom {
  from { transform: scale(1); }
  to { transform: scale(0); }
}
@keyframes marp-incoming-transition-backward-zoom {
  /* Define empty keyframes to disable fallback into incoming animation */
}
```

<!-- prettier-ignore-end -->

It only has a relatively simple definition(s) but great flexibility, and brings out boundless creativity of CSS animation! 🤩

**[👉 Marp CLI: How to make custom transition](/blog/how-to-make-custom-transition)**

We are really looking forward to what creative transition effects our community will create!

## Morphing animations

Thanks to the browser's [View Transitions API], we can apply morphing animations during a transition effect. This is similar to PowerPoint Morph and Keynote Magic Move.

Just sprinkle a few CSS properties!

![Morphing animations](https://raw.githubusercontent.com/marp-team/marp-cli/main/docs/bespoke-transitions/images/morphing-animation.gif ' ')

```markdown
---
theme: gaia
transition: fade
style: |
  /* ⬇️ Mark the image of "1" in every pages as morphable image named as "one" ⬇️ */
  img[alt="1"] {
    view-transition-name: one;
    contain: layout;
  }

  /* Generic image styling for number icons */
  img:is([alt="1"], [alt="2"], [alt="3"]) {
    height: 64px;
    position: relative;
    top: -0.1em;
    vertical-align: middle;
    width: 64px;
  }
---

# Today's topics

- ![1](https://icongr.am/material/numeric-1-circle.svg?color=666666) Introduction
- ![2](https://icongr.am/material/numeric-2-circle.svg?color=666666) Features
- ![3](https://icongr.am/material/numeric-3-circle.svg?color=666666) Conclusion

---

<!-- _class: lead -->

![1 w:256 h:256](https://icongr.am/material/numeric-1-circle.svg?color=ff9900)

# Introduction

---

# ![1](https://icongr.am/material/numeric-1-circle.svg?color=666666) Introduction

Marp is an open-sourced Markdown presentation ecosystem.
```

**[👉 See details at the documentation about transitions on Marp CLI repository...](https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md#morphing-animations)**

# Deprecations

Finally, we have to mention that the latest update has a deprecated Markdown syntax in the Marp ecosystem. It is still can use for now with deprecation warnings and will be obsolete in future Marp tools.

> We have planned to work on [an auto-fixable diagnostic for VS Code extension](https://github.com/marp-team/marp-vscode#diagnostics), to make it easier to update the use of deprecated syntaxes.

### Shorthand for setting colors (Marpit framework)

[Marpit framework](https://marpit.marp.app/) had been provided the color setting shorthand through Markdown image syntax, such as `![](red)` and `![bg](yellow)`. This syntax had been allowed to set a corresponding color style like `color: red` and `background-color: yellow` to only a current slide page.

These are rarely used in reality, and now we have considered as harmful from the point of view of Markdown (CommonMark) compatibility.

Marpit framework has already provided [`color` / `backgroundColor` local directives](https://marpit.marp.app/directives?id=backgrounds), and setting [scoped local directives](https://marpit.marp.app/directives?id=apply-to-a-single-page-spot-directives) to the slide will bring the same result.

If you are using these shorthands for setting colors, please replace them with the alternative scoped local directive.

|  Shorthands  |        Should replace to         |
| :----------: | :------------------------------: |
|  `![](red)`  |      `<!-- _color: red -->`      |
| `![bg](red)` | `<!-- _backgroundColor: red -->` |

> _Track the state of progress at [marp-team/marpit#331](https://github.com/marp-team/marpit/issues/331)._

# Community

Join the Marp community! Our [GitHub Discussions](https://github.com/orgs/marp-team/discussions) is a community forum that gathered discussions all about Marp, and allows you to connect with Marp team and other Marp users. Of course, we welcome your feedback for this ecosystem update too. 😀

- [**Go to GitHub Discussions**](https://github.com/orgs/marp-team/discussions)
- [The support guideline of Marp project](https://github.com/marp-team/.github/blob/master/SUPPORT.md)

<!--
# Titbit

Marpit framework is 5th year and I feel that is beginning to gather a few of dust. Therefore I'm trying to design a new polished engine, as a personal weekend experiment toward the next core v4.

Currently I don't want you too to count on it. I'm just working on for getting a long-lived ecosystem with modern CSS rules :)
-->
