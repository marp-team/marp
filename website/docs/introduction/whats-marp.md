# What's Marp?

**Marp** (**Mar**kdown **P**resentation Ecosystem) provides the great experience to _write_ your presentation slide deck with Markdown.

````markdown:marp
---
marp: true
theme: uncover
---

![Marp w:240](/assets/marp-logo.svg)

# **Marp**

Markdown Presentation Ecosystem

https://marp.app/

---

<!-- paginate: true -->

## What's Marp?

Marp provides the great experience to _write_ your presentation slide deck with Markdown. :pencil:

```markdown
# Slide 1

foo

---

# Slide 2

bar
```
````

## Concepts

### Markdown

[Markdown] is the one of most popular lightweight markup language. Marp ecosystem is based on [CommonMark], the consistent spec of Markdown. The author can focus to write story with keeping logical structure and efficient writing speed.

[markdown]: https://en.wikipedia.org/wiki/Markdown
[commonmark]: https://commonmark.org/

By cherry-picking additional features, we are make careful to keep compatibility with the general Markdown document. It means the result of rendering keeps looking good even if you editting and previewing the Marp Markdown in a general Markdown editor.

### Theme CSS

Marp ecosystem is faithful to Web basics, HTML and CSS. We provide a theming system using plain CSS to style your slides. It is mostly same as styling HTML page so you can jump right in by just learning CSS.

"[Separation of content and style](https://en.wikipedia.org/wiki/Separation_of_content_and_presentation)" is an important thing also in the slide deck. You can apply the design made by us or community into your deck easily. If necessary, you can tweak styles by inline style within Markdown too.

### Export to PDF, PPTX, HTML

We have a first-class support of conversion into other file formats. Marp has given importance to reproducibility of rendering so you do not need to worry about broken layout.

Marp is not aim to giving a presentation with itself. Exporting to PDF format is the best choice to give a presentation. You can present in anywhere, any devices, and regardless network status by just bringing a one PDF file.

If you want more familiar way to make a presentation, you can export to PowerPoint document (PPTX) too. For using interactive contents or serving the deck on the web, you also can export to HTML that have bare minimum features for presentation.

### Easy to get started

Our ecosystem provides CLI and GUI (as VS Code extension) for authoring Marp slide deck. All your need is only single Markdown file, and installing either of Chrome, Edge, and Chromium flavored browser if required to export into PDF/PPTX.

Marp CLI can convert Markdown into HTML/PDF/PPTX easily. VS Code extension gives real-time slide preview, Marp Markdown language features, and export command.

### Pluggable architecture

Marp is based on **[Marpit framework]**, the skinny framework for creating slide deck from Markdown. It has a pluggable architecture and developer can extend features via plugin.

End users can customize conversion engine by using Marp CLI and plugins: Add new Markdown syntax (compatible with markdown-it plugins), add custom directives, provide custom theme set, and so on. Push the limits of Marp as you like!

[marpit framework]: https://marpit.marp.app
