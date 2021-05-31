# Directives

### This is a stub page!

Marp has extended syntax called **"Directives"** to control theme, page number, header, footer, and so on.

> The syntax of directives is inherited from [Marpit framework](https://marpit.marp.app/directives). Please note supported directives are different by each Marp tools.

## Usage

The written directives will parse as [YAML](https://yaml.org/) format.

### HTML comment

```markdown
<!--
theme: default
paginate: true
-->
```

### Front matter

**YAML front matter** is a syntax often used for keeping metadata of Markdown in a lot of tools (e.g. [Jekyll site generator](https://jekyllrb.com/docs/front-matter/)). Marp has also supported front matter as the container to define directives.

It must be the first thing of Markdown, and between the dash rulers.

```markdown
---
theme: default
paginate: true
---
```

Don't confuse to [the ruler for splitting slides](/docs/guide/how-to-write-slides#slides)! The actual slide contents would start after the ending ruler of front-matter.

> TIP: Defining directives via front matter is exactly same meaning as setting directives by HTML comment at the first page. When the front matter syntax is not supported in your favorite Markdown editor, you can replace into HTML comment safely in the most cases.

## Type of directives

Marp directives consisted of two groups:

- **[Global directives](#global-directives)** - Setting for the whole of slide deck (e.g. `theme`, `size`)
- **[Local directives](#local-directives)** - Controlling the setting value per slide pages (e.g. `pagiante`, `header`, `footer`)

There is no difference how to define each directives, and you can mix definitions too. An only difference is how to consume the value.

### Global directives

**Global directives** are settings for the whole of slide deck.

| Name             | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `theme`          | [Set a theme name for the slide deck ▶️](/docs/guide/theme)      |
| `style`          | Specify CSS for tweaking theme                                   |
| `headingDivider` | [Specify heading divider option ▶️](/docs/guide/heading-divider) |
| `size`           | Choose the slide size preset provided by theme                   |
| `title`          | Set a title of the slide deck (for HTML export)                  |
| `description`    | Set a description of the slide deck (for HTML export)            |
| `url`            | Set canonical URL for the slide deck (for HTML export)           |
| `image`          | Set Open Graph image URL (for HTML export)                       |
| `marp`           | Set whether or not enable Marp feature in VS Code                |

Marp will recognize only the last defined value if you set the value for a same global directive many times in multiple HTML comments.

### Local directives

**Local directives** are settings for each slide pages.

| Name                 | Description                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `paginate`           | [Show page number on the slide if set `true` ▶️](#page-number)                                                                            |
| `header`             | [Specify the content of slide header ▶️](#header-and-footer)                                                                              |
| `footer`             | [Specify the content of slide footer ▶️](#header-and-footer)                                                                              |
| `class`              | Set [HTML `class` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) for the slide element `<section>` |
| `backgroundColor`    | Set [`background-color` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) of the slide                            |
| `backgroundImage`    | Set [`background-image` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) of the slide                            |
| `backgroundPosition` | Set [`background-position` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) of the slide                      |
| `backgroundRepeat`   | Set [`background-repeat` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat) of the slide                          |
| `backgroundSize`     | Set [`background-size` style](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) of the slide                              |
| `color`              | Set [`color` style](https://developer.mozilla.org/en-US/docs/Web/CSS/color) of the slide                                                  |

#### Inheritance

If not set the local directive explicit in a slide, **the setting value of local directives for the slide will be inherited from previous slide**. In other words, defined local directives will apply to the defined page and following pages.

For example, this Markdown is defining `backgroundColor` directive at the second page, and the third page will use the inherited color.

```markdown
# Page 1

Go to next page :arrow_right:

---

<!-- backgroundColor: lightblue -->

# Page 2

## This page has lightblue background.

---

# Page 3

## This page also has the same background.
```

```markdown:marp
# Page 1

Go to next page :arrow_right:

---

<!-- backgroundColor: lightblue -->

# Page 2

## This page has lightblue background.

---

# Page 3

## This page also has the same background.
```

#### Scoped local directives

To set specific value of local directives only to the current page, add the underscore prefix `_` to the name of directives.

The value of scoped directive will be given priority over the inherited value from previous, and will not inherit to following pages.

```markdown
<!-- color: red -->

# Page 1

This page has red text.

---

<!-- _color: blue -->

# Page 2

This page has blue text, specified by scoped local directive.

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

This page has blue text, specified by scoped local directive.

---

# Page 3

Go back to red text.
```

The underscore prefix can add to all of local directives.

#### Diagram

![The diagram of local directives and scoped directives](/assets/docs/directives.png 'The diagram of local directives and scoped directives')

## Theme

<!-- TODO: Link to "Theme" section -->

## Page number

To add page number to the slide, set **`paginate`** local directive as `true`.

```markdown
<!-- paginate: true -->

You can see a page number of the slide in lower right.
```

```markdown:marp
<!-- paginate: true -->

You can see a page number of the slide in lower right.

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

Refer to [theme guide](/docs/guide/theme) for the detail of how to style a page number.

### Skip pagination in the title slide

Just move a definition of `paginate` directive to an inside of a second page.

```markdown
# Title slide

---

<!-- paginate: true --->

## Start pagination from this page.
```

```markdown:marp
# Title slide

---

<!-- paginate: true --->

## Start pagination from this page.

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

Or you also can use [scoped directive](#scoped-local-directives) to disable pagination in the title slide.

```markdown
---
paginate: true
_paginate: false
---

# Title slide

---

## Start pagination from this page.
```

## Header and footer

Use **`header`** and **`footer`** local directive to add headers and footers to slides.

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

Refer to [theme guide](/docs/guide/theme) for the detail of how to style header and footer.

### Markdown formatting

You can contain inline Markdown formatting (italic, bold, inline image, etc) into header and footer like this:

```markdown
---
header: '**bold** _italic_'
footer: '![image](https://example.com/image.jpg)'
---
```

It may require to wrap the content by (double-)quotes to make directives parsable as valid YAML.

### Reset header and footer

Set an empty string value to directives to reset header and footer in the middle of slides.

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

<!-- By using **Marp for VS Code**, you can peek -->
