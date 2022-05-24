---
title: "Ecosystem update: Marp Core v3 & CLI's transition experiment"
date: 2022-05-26
description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet explicabo deleniti consequatur veniam amet ut optio sit delectus cum omnis rem nesciunt sapiente, libero iusto vero corporis ea molestias?
author: Yuki Hattori
github: yhatt
image: /og-images/202205-ecosystem-update.jpg
---

# Marp Core v3

> _**Availables in:** [Marp CLI v2](https://github.com/marp-team/marp-cli/releases/tag/v2.0.0) (not yet to Marp for VS Code)_

[We had released Marp Core v3.0.0 as a release candidate in November 2021.](https://github.com/marp-team/marp-core/releases/tag/v3.0.0) For a half year, it had been available in `next` tag as opt-in engine of Marp CLI, and had accepted feedbacks from community.

This month [v3.2.0](https://github.com/marp-team/marp-core/releases/tag/v3.2.0) has become a stable release, and **we are starting a work to make v3 core the default gradually**..

An updated Marp Core v3 has some major changes, but we also have worked to keep backward compatibility in many exist slides. The most of slide authors should not concern about regressions as long as your tweaks to the slide theme are not complicated.

If you are theme author, you may have to modify some of styles. This update includes brand-new auto scaling component, the change of `default` theme caused by update of [`github-markdown-css`](https://github.com/sindresorhus/github-markdown-css), and so on.

Even so, you should not too worry: We worked to v3 core to reduce friction between Marp's CSS and common CSS, so I think the complex part of our theming system (e.g. styling auto-scaled element) must be easier to understand than v2.

## Notable changes

### Drop support for End-of-Lifed Node.js

First, Marp Core v3 has dropped support for end-of-lifed Node.js 10.

We have supported EoL Node.js v12 yet, but continuous support may not guarantee depending on support status of dependency modules. We recommend to follow up [the active LTS Node.js](https://nodejs.org/).

> Check out https://endoflife.date/nodejs to know which version of Node.js are EoL

### MathJax is a default typesetting library for math

[katex]: https://katex.org/
[mathjax]: https://www.mathjax.org/

Marp Core v3 has changed the default library for rendering math, from [KaTeX] to [MathJax].

Marp had used [KaTeX] as a default library for a long years by taking performance. But currently this opinion has become a thinking of past by the advent of MathJax 3. [See this interesting insights.](https://groups.google.com/g/mathjax-users/c/aboJLMb50uQ/m/Y77FexF_AwAJ)

And some incompatibillities of KaTeX with Marp Core's auto scaling feature that are hard to fix had given our headache. ([marp-team/marp-core#159](https://github.com/marp-team/marp-core/issues/159), [marp-team/marp-core#236](https://github.com/marp-team/marp-core/issues/236))

MathJax implementation in Marp Core has more reliable rendering than KaTeX. In addition, it also has more TeX function supports, and no network required to show.

Currently a lot of Markdown flavors have adopted MathJax for math typesetting (e.g. [GitHub](https://github.blog/2022-05-19-math-support-in-markdown/)), and we expect Marp Markdown would get higher compatibility in several Markdown services.

#### `math` global directive

If your Markdown is not yet ready to migrate math typesettings into MathJax, you can continue to use KaTeX as math typesetting library by setting [`math` global directive](https://github.com/marp-team/marp-core#math-global-directive) as `katex`.

```markdown
---
math: katex
---

Continue to use KaTeX: $ax^2+bc+c$
```

We have no plans to remove KaTeX integration for a while. So you can keep to render math with KaTeX if you're using KaTeX specific syntaxes or met rendering performance issue in MathJax.

> For smooth migration of exist slides to v3, Marp for VS Code is [annotating to math use without `math` global directive](https://github.com/marp-team/marp-vscode#diagnostics) since a year ago.

### Renewed auto-scaling component

Marp Core has a tiny runtime script to activate element auto-scaling for code block, math block, and [fitting header `# <!--fit--> header`](https://github.com/marp-team/marp-core#fitting-header). v3 has updated auto scaling logic into [Web Components](https://developer.mozilla.org/docs/Web/Web_Components) based, to improve output lucidity and compatibility with CSS selector.

This update does not change the actual auto-scaling behavior from v2, so most of Markdown slide authors should not need to take care that. But if you have the custom theme that was styled to auto-scaling elements, you should review and modify CSS declarations in your theme to suit to v3.

Please refer to the pull request **[marp-team/marp-core#263](https://github.com/marp-team/marp-core/pull/263)** for details of auto-scaling components.

### Updated `default` theme

To provide familiar Markdown style to users as default, Marp Core `default` theme is based on [GitHub's Markdown CSS](https://github.com/sindresorhus/github-markdown-css).

The latest Marp Core has included following updates about `default` theme:

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

Marp Core up to v2 had detected URL-like string and, convert to hyperlink automatically. However, that was too fuzzy and often brought linkify in not intended words, such as "[Amazon.com](https://amazon.com/)" and "[ML.NET](https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet)".

But there are no any more fuzzy links in v3! Now auto link feature requires the URL string with `https://` or `http://` scheme.

Please make a Markdown link `[Amazon.com](https://amazon.com/)` explicitly if you want the hyperlink in previously auto-linked words.

# Marp CLI v2

According to the time to become core v3 stable, we also worked on **[a major update of Marp CLI](https://github.com/marp-team/marp-cli/releases/tag/v2.0.0)** to bundle a new core.

There are no major changes in general usage of Marp CLI, and I believe your CLI workflow would never break by this updation in most cases.

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

We recommend to get ready for using updated v3 core, but Marp CLI also can stick to v2 core by installing `@marp-team/marp-core@^2` to your project individually.

```bash
npm i --save-dev @marp-team/marp-cli @marp-team/marp-core@^2
npx marp ./your-markdown.md
```

It's useful when your Markdown slide files are not ready to v3. But please keep in mind we would hardly provide more updates to v2, and **continuous use may bring a risk of unpatched security issues.**

# Slide transition experiment

> ⚠️ This is still _an experimental feature_ of Marp CLI. You can track the state of progress at **[marp-team/marp-cli#447](https://github.com/marp-team/marp-cli/issues/447)**.

A really loving part of this CLI update for me is **[a brand-new experimental slide transition support in `bespoke` HTML template.](https://github.com/marp-team/marp-cli/issues/447)**

We had tested about experimental transition (powered by [Shared Elemental Transitions proposal](https://github.com/WICG/shared-element-transitions) for Web) since [Marp CLI v1.4.0](https://github.com/marp-team/marp-cli/releases/tag/v1.4.0) released at Aug 2021. It had worked well, but not so practical by compared to the common presentation tools.

As a result of catching up the new spec of browser API in Marp CLI v2, I'm so excited to provide a cutting edge transition feature that is in no any other Markdown slide tools!

## Quick look

- **33 built-in transitions**: Marp CLI has provided a lot of transition animations out of the box.
- **Define custom transition via CSS**: Markdown author and theme designer can define the custom transition through `@keyframes` declaration in CSS.
- **Opt-out transitions**: Prefers `@media (prefers-reduced-motion)` media query to be able to opt out transition animations.

![](https://user-images.githubusercontent.com/3993388/169697466-283dd2f2-b6e5-4b33-86d4-b10cc0a6c3e9.mp4)

Slide transition in HTML output is experimental so can opt in through `--bespoke.transition` CLI option, and it is only working in Chrome/Chromium 101 and later with enabled "documentTransition API" flag.

**Both of `--bespoke.transition` and `--preview` are required as a CLI option to get transition effects surely.** Try this commands to open a preview window for the transition showcase:

```bash
curl -o ./showcase.md https://gist.githubusercontent.com/yhatt/d9e86ee53eb8816aaf9c996e773b6f82/raw/transition-showcase.md
marp --bespoke.transition --preview ./showcase.md
```

> The source Markdown of the showcase is available at Gist: https://gist.github.com/yhatt/d9e86ee53eb8816aaf9c996e773b6f82

## `transition` local directive

You can set and change the kind of transition through `transition` local directive. Each transitions have 0.5s duration, but you can also set custom duration by space-separated value such as `<!-- transition: fade 1s -->`.

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

## Custom transition

The custom transition can define through just a few [`@keyframes` at-rules](https://developer.mozilla.org/docs/Web/CSS/@keyframes) within the inline `<style>` element or custom theme CSS.

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

Custom transition support potentially may bring out your boundless creativity! I'm going to write another article to describe details about how to declare transition animation later.

We are really looking forward to what creative transitions our community will create!

Please refer to **[marp-team/marp-cli#447](https://github.com/marp-team/marp-cli/issues/447)** to more details of this experiment.

# Deprecations

Finally, we have to mention that the latest update has a deprecated Markdown syntax in Marp ecosystem. It is still can use for now, but will be obsolete in future Marp tools.

We have planned to work on [an auto-fixable diagnostic for VS Code extension](https://github.com/marp-team/marp-vscode#diagnostics), to make easier update use of deprecated syntaxes.

### Shorthand for setting colors

> _Track state at [marp-team/marpit#331](https://github.com/marp-team/marpit/issues/331)._
