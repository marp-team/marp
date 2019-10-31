/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { defaultTitle } from '../layout.jsx'
import { Button } from '../components/button.js.jsx'

export const Hero = () => (
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
    <p>
      {/* TODO: Change this link to "Docs" page that would be hosted on marp.app in future */}
      <Button
        color="primary"
        href="#get-started"
        css={css`
          font-size: calc(18px + 0.5vw);
          padding: 0.75em 1.5em;
        `}
      >
        Get started!
      </Button>
    </p>
    <p>
      <Button
        color="primary"
        outline="true"
        href="https://github.com/marp-team/marp/"
        rel="noopener"
        css={css`
          font-size: calc(12px + 0.25vw);
        `}
      >
        Find out Marp tools at GitHub...
      </Button>
    </p>
  </section>
)
