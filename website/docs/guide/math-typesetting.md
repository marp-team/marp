# Math typesetting

[Many Markdown tools support math rendering](https://github.com/cben/mathdown/wiki/math-in-markdown). We have [Pandoc's Markdown style](https://pandoc.org/MANUAL.html#math) math typesetting support. Marp renders math using [KaTeX] (or, alternatively, [MathJax]).

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

## [KaTeX]

By default, Marp uses **[KaTeX]**, the fastest math typesetting library, to render math typesetting. See [Supported Functions in KaTeX documentation](https://katex.org/docs/supported.html) for details.

### VS Code integration

[VS Code 1.58 and later version can preview KaTeX math formula in a regular Markdown by default.](https://code.visualstudio.com/updates/v1_58#_math-formula-rendering-in-the-markdown-preview) There is high compatibility with Marp's KaTeX, but there may be slight differences in rendering due to different versions of KaTeX.

You can use [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) extension together with Marp for auto completion.

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

## [MathJax]

Another way to render math typesetting is using **[MathJax]**, which has more stable rendering and more support for LaTeX functions and syntax. A Marp document that uses MathJax will usually render slower than a document that uses KaTeX for math typestting.

### Features

- Improved compatibility with TeX. MathJax allows the use of some functions that are not supported in KaTeX (e.g. [yhatt/marp#181](https://github.com/yhatt/marp/issues/181)).
- No network is required for rendering. KaTeX rendering requires Web fonts, so it may fail to render when the network is offline/unstable. MathJax renderer uses pre-rendered SVG instead. <!-- Marp document is also using MathJax for another reason: A definition of Web fonts within shadow DOM will not work in Chrome. -->
- Stable auto-scaling. A MathJax math block does not require opt-in by theme to enable auto-scaling, and there is similar rendering across browser (KaTeX auto-scaling has some known bugs: [marp-team/marp-core#159](https://github.com/marp-team/marp-core/issues/159), [marp-team/marp-core#236](https://github.com/marp-team/marp-core/issues/236)).

KaTeX has faster rendering than MathJax and is well suited for Marp's live preview, but the performance of MathJax v3 may not be a big problem in most cases. ([Performance comparison](https://www.intmath.com/cg5/katex-mathjax-comparison.php): there is an interesting opinion in [here](https://groups.google.com/g/mathjax-users/c/aboJLMb50uQ/m/Y77FexF_AwAJ))

> We may make MathJax the default renderer of math typesetting in the future. When that time comes, we will try to minimize the impact of the change in existing Marp slides. Until then, you can choose the renderer according to your own needs.

### Enable MathJax

#### Marp CLI

Set up a custom config file like following:

```javascript
// marp.config.js
module.exports = {
  options: {
    math: 'mathjax',
  },
}
```

```bash
marp -c marp.config.js marp-mathjax.md
```

#### Marp for VS Code

Change **"Markdown &gt; Marp: Math Typesetting"** (`markdown.marp.mathTypesetting`) option in the extension setting to `mathjax`.
