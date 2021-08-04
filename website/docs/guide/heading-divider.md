# Heading divider

The heading divider directive tells Marp to automatically add a slide break before a heading of the specified level. This directive is particularly useful when converting an existing Markdown document to slides.

Heading dividers is similar to [Pandoc](https://pandoc.org/)'s [`--slide-level` option](https://pandoc.org/MANUAL.html#structuring-the-slide-show) and [Deckset 2](https://www.deckset.com/2/)'s "Slide Dividers" option.

> This feature is inherited from the [Marpit framework](https://marpit.marp.app/directives?id=heading-divider).

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

Add the [`headingDivider` global directive](/docs/guide/directives#global-directives).

```markdown
<!-- headingDivider: 2 -->
```

Once you have specified the directive, Marp will automatically split the document into slides by starting a new slide whenever a section has a heading level of 2.

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

Markdown was created by John Gruber in 2004.

https://daringfireball.net/projects/markdown/

### Standardization

CommonMark is a project for a standardization of Markdown launched in 2012.
```

The `headingDivider` global directive accepts heading levels from 1 to 6. When the heading level is set as a number, Marp will split slides at headings that are _at the specified level and at all parent levels_. So, `headingDivider: 2` will actually make new slides at headings of levels 1 and 2.

If a section has so much content that it overflows the slide, it might be better to split it by subsection. To do that, just change the base level for `headingDivider` to `3`. Check out the difference from the previous example after the 3rd page:

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

Markdown was created by John Gruber in 2004.

https://daringfireball.net/projects/markdown/

### Standardization

CommonMark is a project for a standardization of Markdown launched in 2012.
```

> [Rulers to split pages](/docs/guide/how-to-write-slides#slides) still work normally even if enabled `headingDivider`.

## Advanced

Auto split in parent heading levels is reasonable behavior in most cases, but sometimes you may require finer control of splitting levels. If you set the directive value to an array, you also instruct Marp to split at only the specified levels.

```markdown
<!-- headingDivider: [1, 3] -->
```

This setting will instruct Marp to split slides at heading levels 1 and 3.
