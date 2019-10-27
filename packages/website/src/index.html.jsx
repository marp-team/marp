/** @jsx jsx */
import { version } from '@marp-team/marp-core/package.json'
import { css, jsx } from '@emotion/core'
import { Layout, defaultTitle } from './layout.jsx'
import { Button } from './components/button.js.jsx'
import { Code } from './components/code.js.jsx'
import { Marp } from './components/marp.js.jsx'

const Hero = () => (
  <section
    css={css`
      background: #fcfcfc url('./assets/hero-background.jpg') no-repeat right
        center;
      background-size: cover;
      overflow: hidden;
      padding: 70px 20px;
      text-align: center;
    `}
  >
    <h1
      css={css`
        margin: 50px 0;
        font-size: calc(12px + 0.75vw);
        font-weight: bold;
        letter-spacing: 1px;

        > img {
          display: block;
          max-width: 560px;
          width: 80%;
          height: auto;
          margin: 0 auto 20px auto;
        }
      `}
    >
      <img
        src="https://raw.githubusercontent.com/marp-team/marp/master/marp.png"
        alt={defaultTitle}
      />
      Markdown Presentation Ecosystem
    </h1>
    {/* TODO: Link to document
    <p>
      <Button
        color="primary"
        href="#"
        css={css`
          font-size: calc(18px + 0.5vw);
          padding: 0.75em 1.5em;
        `}
      >
        Get started!
      </Button>
    </p>
    */}
    <p>
      <Button
        color="primary"
        outline="true"
        href="https://github.com/marp-team/marp/"
        rel="noopener noreferrer"
        css={css`
          font-size: calc(12px + 0.25vw);
        `}
      >
        Find Marp tools at repository...
      </Button>
    </p>
  </section>
)

const example = `
---
theme: gaia
_class: lead
paginate: true
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
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
    markdown={example}
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

const Description = () => (
  <section
    css={css`
      box-sizing: border-box;
      font-weight: 500;
      margin: 0 auto;
      max-width: 1200px;
      overflow: hidden;
      padding: 30px;
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
    `}
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
      <p>
        The created deck can export into HTML, PDF, and PPTX to give a
        presentation.
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
        id="show-example-markdown"
        style={{ fontSize: '0.85em' }}
      >
        Show example Markdown...
      </Button>
    </p>
    <section>
      <details id="example-markdown">
        <summary style={{ display: 'none' }} />
        <Code
          language="markdown"
          style={css`
            background: #f0f0f0;
            border-radius: 15px;
            box-sizing: border-box;
            font-size: 0.8em;
            margin: 0 auto;
            max-width: 800px;
            padding: 20px 10px;
            width: 85%;
          `}
        >
          {example}
        </Code>
      </details>
    </section>
  </section>
)

export default function Index({ environment }) {
  return (
    <Layout
      route="/"
      description="Marp, Markdown Presentation Ecosystem, provides the great experience to create beautiful slide deck."
      environment={environment}
      type="website"
    >
      <Hero />
      <Description />

      {/* TODO: Add section for features and tools */}
      <script src="/index.js" />
      <script
        src={`https://cdn.jsdelivr.net/npm/@marp-team/marp-core@${version}/lib/browser.js`}
      />
    </Layout>
  )
}
