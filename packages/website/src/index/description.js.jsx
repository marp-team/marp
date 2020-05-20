/** @jsx jsx */
import { version } from '@marp-team/marp-core/package.json'
import { css, jsx } from '@emotion/core'
import { contentStyle, resolvePath } from '../layout.jsx'
import { Button } from '../components/button.js.jsx'
import { Code } from '../components/code.js.jsx'
import { Marp } from '../components/marp.js.jsx'

const example = (resolver = (v) => v) =>
  `
---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('${resolver('/assets/hero-background.jpg')}')
---

![bg left:40% 80%](https://raw.githubusercontent.com/marp-team/marp/master/marp.png)

# **Marp**

Markdown Presentation Ecosystem

https://marp.app/

---

# How to write slides

Split pages by horizontal ruler (\`---\`). It's very simple! :satisfied:

\`\`\`markdown
# Slide 1

foobar

---

# Slide 2

foobar
\`\`\`
`.trim()

const MarpExample = ({ page }) => (
  <Marp
    markdown={example()}
    page={page}
    style={css`
      border: thin solid #ddd;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
      margin: 20px;
      max-width: 360px;
      width: 80%;
    `}
  />
)

export const Description = () => (
  <section
    css={[
      contentStyle,
      css`
        font-weight: 500;
        text-align: center;

        > section {
          text-align: left;

          p {
            margin-left: auto;
            margin-right: auto;
            max-width: 640px;
          }
        }

        > figure {
          margin-top: 1em;
        }
      `,
    ]}
  >
    <h1>
      <mark>The great experience</mark> for creating slide deck
    </h1>
    <section>
      <p>
        Marp, Markdown Presentation Ecosystem, provides the great experience to
        create beautiful slide deck. You only have to focus writing your story
        in Markdown document.
      </p>
    </section>
    <figure>
      <MarpExample page={1} />
      <MarpExample page={2} />
      <figcaption>
        We&apos;re rendering slides generated in{' '}
        <a href="https://github.com/marp-team/marp-core">Marp Core</a>
      </figcaption>
    </figure>
    <p>
      <Button
        onClick="this"
        id="show-markdown-example"
        style={{ fontSize: '0.85em' }}
      >
        Show Markdown example...
      </Button>
    </p>
    <section>
      <details id="markdown-example">
        <summary style={{ display: 'none' }} />
        <Code
          language="markdown"
          style={css`
            border: thin solid #eee;
            background: #f6f6f6 url('/assets/noise.png');
            border-radius: 15px;
            box-sizing: border-box;
            font-size: 0.8em;
            margin: 0 auto;
            max-width: 800px;
            padding: 20px 10px;
            width: 85%;
          `}
        >
          {example(resolvePath)}
        </Code>
      </details>
    </section>

    <script src="/index/description.js" />
    <script
      async
      src={`https://cdn.jsdelivr.net/npm/@marp-team/marp-core@${version}/lib/browser.js`}
    />
  </section>
)
