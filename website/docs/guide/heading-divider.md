# Heading divider

By using heading divider option, you can indicate to split pages at before headings whose specified level. It's useful when converting an existing Markdown document to the slides.

This is similar to [Pandoc](https://pandoc.org/)'s [`--slide-level` option](https://pandoc.org/MANUAL.html#structuring-the-slide-show) and [Deckset 2](https://www.deckset.com/2/)'s "Slide Dividers" option.

> This feature is inherited from [Marpit framework](https://marpit.marp.app/directives?id=heading-divider).

## Example

Let’s say you have a Markdown document like this:

```markdown
# Markdown document

The article of Markdown

## What is Markdown?

> Markdown is a lightweight markup language for creating formatted text using a plain-text editor.
>
> _-- https://en.wikipedia.org/wiki/Markdown_

## History

### Origin

Markdown has created by John Gruber in 2004.

https://daringfireball.net/projects/markdown/

### Standardization

CommonMark is a project for a standardization of Markdown launched in 2012.
```

Add [`headingDivider` global directive](/docs/guide/directives#global-directives) for making slide pages by sections that are made by heading level 2.

```markdown
<!-- headingDivider: 2 -->
```

That's all! Marp will split pages at before each headings whose level 2.

```markdown:marp
<!-- headingDivider: 2 -->

# Markdown document

The article of Markdown

## What is Markdown?

> Markdown is a lightweight markup language for creating formatted text using a plain-text editor.
>
> _-- https://en.wikipedia.org/wiki/Markdown_

## History

### Origin

Markdown has created by John Gruber in 2004.

https://daringfireball.net/projects/markdown/

### Standardization

CommonMark is a project for a standardization of Markdown launched in 2012.
```

`headingDivider` global directive accepts the heading level from 1 to 6. When the heading level has set by a number, heading divider will enabled in headings that have _a specified level and its parent levels_. So `headingDivider: 2` is actually meaning to split at before headings whose level 1 and 2.

It may be better to split by subsections if the section had so many contents that they would protrude from the slide. In that case, just change the base level for `headingDivider` to `3`. Check out the difference from the previous example in after 3rd page:

```markdown:marp
<!-- headingDivider: 3 -->

# Markdown document

The article of Markdown

## What is Markdown?

> Markdown is a lightweight markup language for creating formatted text using a plain-text editor.
>
> _-- https://en.wikipedia.org/wiki/Markdown_

## History

### Origin

Markdown has created by John Gruber in 2004.

https://daringfireball.net/projects/markdown/

### Standardization

CommonMark is a project for a standardization of Markdown launched in 2012.
```

> [Rulers to split pages](/docs/guide/how-to-write-slides#slides) still work normally even if enabled `headingDivider`.

## Advanced

Auto split in parent heading levels is a reasonable behavior in the most cases, but sometimes you may require finer control of splitting levels. By setting array value consisted of 1-6, you also can indicate to split at before only specific levels.

```markdown
<!-- headingDivider: [1, 3] -->
```

This setting will indicate to split pages only at before heading level 1 and 3.
