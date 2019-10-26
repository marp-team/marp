/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Layout, defaultTitle } from './layout.js.jsx'
import { Button } from './components/button.js.jsx'
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
backgroundImage: url('./assets/hero-background.jpg')
---

![bg left:40% 80%](https://raw.githubusercontent.com/marp-team/marp/master/marp.png)

# **Marp**

Markdown Presentation Ecosystem

https://marp.app/

---

# Hello!

- :smile:
`.trim()

export default function Index() {
  return (
    <Layout>
      <Hero />
      <section
        css={css`
          overflow: hidden;
          box-sizing: border-box;
          padding: 50px 30px;
          max-width: 1200px;
          margin: 0 auto;
          font-weight: 500;
          text-align: center;
        `}
      >
        <h1>
          <mark>The great experience</mark> for creating slide deck
        </h1>
        <p>
          Marp, Markdown Presentation Ecosystem, provides the great experience
          to create beautiful slide deck.
        </p>
        <p>You only have to focus into your story in Markdown document.</p>
        <p>
          <Marp
            markdown={example}
            style={css`
              width: 80%;
              max-width: 400px;
              border: thin solid #ccc;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            `}
          />
        </p>
        <p>
          <Marp
            markdown={example}
            page={2}
            style={css`
              width: 80%;
              max-width: 400px;
              border: thin solid #ccc;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            `}
          />
        </p>
      </section>
    </Layout>
  )
}
