# Fitting header

When the `<!--fit-->` comment is placed in a heading, the heading will be scaled to fit onto a single line.

```markdown
# <!-- fit --> Fitting header
```

```markdown:marp
# <!-- fit --> Fitting header
```

The syntax is similar to [Deckset's `[fit]` keyword](https://docs.decksetapp.com/English.lproj/Formatting/01-headings.html), but Marp uses an HTML comment to hide the keyword when the Markdown is rendered.

> This feature is inherited from [Marp Core](https://github.com/marp-team/marp-core).

## Examples

### Takahashi-style

You can efficiently make [Takahashi-style](https://en.wikipedia.org/wiki/Takahashi_method) slides like the [Big](https://github.com/tmcw/big) presentation system by using the fitting header. Combining fitting headers with the [heading divider](/docs/guide/heading-divider) directive will allow you to write one slide per line.

```markdown
---
theme: uncover
headingDivider: 1
---

# <!--fit--> Takahashi-style<br />presentation

# <!--fit--> Feature

# <!--fit--> Huge text

# <!--fit--> A few words
```

```markdown:marp
---
theme: uncover
headingDivider: 1
---

# <!--fit--> Takahashi-style<br />presentation

# <!--fit--> Feature

# <!--fit--> Huge text

# <!--fit--> A few words
```
