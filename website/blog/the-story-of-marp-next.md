---
title: The story of Marp Next
date: 2019-06-06
description: Today, I'm so excited to introduce the story of Marp Next! The full-rewritten Marp is not only just a writer. To be usable in various situations, we build a brand-new Marp ecosystem consisted of multiple modules.
author: Yuki Hattori
github: yhatt
image: /og-images/the-story-of-marp-next.png
---

The first version of [Marp](https://yhatt.github.io/marp/) was released at almost 3 years ago. At first, it was started from a simple tool for personal usage called "mdSlide". And now, Marp has been used by a lot of users who would recognize the real value of the presentation writer. Marp is amassed around [8,000 stars](https://github.com/yhatt/marp/stargazers) until now.

However, our headache brought from lacked maintainability to develop. We had received so many requests to the old Marp app, and it has to evolve to keep providing the best writing environment of presentation deck.

Today, I'm so excited to introduce the story of Marp Next! The full-rewritten Marp is not only just a writer. To be usable in various situations, we build **a brand-new Marp ecosystem** consisted of multiple modules. They are developed with JavaScript and TypeScript, and much more maintainable than the previous Marp.

<!-- more -->

# Marp ecosystem

Marp Next has two core components: **[Marpit]** framework and **[Marp Core]**. Tools by Marp ecosystem are usually based on these.

## Marpit

**[Marpit]** is _the skinny framework_ for creating HTML slide deck from Markdown. It is designed to convert Markdown into only minimum assets consisted of static HTML and CSS, and the output can convert into PDF slide deck by printing through Chrome / Chromium.

Marpit has created for using as the base of Marp ecosystem, but it is also independent framework. You may integrate Marpit's Markdown conversion with your tool, even if it's not Marp: [reveal.js](https://codesandbox.io/embed/nw80vrxvpp), [WebSlides](https://codesandbox.io/embed/j3wo2091yw), and so on.

[marpit]: https://marpit.marp.app/

### [Marpit Markdown]: Keep compatibility with a plain Markdown document

We had received [many requests][issues] to the old Marp, about the additional syntax to help creating beautiful slide deck. On the other hand, we also have received a request that [must respect Markdown syntax strictly](https://github.com/yhatt/marp/issues/87). We have to deal with these contradicted issues.

Additional syntax provided by Marpit should never break [CommonMark](https://commonmark.org/) document. Thus, the result of rendering keeps looking nice even if you open the Marpit Markdown in a general Markdown editor. And you can even extend the additional syntax via [markdown-it plugins](https://marpit.marp.app/usage?id=extend-marpit-by-plugins) if you need.

[marpit markdown]: https://marpit.marp.app/markdown
[issues]: https://github.com/yhatt/marp/issues

### [Theme CSS]: Design your deck with clean markup

Marpit has the theming system to allow designing everything of slides by CSS.

The old Marp had the _limited_ theming system and required deep diving to internal for customization: Build system, [Sass], the logic of Marp app, and so on. So we had to create a brand-new theming system for easy customization of theme with only general CSS knowledge.

Marpit's it only requires a pure CSS, and no additional knowledges! You have only to focus styling HTML semantic elements. It means that you can create theme CSS from now!

In addition, Marpit has the pixel-perfect slide system like PowerPoint and Keynote. Theme creator never needs to worry about the responsive layout, and could provide design exactly as the author wanted with less effort.

[theme css]: https://marpit.marp.app/theme-css
[sass]: https://sass-lang.com/

### [Inline SVG slide]&nbsp;(Experimental)

Our unique idea is wrapping each slides by inline SVG. It might feel a bit strange, but makes many advantages.

- Supports pixel-perfect scaling via style definition and **realizes Zero-JS slide deck**.
- Isolates Markdown contents and prevents that injected DOM by Marpit's advanced feature breaks design defined in theme CSS.

Thanks to the power of SVG, we can keep a framework simple and maintainable. [Marp Core] is based on inline SVG slide by default.

[inline svg slide]: https://marpit.marp.app/inline-svg

## Marp Core

**[Marp Core]** is a base converter for our projects extended from Marpit. In short, it is a battery-included Marpit.

Marpit only has bare essential features, so it might have not enough to start writing your deck. Marp Core provides the practical syntax, additional features, and built-in themes.

Many of the features are based on the old desktop app, and have improved to be suitable to Marpit. Of course, we added the new features for creating more beautiful deck.

[marp core]: https://github.com/marp-team/marp-core

- Built-in themes (Default, Gaia, and _new_ Uncover theme)
- Included Emoji support 😁
- [KaTeX](https://katex.org/) Math typesetting
- `size` global directive
- Auto scaling features (_new_)
  - Fitting header via `<!-- fit -->` annotation
  - Scale-down overflowed fence, code, and math block

# Applications

## Marp CLI

[marp cli]: https://github.com/marp-team/marp-cli

**[Marp CLI]** is a CLI interface of Marpit and Marp Core converter. It's a Swiss-Army knife for Marp slide deck!

[![Marp CLI](https://raw.githubusercontent.com/marp-team/marp-cli/main/docs/images/marp-cli.gif ' ')][marp cli]

You can use it right now by running `npx @marp-team/marp-cli` if [Node.js](https://nodejs.org/) is installed.

- Export to HTML, PDF, and image
- Watch the change of your Markdown and theme (`--watch`)
- Open preview window for presentation (`--preview`)
- Full-customizable engine based on Marpit framework

Marp had a text editor originally, but you might think that want to write the slide deck with your favorite editor. If you use Vim, you would feel uncomfortable not to be usable Vim style key-binding. From now on, use Marp CLI's watch mode together with original Vim!

And Marp CLI can create really practicable static HTML as like as a presentation mode! It is powered by deep integration with [Bespoke.js](https://github.com/bespokejs/bespoke).

Thanks to [Netlify], [Now], and more hosting services, Marp CLI also brings a efficient Git management for creating slide deck just like [GitPitch]. I've created [an example slide](https://yhatt-marp-cli-example.netlify.com/) managed via [GitHub repository](https://github.com/yhatt/marp-cli-example) as a good starter to help writing your slide deck. Try to use it via "Deploy to Netlify" button on [README](https://github.com/yhatt/marp-cli-example/blob/master/README.md#usage)!

[netlify]: https://www.netlify.com/
[now]: https://zeit.co/now/
[gitpitch]: https://gitpitch.com/

## Marp Web (_tech demo_)

**[Marp Web]** is a Web interface of Marp presentation writer. It allows writing your slide deck as like as a traditional desktop app.

> The current Marp Web is just a tech demo. We are planning to re-implement Marp Web based on well-known framework (like React) for building SPA.

[marp web]: https://web.marp.app/

### Progressive Web Apps

It made [some strong oppositions by users that is using Marp in offline](https://github.com/yhatt/marp/issues/174#issuecomment-294594856) when an idea of migration to web-based app is proposed for keeping maintainability of Marp. It was caused that a thinking of PWA was not general at that time.

And 2 years later, the time has come to use PWA! After the first access to **[https://web.marp.app/][marp web]**, Marp Web would be ready to use in both of online and offline. Online resources to use the web interface would be cached in your browser, and use them when network is offline.

[![Marp Web + Progressive Web Apps](https://raw.githubusercontent.com/marp-team/marp-web/master/desktop-pwa.png ' ')][marp web]

### Use via any devices

By migrating to the web-based app, Marp will be able using in mobile device: Android and iOS. That's sure it's well suited to the tablet device like iPad.

![Marp Web on iPad](https://user-images.githubusercontent.com/3993388/50569518-5305c800-0daa-11e9-8fa4-08053c9b51cd.png ' ')

Marp Web would work also in Chrome OS well. Marp especially has many users in the field of education, and supporting Chrome OS that has large share in its field is meaningful.

### Blazing-fast live preview ⚡️

We think Marp's important feature is a blazing-fast live preview. In the web-based app, realizing the same feature had many difficulties.

In currently published tech-demo, you can try Marp's really fast preview on the web. The preview applies as soon as typing, and it would not block your typing even if you have a large Markdown slides over than 100 pages.

# Integrations

The modularized Marp Core brought Marp integrations for some tools.

## [Marp for VS Code][marp vscode]

Honestly, I don't think to want to make a new editor because there are many great Markdown editors in the world. I had been thinking it would be awesome if Marp could integrate with a something else powerful Markdown editor. And now, Marp can use in [Visual Studio Code](https://code.visualstudio.com/)!

![Marp for VS Code](/assets/marp-for-vs-code.png ' ')

It was realized because VS Code is using the same Markdown engine (markdown-it) as Marpit framework. Of course, you can export slides as PDF and HTML easily, powered by [Marp CLI].

[marp vscode]: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode

## [Marp React] &amp; [Marp Vue] (In development)

[marp react]: https://github.com/marp-team/marp-react
[marp vue]: https://github.com/marp-team/marp-vue

Marp's blazing fast live-preview is not only for ours! We provide Marp renderer component into [React][marp react] and [Vue][marp vue]. Both Marp React and Marp Vue have supported the incremental update using framework's virtual DOM, and they are been easy to build your app.

Especially, Marp React would become to the base of the future of [Marp Web].

# Migration plan

## Desktop app ([yhatt/marp](https://github.com/yhatt/marp))

If you are using an old Marp application, **you should migrate to use Marp Next tools.** I NEVER recommend continue to use the old Marp, because _its maintainance has stopped 2 years ago and there is concern about security issues._

In future, the main interface would become to Marp Web. We have bet to PWA technology that has a lot of advantages. The desktop app is planned as "Marp Desktop" but it just may become a wrapper of Web interface.

I would stop publishing the old Marp and archive its repository if Marp Web has grown to become replaceable the old Marp.

## Your slide deck

Your Markdown slides written in the old Marp syntax should rewrite to suit to the brand-new Marp ecosystem.

In a new Marp, we have reconsidered Markdown syntax based on feedback to the old Marp app. So, some syntaxes are losing compatibility.

### Syntax

- In Marp Core, non-whitelisted HTML elements are disabled by default because of security reason. Currently our whitelist includes only `<br>` element. Some Marp Next tools has provided preference to enable HTML, but you should take care for enabling HTML in untrusted Markdown.

### Directives

- Directives would be parsed by YAML parser tuned for Marp (Marpit). Thus spot directive prefix `*` is changed to `_` for keeping YAML syntax.
- `$` prefix no longer required to global directives.
- Slide size still can choose from "16:9" and "4:3", through `size` global directive (provided by Marp Core). If you want to use custom size or you're using Marpit framework, please use [theme CSS](https://marpit.marp.app/theme-css?id=slide-size).
- `page_number` directive is renamed to `paginate`.
- `template` directive is renewed to use `class` directive. It can define HTML class per slides.
- `prerender` directive is removed. It brings user confusing about exported PDF quality.

### Image

- Background image `![bg]()` has no filter applied by default. Try using `![bg opacity]()` if you want.
- The inline image is no longer scalable by percentage `![50%]()`. (It's not supported in Firefox) Instead you can use `width` (`w`) and `height` (`w`) keyword to resize image as like as `![width:300px]()`.
- `![center]()` won't work. It requires changing image to the block element and brings confusion to theme author. You can tweak style if you still want.

```html
<style>
  img[alt~='center'] {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
```

# Try Marp Next!

Marp Next just focuses to build the ecosystem for Markdown slide deck with pure open source. We expect to expand Marp productivity together with open source community.

We still have stood at the beginning of the brand-new ecosystem. Are you interested to Marp team and our ecosystem? We welcome to start your contribution! See [our contributing guideline](https://github.com/marp-team/.github/blob/master/CONTRIBUTING.md) and get started!

> PS. [GitHub Sponsors](https://github.com/sponsors/yhatt) is also good contribution if you want to help my working for open source.
