# How to write slides

## Markdown

First, you have to know basic syntax of Markdown. It would not take long to learn basics. There are a ton of guidances of Markdown on the internet so not explained here.

### Learning resources

- **[Markdown Guide](https://www.markdownguide.org/)** - An inclusive guide for how to use Markdown
- **[Markdown Tutorial](https://www.markdowntutorial.com/)** - Step-by-step Markdown tutorials with interactive exercises

## Slides

OK, let's write presentation slides. Marp splits slides in the deck by horizontal ruler (e.g. `---`).

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

In `---` ruler, an empty line may be required before the dash ruler by [the spec of CommonMark](https://spec.commonmark.org/0.29/#example-28). You can use the underline ruler `___`, asterisk ruler `***`, and space-included ruler `- - -` as same purpose when you do not want to add empty lines.

> This feature is inherited from [Marpit framework](https://marpit.marp.app/markdown).

## Syntaxes

Marp's Markdown syntax is based on [CommonMark](https://commonmark.org/), and there are extended syntaxes like following:

- Line breaks in a paragraph will convert to `<br />` tag automatically.
  - You also can use `<br />` tag directly (Useful for the line break within [fitting header](/docs/guide/fitting-header)).
- There is special meaning in some (uncommon) list markers `*` and `1)`. [▶️ Fragmented list](/docs/guide/fragmented-list).
- Some extended syntaxes that came from [GitHub Flavored Markdown (GFM)](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) are enabled:
  - [Automatic linking for URLs](https://github.github.com/gfm/#autolinks-extension-)
  - Emoji shortcode (provided by [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji) and [twemoji](https://github.com/twitter/twemoji))
  - [Strikethrough](https://github.github.com/gfm/#strikethrough-extension-) (`~~strike~~`)
  - Syntax highlighting for code block (via [highlight.js](https://highlightjs.org/))
  - [Tables](https://github.github.com/gfm/#tables-extension-)
- The most of HTML tags are _disabled_ due to security reason. We are allowing only `<style>` tag for tweaking theme, and `<br />` tag as mentioned earlier.
  - For enabling all HTML tags, you need to opt-in at a Marp tool you are using.

> Many extended syntaxes are inherited from [Marp Core](https://github.com/marp-team/marp-core).
