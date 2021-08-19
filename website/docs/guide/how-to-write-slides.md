# How to write slides

## Markdown

To write slides using Marp, you have to know basic Markdown syntax. It doesn't take long to learn the basics, and there are many Markdown tutorials on the internet, so this guide will focus on the additional syntax used by Marp that allows you to write slides.

### Resources for learning Markdown

- **[Markdown Guide](https://www.markdownguide.org/)** - A simple guide on how to use Markdown
- **[Markdown Tutorial](https://www.markdowntutorial.com/)** - Step-by-step Markdown tutorials with interactive exercises

## Slides

OK, let's write presentation slides. Marp splits slides in the deck using the horizontal ruler (e.g. `---`).

```markdown
# Slide 1

Hello, world!

---

# Slide 2

Marp splits slides in the deck by horizontal ruler.
```

```markdown:marp
# Slide 1

Hello, world!

---

# Slide 2

Marp splits slides in the deck by horizontal ruler.
```

If you use the `---` ruler, an empty line may be required before the ruler by [the spec of CommonMark](https://spec.commonmark.org/0.29/#example-28). If you do not want to add empty lines around the ruler, you can also use the underline ruler `___`, asterisk ruler `***`, or space-included ruler `- - -` to split slides.

> This feature is inherited from [Marpit framework](https://marpit.marp.app/markdown).

## Syntaxes

Marp's Markdown syntax is based on [CommonMark](https://commonmark.org/). In addition, Marp uses some extended syntax:

- Line breaks in a paragraph will convert to `<br />` tag automatically.
  - You also can use `<br />` tag directly (Useful if you need a line break within a [fitting header](/docs/guide/fitting-header)).
- There is special meaning in some (uncommon) list markers `*` and `1)`. [▶️ Fragmented list](/docs/guide/fragmented-list).
- Some extended syntaxes that came from [GitHub Flavored Markdown (GFM)](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) are enabled:
  - [Automatic linking for URLs](https://github.github.com/gfm/#autolinks-extension-)
  - Emoji shortcode (provided by [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji) and [twemoji](https://github.com/twitter/twemoji))
  - [Strikethrough](https://github.github.com/gfm/#strikethrough-extension-) (`~~strike~~`)
  - Syntax highlighting for code blocks (via [highlight.js](https://highlightjs.org/))
  - [Tables](https://github.github.com/gfm/#tables-extension-)
- Most HTML tags are _disabled_ by default for security reasons. Marp only allows users to use two tags by default: the `<style>` tag for tweaking the theme and the `<br />` tag mentioned earlier.
  - To enable all HTML tags, you need to opt-in for the Marp tool you are using.

> Many extended syntaxes are inherited from [Marp Core](https://github.com/marp-team/marp-core).
