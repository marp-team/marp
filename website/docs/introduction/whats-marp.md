# What's Marp?

### This is a stub page!

**Marp** (**Mar**kdown **P**resentation Ecosystem) provides a great experience for _writing_ presentations with Markdown.

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

Marp provides a great experience for _writing_ presentations with Markdown. :pencil:

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

[Markdown] is one of the most popular lightweight markup languages. Markdown allows the author to write presentations quickly and focus on the logical structure of the presentation (rather than the code needed to generate the presentation).

The Marp ecosystem is based on [CommonMark], a consistent spec of Markdown. Marp uses CommonMark to ensure maximum compatibility across Markdown editors and with other Markdown files. Marp only adds a few additional features on top of CommonMark, so your Marp document will look good regardless of what software you used to edit or render Markdown.

[markdown]: https://en.wikipedia.org/wiki/Markdown
[commonmark]: https://commonmark.org/

### Theme CSS

The Marp ecosystem is designed to be intuitive to anyone who has made a webpage. As long as you know HTML and CSS, you should be able to style your presentation easily. Our theming system allows you to use plain CSS to style your slides.

Marp is designed with the "[Separation of content and style](https://en.wikipedia.org/wiki/Separation_of_content_and_presentation)" in mind. The goal is to make it easy for users to apply designs made by the community to the user's content.

### Export to PDF, PPTX, HTML

Marp has first-class support for conversion into other file formats. We prioritize reproducible rendering across formats so that users do not have to worry about different formats breaking layouts. Our goal is to make sure the PDF, PPTX, and HTML versions of your slides look exactly the same.

Note that Marp is not designed to be stand-alone presentation software. The simplest and recommended way to present is to export to PDF, which allows you to present in any environment that supports PDFs. The PDF format is particularly useful if you are presenting without access to the internet. The HTML format allows you to serve your slide deck on the internet, show interactive content, and use features like fragmented lists. If you want to add additional content manually in PowerPoint, Marp also allows you to export to the PowerPoint (PPTX) format.

### Easy to get started

Our ecosystem provides both a CLI and a GUI (as an VS Code extension) for authoring a Marp slide deck. To create a slide deck, all you need to do is install Marp and write a Markdown file in the Marp format. If you want to export to PDF/PPTX, you will also need to have Chrome, Edge, or some other Chromium-flavored browser installed locally.

The Marp CLI can convert Markdown into HTML/PDF/PPTX easily. VS Code extension gives real-time slide preview, Marp Markdown language features, and export commands.

### Pluggable architecture

Marp is based on **[Marpit framework]**, the skinny framework for creating a slide deck from Markdown. It has a pluggable architecture, and developers can add features via plugin.

End users can customize the conversion engine by using Marp CLI and plugins: Add new Markdown syntax (compatible with markdown-it plugins), add custom directives, provide custom theme set, and so on. Push the limits of Marp as you like!

[marpit framework]: https://marpit.marp.app

## Author

We're [Marp team](https://github.com/marp-team). (Having said that, currently, Marp is a solo project by maintainer. The best way to join us is many contributions into Marp!)

- **Yuki Hattori ([@yhatt](https://github.com/yhatt))** - Project owner / maintainer

## License

All tools and related libraries by Marp team are licensed by [MIT License](https://github.com/marp-team/marp/blob/main/LICENSE).
