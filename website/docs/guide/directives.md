# Directives

### This is a stub page!

Marp has an extended syntax called **"Directives"** to control theme, page number, header, footer, and other slide elements.

> The syntax of directives is inherited from [Marpit framework](https://marpit.marp.app/directives). Please note that different directives are used by each Marp tool.

## Usage

Marp parses directives as [YAML](https://yaml.org/).

### HTML comment

```markdown
<!--
theme: default
paginate: true
-->
```

### Front matter

Like many tools (e.g. [Jekyll site generator](https://jekyllrb.com/docs/front-matter/)), Marp uses **YAML front matter**. Directives can be defined in front matter.

YAML front matter must be at the beginning of a Markdown document and enclosed by dashed rulers.

```markdown
---
theme: default
paginate: true
---
```

Note that the dashed ruler is also used to indicate where Marp should [ split slides](/docs/guide/how-to-write-slides#slides). Marp uses the first two dashed rulers to indicate YAML front matter. Subsequent dashed rulers indicate slide breaks.

> TIP: Defining directives in the front matter is equivalent to setting the directives using an HTML comment on the first page. Suppose your favorite Markdown editor does not support the front matter syntax. In that case, you can safely define the directive in an HTML comment instead.

## Type of directives

There are two types of Marp directives:

- **[Global directives](#global-directives)** - Controlling settings for the all slides (e.g. `theme`, `size`)
- **[Local directives](#local-directives)** - Controlling setting values for one slide (e.g. `paginate`, `header`, `footer`)

You can define both directives in the same way. You can mix definitions too. The only difference is that some settings apply to all slides, and some apply to only one slide.

### Global directives

**Global directives** are settings for the entire slide deck.

| Name             | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| `theme`          | [Set a theme name for the slide deck ▶️](/docs/guide/theme)                    |
| `style`          | Specify CSS for tweaking theme                                                 |
| `headingDivider` | [Specify heading divider option ▶️](/docs/guide/heading-divider)               |
| `size`           | Choose the slide size preset provided by theme                                 |
| `math`           | [Choose a library to render math typesetting ▶️](/docs/guide/math-typesetting) |
| `title`          | Set a title of the slide deck                                                  |
| `author`         | Set an author of the slide deck                                                |
| `description`    | Set a description of the slide deck                                            |
| `keywords`       | Set comma-separated keywords for the slide deck                                |
| `url`            | Set canonical URL for the slide deck (for HTML export)                         |
| `image`          | Set Open Graph image URL (for HTML export)                                     |
| `marp`           | Set whether or not enable Marp feature in VS Code                              |

If you set the same global directive multiple times, Marp will use the last defined value.

### Local directives

**Local directives** are settings for a specific slide.

| Name                 | Description                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `paginate`           | [Show page number on the slide if set to `true` ▶️](#page-number)                                                                         |
| `header`             | [Specify the content of the slide header ▶️](#header-and-footer)                                                                          |
| `footer`             | [Specify the content of the slide footer ▶️](#header-and-footer)                                                                          |
| `class`              | Set [HTML `class` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) for the slide element `<section>` |
| `backgroundColor`    | Set [`background-color` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) of the slide                            |
| `backgroundImage`    | Set [`background-image` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) of the slide                            |
| `backgroundPosition` | Set [`background-position` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) of the slide                      |
| `backgroundRepeat`   | Set [`background-repeat` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat) of the slide                          |
| `backgroundSize`     | Set [`background-size` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) of the slide                              |
| `color`              | Set [`color` style](https://developer.mozilla.org/en-US/docs/Web/CSS/color) of the slide                                                  |

#### Inheritance

Slides will inherit setting values of local directives from the immediately previous slide **unless** a local directive is explicitly set for the current slide. In other words, defined local directives will apply to both the defined page and subsequent pages.

For example, the Markdown for this set of slides defines the `backgroundColor` directive on the second page. Because subsequent pages inherit local directives, the third page will also have the same color.

```markdown
# Page 1

Go to next page :arrow_right:

---

<!-- backgroundColor: lightblue -->

# Page 2

## This page has a light blue background.

---

# Page 3

## This page also has the same light blue background.
```

```markdown:marp
# Page 1

Go to next page :arrow_right:

---

<!-- backgroundColor: lightblue -->

# Page 2

## This page has a light blue background.

---

# Page 3

## This page also has the same light blue background.
```

#### Scoped local directives

If you want a local directive to apply only to the current page, add the underscore prefix `_` to the name of directives.

The value of a scoped directive will be given priority over an inherited value, and subsequent pages will not inherit the value of the scoped directive.

```markdown
<!-- color: red -->

# Page 1

This page has red text.

---

<!-- _color: blue -->

# Page 2

This page has blue text, specified by a scoped local directive.

---

# Page 3

Go back to red text.
```

```markdown:marp
<!-- color: red -->

# Page 1

This page has red text.

---

<!-- _color: blue -->

# Page 2

This page has blue text, specified by a scoped local directive.

---

# Page 3

Go back to red text.
```

The underscore prefix can be added to any local directives.

#### Diagram

![The diagram of local directives and scoped directives](/assets/docs/directives.png 'The diagram of local directives and scoped directives')

## Theme

<!-- TODO: Link to "Theme" section -->

## Page number

To add page number to the slide, set the **`paginate`** local directive to `true`.

```markdown
<!-- paginate: true -->

You can see the slide number in the lower right.
```

```markdown:marp
<!-- paginate: true -->

You can see the slide number in the lower right.

<style>
  @keyframes point {
    from { background-position: bottom 55px right 55px; }
    to { background-position: bottom 40px right 40px; }
  }
  section {
    animation: 0.5s ease-in-out alternate infinite point;
    background: #fff url('https://icongr.am/feather/arrow-down-right.svg?color=0288d1') no-repeat bottom 40px right 40px / 100px;
  }
  @media (prefers-reduced-motion) {
    section {
      animation: none;
    }
  }
</style>
```

Refer to [theme guide](/docs/guide/theme) for details on how to style a slide number.

### Skip pagination in the title slide

Just move the definition of the `paginate` directive to the second slide.

```markdown
# Title slide

---

<!-- paginate: true --->

## Start pagination from this slide.
```

```markdown:marp
# Title slide

---

<!-- paginate: true --->

## Start pagination from this slide.

<style scoped>
  @keyframes point {
    from { background-position: bottom 55px right 55px; }
    to { background-position: bottom 40px right 40px; }
  }
  section {
    animation: 0.5s ease-in-out alternate infinite point;
    background: #fff url('https://icongr.am/feather/arrow-down-right.svg?color=0288d1') no-repeat bottom 40px right 40px / 100px;
  }
  @media (prefers-reduced-motion) {
    section {
      animation: none;
    }
  }
</style>
```

You can also use [scoped directive](#scoped-local-directives) to disable pagination in the title slide.

```markdown
---
paginate: true
_paginate: false
---

# Title slide

---

## Start pagination from this slide.
```

## Header and footer

Use **`header`** and **`footer`** local directives to add headers and footers to slides.

```markdown
<!--
header: Header content
footer: Footer content
-->

# Header and footer
```

```markdown:marp
<!--
header: Header content
footer: Footer content
-->

# Header and footer
<style>
  @keyframes point-up {
    from { background-position: 50px 50px; }
    to { background-position: 50px 70px; }
  }
  @keyframes point-down {
    from { background-position: left 50px bottom 50px; }
    to { background-position: left 50px bottom 70px; }
  }
  section {
    animation: 0.5s ease-in-out alternate infinite point-up;
    background: #fff url('https://icongr.am/feather/arrow-up.svg?color=0288d1') no-repeat 50px 50px / 80px;
  }
  section::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    animation: 0.5s ease-in-out alternate infinite point-down;
    background: transparent url('https://icongr.am/feather/arrow-down.svg?color=0288d1') no-repeat left 50px bottom 50px / 80px;
  }
  @media (prefers-reduced-motion) {
    section, section::before {
      animation: none;
    }
  }
</style>
```

Refer to [theme guide](/docs/guide/theme) for details on how to style header and footer.

### Markdown formatting

You can use inline Markdown formatting (italic, bold, inline image, etc) in header and footer like this:

```markdown
---
header: '**bold** _italic_'
footer: '![image](https://example.com/image.jpg)'
---
```

To make directives parsable as valid YAML, you can wrap content with (double-)quotes.

### Reset header and footer

Set the value of a directive to an empty string value to reset the header and footer in the middle of the slide deck.

```markdown
---
header: '**Header**'
footer: '_Footer_'
---

# Example

---

<!--
header: ''
footer: ''
-->

## Reset header and footer
```

```markdown:marp
---
header: '**Header**'
footer: '_Footer_'
---

# Example

---

<!--
header: ''
footer: ''
-->

## Reset header and footer
```

## Styling slide

### Shorthand

## Editor integration

<!-- By using **Marp for VS Code**, you can preview -->
