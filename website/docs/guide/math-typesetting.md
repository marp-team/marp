# Math typesetting

[Many Markdown tools are supporting math rendering](https://github.com/cben/mathdown/wiki/math-in-markdown). We have [Pandoc's Markdown style](https://pandoc.org/MANUAL.html#math) math typesetting support. Marp can render math by using [KaTeX] (or [MathJax] as optional).

[katex]: https://katex.org/
[mathjax]: https://www.mathjax.org/

### Inline math

Surround your formula by a single dollar character `$...$`.

```markdown
Render inline math such as $ax^2+bc+c$.
```

### Math block

Surround the formula by double dollar characters `$$...$$`. Math in the block element will render with centering, and scale-down automatically when sticking out from the horizontal border of slide (only in supported themes).

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

Marp uses **[KaTeX]**, the fastest math typesetting library, to render math typesetting by default. See [Supported Functions in KaTeX documentation](https://katex.org/docs/supported.html) for details.

### VS Code integration

[VS Code 1.58 and later version can preview KaTeX math formula in a regular Markdown by default.](https://code.visualstudio.com/updates/v1_58#_math-formula-rendering-in-the-markdown-preview) There is high compatibllity with Marp's KaTeX, but might have a bit of differences in rendering due to the difference of version.

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

KaTeX option can configure in [Marp Core's constructor option](https://github.com/marp-team/marp-core#constructor-options). You should use [Marp CLI](https://github.com/marp-team/marp-cli) if required to set custom configuration in Marp conversion.

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

[See the detail of KaTeX option in the documentation.](https://katex.org/docs/options.html)

### mhchem extension

[mhchem](https://mhchem.github.io/MathJax-mhchem/) is an extension for writing chemical equations. To enable mhchem in Marp, you should use Marp CLI configuration file and follow [a guide of KaTeX for Node.js](https://katex.org/docs/node.html#using-mhchem-extension).

```javascript
// marp.config.js
const katex = require('katex')
require('katex/dist/contrib/mhchem.js') // modify katex module
```

```bash
marp -c marp.config.js marp-mhchem.md
```

A common mistake is [using client-side `<script>` to load the extension](https://github.com/KaTeX/KaTeX/tree/master/contrib/mhchem#usage). _It is no meanings because Marp's rendering will complete within Node.js, not browser._ See also: [marp-team/marp#99](https://github.com/marp-team/marp/discussions/99)

## [MathJax]

We have another renderer option **[MathJax]**, to get more stable rendering and more functions support that are compatible with TeX.

### Features

- Improved compatibility with TeX. MathJax is covering some functions that have not supported in KaTeX (e.g. [yhatt/marp#181](https://github.com/yhatt/marp/issues/181)).
- No network required when rendering. KaTeX rendering requires Web fonts so may fail to render when network is offline/unstable. MathJax renderer uses pre-rendered SVG instead. <!-- Marp document is also using MathJax by another reason: A definition of Web fonts within shadow DOM will not work in Chrome. -->
- Stable auto-scaling. MathJax math block does not require opt-in by theme to enable auto scaling, and there is compatible rendering in cross browser (KaTeX auto scaling has some known bugs: [marp-team/marp-core#159](https://github.com/marp-team/marp-core/issues/159), [marp-team/marp-core#236](https://github.com/marp-team/marp-core/issues/236)).

KaTeX has faster rendering than MathJax and well suited for Marp's live preview, but the performance of MathJax v3 may not become a big problem in most cases. ([Performance comparison](https://www.intmath.com/cg5/katex-mathjax-comparison.php): there is an interseting opinion in [here](https://groups.google.com/g/mathjax-users/c/aboJLMb50uQ/m/Y77FexF_AwAJ))

> We might make MathJax as a default renderer of math in future. When that time will come, we are going to make effort with keeping minimize the impact of change in existing slides. You can try to switch the renderer according to your needs until then.

### Enable MathJax

Set [`math` global directive](/docs/guide/directives#global-directives) as `mathjax`.

```markdown
---
math: mathjax
---

Render inline math such as $ax^2+bc+c$.
```
