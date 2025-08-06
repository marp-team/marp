# Math typesetting

[Many Markdown tools support math rendering](https://github.com/cben/mathdown/wiki/math-in-markdown). We have [Pandoc's Markdown style](https://pandoc.org/MANUAL.html#math) math typesetting support. Marp renders math using [MathJax] (or, alternatively, [KaTeX]).

[katex]: https://katex.org/
[mathjax]: https://www.mathjax.org/

### Inline math

Surround your formula with a single dollar character `$...$`.

```markdown
Render inline math such as $ax^2+bc+c$.
```

### Math block

Surround the formula with double dollar characters `$$...$$`. Math in the block element will render with centering. The math in the block element will also scale down automatically if it is sticking out from the horizontal border of the slide (only in supported themes).

<!-- prettier-ignore-start -->

```markdown
$$ I_{xx}=\int\int_Ry^2f(x,y)\cdot{}dydx $$

$$
f(x) =
  \int_{-\infty}^\infty
  \hat f(\xi)\,e^{2 \pi i \xi x}
  \,d\xi
$$
```
<!-- prettier-ignore-end -->

```markdown:marp
## Inline math

Render inline math such as $ax^2+bc+c$.

## Math block

$$ I_{xx}=\int\int_Ry^2f(x,y)\cdot{}dydx $$

$$
f(x) =
  \int_{-\infty}^\infty
  \hat f(\xi)\,e^{2 \pi i \xi x}
  \,d\xi
$$
```

> This feature is inherited from [Marp Core](https://github.com/marp-team/marp-core).

## [MathJax]

By default, Marp uses **[MathJax]** to render math typesetting.

### Declare to use MathJax

Set [`math` global directive](/docs/guide/directives#global-directives) as `mathjax`.

```markdown
---
math: mathjax
---

Render inline math such as $ax^2+bc+c$.
```

For the determined rendering of slide, we recommend always to declare math library to use in the slide. No definition of math directive may bring inconsistent rendering result depending on the version of Marp Core.

## [KaTeX]

**[KaTeX]** is an alternative library to render math typesettings in Marp, and it was former default.

By defining `math` global directive as `katex`, you can continue to render math with KaTeX.

### Enable KaTeX

Set [`math` global directive](/docs/guide/directives#global-directives) as `katex`.

```markdown
---
math: katex
---

Render inline math such as $ax^2+bc+c$.
```

### Define global macro

In KaTeX rendering, macros defined by `\def` will persist only in a local math environment. To persist defined macro for subsequent math environments in Markdown, use `\gdef` (`\global\def`) instead.

```markdown
$$
% macroA can use only in this math block.
\def\macroA{{\color{red}A}}

% macroB has defined globally so you can use it after here.
\gdef\macroB{{\color{blue}B}}

\macroA + \macroB
$$

---

$$
% macroA cannot use, but macroB can.
\macroA + \macroB
$$
```

[See the detail of supported macro functions in KaTeX documentation](https://katex.org/docs/supported.html#macros).

### Configuration

KaTeX options can be configured in [Marp Core's constructor option](https://github.com/marp-team/marp-core#constructor-options). You should use [Marp CLI](https://github.com/marp-team/marp-cli) if you need to set a custom configuration in Marp conversion.

```javascript
// marp.config.js
module.exports = {
  options: {
    math: {
      lib: 'katex',
      katexFontPath: 'https://example.com/assets/katex-fonts/'
      katexOption: {
        errorColor: '#ff0000',
        macros: {
          '\\RR': '\\mathbb{R}',
        },
      },
    },
  },
}
```

```bash
marp -c marp.config.js marp-math.md
```

[See the details of KaTeX option in the documentation.](https://katex.org/docs/options.html)

### mhchem extension

[mhchem](https://mhchem.github.io/MathJax-mhchem/) is an extension for writing chemical equations. To enable mhchem in Marp, you should use a Marp CLI configuration file and follow [a guide of KaTeX for Node.js](https://katex.org/docs/node.html#using-mhchem-extension).

```javascript
// marp.config.js
const katex = require('katex')
require('katex/dist/contrib/mhchem.js') // modify katex module
```

```bash
marp -c marp.config.js marp-mhchem.md
```

A common mistake is [using a client-side `<script>` to load the extension](https://github.com/KaTeX/KaTeX/tree/master/contrib/mhchem#usage). _This will not work because Marp's rendering will be completed within Node.js, not the browser._ See also: [marp-team/marp#99](https://github.com/marp-team/marp/discussions/99)

### Known issues for KaTeX rendering

- KaTeX rendering requires fetching Web Fonts from [jsDelivr](https://www.jsdelivr.com/) CDN. If you are in offline or the limited network by proxy, the slide may not render math.
- Safari does not shrink down the big math block rendered by KaTeX. ([marp-team/marp-core#159](https://github.com/marp-team/marp-core/issues/159))
- Rendering of `\tag{}` is incompatible with the math block. ([marp-team/marp-core#236](https://github.com/marp-team/marp-core/issues/236))
