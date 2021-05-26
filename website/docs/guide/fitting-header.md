# Fitting header

When `<!--fit-->` comment has contained in the content of headings, it will be scaled to fit onto the slide size.

```markdown
# <!-- fit --> Fitting header
```

```markdown:marp
# <!-- fit --> Fitting header
```

The syntax is similar to [Deckset's `[fit]` keyword](https://docs.decksetapp.com/English.lproj/Formatting/01-headings.html), but Marp uses HTML comment to hide a keyword when rendered Markdown as the document.

> This feature is inherited from [Marp Core](https://github.com/marp-team/marp-core).

## Examples

### Takahashi-style

You can easily make [Takahashi-style](https://en.wikipedia.org/wiki/Takahashi_method) slides like [Big](https://github.com/tmcw/big) presentation system by using fitting header. Combination with [heading divider](/docs/guide/heading-divider) will give the best efficiency for creating the deck.

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
