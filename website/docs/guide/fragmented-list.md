# Fragmented list

Marp uses some uncommon list markers to denote a **fragmented list** (also known as an incremental list or builds), which allows list content to appear incrementally.

Fragmented lists are _only available if you export to HTML_. If you export to PDF and PPTX, the fragmented list will be rendered as a normal list.

> Be careful when using fragmented lists. While fragmented lists can help focus the audience's attention on the last displayed item, they may also create confusion about hidden items. Some articles recommend never using builds (e.g. [Presentation Rules](http://www.jilles.net/perma/2020/06/05/presentation-rules.html)).

## For bullet lists

CommonMark's bullet list markers are `-`, `+`, and `*` (https://spec.commonmark.org/0.29/#bullet-list-marker). If you use `*` as the marker, Marp will parse the list as a fragmented list.

<!-- prettier-ignore-start -->

```markdown
# Bullet list

- One
- Two
- Three

---

# Fragmented list

* One
* Two
* Three
```

<!-- prettier-ignore-end -->

## For ordered list

CommonMark's [ordered list marker](https://spec.commonmark.org/0.29/#ordered-list-marker) must have `.` or `)` after digits. If you use `)` as the following character, then Marp will parse the ordered list as a fragmented list.

<!-- prettier-ignore-start -->

```markdown
# Ordered list

1. One
2. Two
3. Three

---

# Fragmented list

1) One
2) Two
3) Three
```

<!-- prettier-ignore-end -->

> These are inherited from [Marpit framework](https://marpit.marp.app/fragmented-list).
>
> [This syntax only indicates that the list _should_ be fragmented](https://marpit.marp.app/fragmented-list?id=rendering). If the tools integrated with Marp do nothing with the syntax, this list would be rendered as a normal list. In the official toolset, [Marp CLI](https://github.com/marp-team/marp-cli)'s default HTML template `bespoke` can reproduce a fragmented list as a build animation.
