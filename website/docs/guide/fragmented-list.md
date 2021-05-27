# Fragmented list

Marp recognizes some uncommon list markers as the item of **fragmented list** (also known as incremental list, build animation) for appearing contents one by one.

Fragmented list is _only available in the exported HTML_. Please note PDF and PPTX will not reproduce animation.

> We recommend to make a careful decision whether use fragmented list. This is surely useful to focus audience's interests into the last displayed item. However, keep in mind that may bring confusion by what there are hidden items at the same time. Some articles are pointing out should never use builds in presentation. (e.g. [Presentation Rules](http://www.jilles.net/perma/2020/06/05/presentation-rules.html))

## For bullet list

CommonMark allows `-`, `+`, and `*` as the character of [bullet list markers](https://spec.commonmark.org/0.29/#bullet-list-marker). Marp will parse as the fragmented list if you are using `*` as the marker.

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

CommonMark's [ordered list marker](https://spec.commonmark.org/0.29/#ordered-list-marker) must have `.` or `)` after digits. Marpit would parse as fragmented list if you are using `)` as the following character.

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
> [The syntax just indicates that the list would be fragmented](https://marpit.marp.app/fragmented-list?id=rendering). A rendering result would be same as normal list if tools that are integrated with Marp did nothing. In the official toolset, [Marp CLI](https://github.com/marp-team/marp-cli)'s default HTML template `bespoke` can reproduce fragmented list as the step animation.
