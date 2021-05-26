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
