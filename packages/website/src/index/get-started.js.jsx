/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Button } from '../components/button.js.jsx'
import { Heading } from '../components/heading.js.jsx'

export const GetStarted = () => (
  <section
    id="get-started"
    css={css`
      position: relative;

      /* Fix position for anchor link */
      padding-top: 110px;
      margin: -110px 0 0 0;

      &::before {
        background: #0288d1;
        bottom: 0;
        clip-path: polygon(0 0, 100% 8vw, 100% 100%, 0 100%);
        content: '';
        display: block;
        left: 0;
        overflow: visible;
        position: absolute;
        right: 0;
        top: calc(-12vw + 110px);
        z-index: 0;
      }

      &::after {
        clear: both;
        content: '';
        display: block;
        height: 1px;
        overflow: hidden;
      }

      > p,
      > section {
        margin: 40px;
        max-width: 1000px;
        position: relative;
        z-index: 1;
      }

      > p {
        color: #fff;
        margin: 30px auto;
        padding: 0 40px;
        text-align: center;
      }

      > section {
        background: #fff;
        border-radius: 1em;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: calc(16px + 0.1vw);
        padding: 40px 30px;
        white-space: break-word;
        width: auto;

        @media (min-width: 1060px) {
          margin: 40px auto;
        }

        figure {
          margin: 0 0 20px 0;
          max-width: 75%;
          min-width: 180px;
          box-sizing: border-box;
        }

        @media (min-width: 768px) {
          flex-direction: row;

          figure {
            max-width: 33%;
            order: 2;
            margin: 0 0 0 20px;
          }
        }

        header {
          margin: 0 0 1em 0;

          h3 {
            font-size: 1.5em;
            margin: 0;
          }

          p {
            color: #888;
            font-size: 75%;
            margin: 0.5em 0;
          }
        }

        p {
          &:last-child {
            margin-bottom: 0;
          }
        }

        [role='button'] {
          margin-top: 8px;
          font-size: 83%;
        }
      }
    `}
  >
    <Heading
      level={2}
      css={css`
        background: #02669d;
        color: #fff;
        margin-top: 10px;
        margin-bottom: 10px;
      `}
    >
      Tools and integrations
    </Heading>
    <section>
      <figure>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/marp-for-vs-code.png"
            alt="Marp for VS Code"
            loading="lazy"
          />
        </a>
      </figure>
      <div>
        <header>
          <h3>
            <mark>Marp for VS Code</mark>{' '}
            <img
              src="https://img.shields.io/visual-studio-marketplace/v/marp-team.marp-vscode.svg?style=flat-square&amp;label=&amp;colorB=67b8e3"
              alt="Marp for VS Code"
            />
          </h3>
          <p>Create slide deck written in Marp Markdown on VS Code</p>
        </header>
        <p>
          Enhance VS Code&apos;s Markdown preview pane to support writing your
          beautiful presentation. You can see the slide deck output as soon as
          editting Markdown.
        </p>
        <p>
          <Button
            href="https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            VS Marketplace
          </Button>{' '}
          <Button
            href="https://github.com/marp-team/marp-vscode"
            rel="noopener"
            target="_blank"
            outline="true"
          >
            GitHub
          </Button>
        </p>
      </div>
    </section>
    <section>
      <figure>
        <a
          href="https://github.com/marp-team/marp-cli"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          rel="noopener"
        >
          <img src="/assets/marp-cli.png" alt="Marp CLI" loading="lazy" />
        </a>
      </figure>
      <div>
        <header>
          <h3>
            <mark>Marp CLI</mark>{' '}
            <img
              src="https://img.shields.io/npm/v/@marp-team/marp-cli.svg?style=flat-square&amp;label=&amp;colorB=67b8e3"
              alt="Marp CLI"
            />
          </h3>
          <p>A CLI interface for Marp and Marpit based converters</p>
        </header>
        <p>
          CLI is the swiss army knife for Marp ecosystem. Convert your Markdown
          into various formats, watch changes, launch server for on-demand
          conversion, and customize engine.
        </p>
        <p>
          <Button
            href="https://www.npmjs.com/package/@marp-team/marp-cli"
            rel="noopener noreferrer"
            target="_blank"
            color="primary"
            outline="true"
          >
            npm
          </Button>{' '}
          <Button
            href="https://github.com/marp-team/marp-cli"
            rel="noopener"
            target="_blank"
            outline="true"
          >
            GitHub
          </Button>
        </p>
      </div>
    </section>
    <Heading
      level={3}
      css={css`
        background: #02669d;
        color: #fff;
      `}
    >
      For developers
    </Heading>
    <section>
      <figure
        css={css`
          min-width: 100px !important;
          max-width: 100px !important;
        `}
      >
        <a
          href="https://github.com/marp-team/marp-core"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          rel="noopener"
        >
          <img src="/assets/marp-logo.svg" alt="Marp Core" loading="lazy" />
        </a>
      </figure>
      <div>
        <header>
          <h3>
            <mark>Marp Core</mark>{' '}
            <img
              src="https://img.shields.io/npm/v/@marp-team/marp-core.svg?style=flat-square&amp;label=&amp;colorB=67b8e3"
              alt="Marp Core"
            />
          </h3>
          <p>The core of Marp converter</p>
        </header>
        <p>
          All official Marp tools provided by us are using this core as the
          engine. It is based on Marpit framework, and includes some extended
          features to help creating beautiful slide deck.
        </p>
        <p>
          <Button
            href="https://www.npmjs.com/package/@marp-team/marp-core"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            outline="true"
          >
            npm
          </Button>{' '}
          <Button
            href="https://github.com/marp-team/marp-core"
            rel="noopener"
            target="_blank"
            outline="true"
          >
            GitHub
          </Button>
        </p>
      </div>
    </section>
    <section>
      <figure
        css={css`
          min-width: 100px !important;
          max-width: 100px !important;
        `}
      >
        <a
          href="https://marpit.marp.app/"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          rel="noopener"
        >
          <img src="/assets/marpit.svg" alt="Marpit" loading="lazy" />
        </a>
      </figure>
      <div>
        <header>
          <h3>
            <mark>Marpit</mark> framework{' '}
            <img
              src="https://img.shields.io/npm/v/@marp-team/marpit.svg?style=flat-square&amp;label=&amp;colorB=67b8e3"
              alt="Marpit framework"
            />
          </h3>
          <p>The skinny framework for creating slide deck from Markdown</p>
        </header>
        <p>
          Marpit, independented from Marp, is the skinny framework to transform
          Markdown + CSS theme to the deck composed of HTML + CSS. It has
          designed to output only minimum assets.
        </p>
        <p>
          <Button
            href="https://marpit.marp.app/"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            Documentation
          </Button>{' '}
          <Button
            href="https://www.npmjs.com/package/@marp-team/marpit"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            outline="true"
          >
            npm
          </Button>{' '}
          <Button
            href="https://github.com/marp-team/marpit"
            rel="noopener"
            target="_blank"
            outline="true"
          >
            GitHub
          </Button>
        </p>
      </div>
    </section>
    <p>
      ...and find out all tools, integrations, examples at our GitHub entrance
      repository!
    </p>
    <p>
      <Button
        color="primary"
        outline="true"
        href="https://github.com/marp-team/marp/"
        rel="noopener"
        target="_blank"
        css={css`
          font-size: calc(12px + 0.25vw);
        `}
      >
        Go to the entrance repository...
      </Button>
    </p>
  </section>
)
