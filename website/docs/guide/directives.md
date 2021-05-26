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

**YAML front matter** is a syntax often used for keeping metadata of Markdown in a lot of tools. Marp has also supported front matter as the container to define directives. It must be the first thing of Markdown, and between the dash rulers.

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

| Name             | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `theme`          | Set a theme name for the slide deck                    |
| `style`          | Specify CSS for tweaking theme                         |
| `headingDivider` | Specify heading divider option                         |
| `size`           | Choose the slide size preset provided by theme         |
| `title`          | Set a title of the slide deck (for HTML export)        |
| `description`    | Set a description of the slide deck (for HTML export)  |
| `url`            | Set canonical URL for the slide deck (for HTML export) |
| `image`          | Set Open Graph image URL (for HTML export)             |
| `marp`           | Set whether or not enable Marp feature in VS Code      |

Marp will recognize only the last defined value if you set the value for a same global directive many times in multiple HTML comments.

### Local directives

**Local directives** are settings for each slide pages.

| Name                 | Description                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `paginate`           | Show page number on the slide if set `true`                                                                                               |
| `header`             | Specify the content of slide header                                                                                                       |
| `footer`             | Specify the content of slide footer                                                                                                       |
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

## Reference

## Editor integration

By using **Marp for VS Code**, you can peek
