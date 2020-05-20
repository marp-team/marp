/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { contentStyle } from '../layout.jsx'

const FeatureSections = (props) => (
  <section {...props}>
    <section>
      <figure>
        <img
          src="https://icongr.am/octicons/markdown.svg?size=50&amp;color=444455"
          alt="Based on CommonMark"
        />
      </figure>
      <h2>
        Based on <mark>CommonMark</mark>
      </h2>
      <p>
        If you know how to write document with Markdown, you already know how to
        write Marp slide deck too. Our format is based on{' '}
        <a
          href="https://commonmark.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CommonMark
        </a>
        , the consistent spec of Markdown. The only important difference is{' '}
        <a
          href="https://marpit.marp.app/markdown"
          rel="noopener noreferrer"
          target="_blank"
        >
          a ruler <code>---</code> for splitting pages.
        </a>
      </p>
    </section>
    <section>
      <figure>
        <img
          src="https://icongr.am/octicons/gist.svg?size=50&amp;color=444455"
          alt="Directives and extended syntax"
        />
      </figure>
      <h2>
        <mark>Directives</mark> and <mark>extended syntax</mark>
      </h2>
      <p>
        Nevertheless, you may think the simple text content is lacking to
        emphasize your voice. We are supporting to create beautiful slide
        through{' '}
        <a
          href="https://marpit.marp.app/directives"
          rel="noopener noreferrer"
          target="_blank"
        >
          directives
        </a>{' '}
        and extended syntax (
        <a
          href="https://marpit.marp.app/image-syntax"
          rel="noopener noreferrer"
          target="_blank"
        >
          Image syntax
        </a>
        ,{' '}
        <a
          href="https://github.com/marp-team/marp-core#math-typesetting"
          rel="noopener"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          math typesetting
        </a>
        ,{' '}
        <a
          href="https://github.com/marp-team/marp-core#auto-scaling-features"
          rel="noopener"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          auto-scaling
        </a>
        , etc...).
      </p>
    </section>
    <section>
      <figure>
        <img
          src="https://icongr.am/octicons/paintcan.svg?size=50&amp;color=444455"
          alt="Built-in themes and CSS theming"
        />
      </figure>
      <h2>
        <mark>Built-in themes</mark> and <mark>CSS theming</mark>
      </h2>
      <p>
        <a
          href="https://github.com/marp-team/marp-core/"
          rel="noopener"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          Our core engine
        </a>{' '}
        has{' '}
        <a
          href="https://github.com/marp-team/marp-core/tree/master/themes"
          rel="noopener"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          3 built-in themes called <code>default</code>, <code>gaia</code>, and{' '}
          <code>uncover</code>
        </a>
        , to tell your story beautifully. If you are feeling unsatisfied to
        design, Marp can{' '}
        <a
          href="https://marpit.marp.app/theme-css?id=tweak-style-through-markdown"
          rel="noopener noreferrer"
          target="_blank"
        >
          tweak style through Markdown
        </a>
        , or{' '}
        <a
          href="https://marpit.marp.app/theme-css"
          rel="noopener noreferrer"
          target="_blank"
        >
          create your own theme with plain CSS
        </a>
        .
      </p>
    </section>
    <section>
      <figure>
        <img
          src="https://icongr.am/octicons/file.svg?size=50&amp;color=444455"
          alt="Export to HTML, PDF, and PowerPoint"
        />
      </figure>
      <h2>
        Export to <mark>HTML, PDF, and PowerPoint</mark>
      </h2>
      <p>
        Have you finished writing? Let&apos;s share the deck with a favorite
        way! We can convert Markdown into HTML, what is more, PDF and PowerPoint
        document directly! (Powered by{' '}
        <a
          href="https://www.google.com/chrome/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google Chrome
        </a>{' '}
        /{' '}
        <a
          href="https://www.chromium.org/Home"
          rel="noopener noreferrer"
          target="_blank"
        >
          Chromium
        </a>
        )
      </p>
    </section>
    <section>
      <figure>
        <img
          src="https://icongr.am/octicons/tools.svg?size=50&amp;color=444455"
          alt="Marp family: The official toolset"
          style={{ transform: 'scale(0.8)' }}
        />
      </figure>
      <h2>
        <mark>Marp family</mark>: The official toolset
      </h2>
      <p>
        Marp family has the rich toolset to assist your work.{' '}
        <a
          href="https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode"
          rel="noopener noreferrer"
          target="_blank"
        >
          <b>Marp for VS Code</b>
        </a>{' '}
        extension can preview editting Markdown and custom theme immediately.{' '}
        <a
          href="https://github.com/marp-team/marp-cli/"
          rel="noopener"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          <b>Marp CLI</b>
        </a>{' '}
        allows to convert Markdown through CLI interface.{' '}
        <a
          href="https://web.marp.app/"
          rel="noopener"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          Marp Web <i>(Tech demo)</i>
        </a>{' '}
        can render your deck in online.{' '}
        <a
          href="https://github.com/marp-team/marp/"
          rel="noopener"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          ...and more!
        </a>
      </p>
    </section>
    <section>
      <figure>
        <img
          src="https://icongr.am/octicons/plug.svg?size=50&amp;color=444455"
          alt="Pluggable architecture"
        />
      </figure>
      <h2>
        <mark>Pluggable</mark> architecture
      </h2>
      <p>
        As a matter of fact,{' '}
        <em>Marp is essentially just a converter for Markdown.</em> Marp
        ecosystem is built on{' '}
        <a
          href="https://marpit.marp.app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <b>Marpit framework</b>
        </a>
        , the skinny framework for creating HTML + CSS slide deck. It has a
        pluggable architecture and developer can{' '}
        <a
          href="https://marpit.marp.app/usage?id=extend-marpit-by-plugins"
          rel="noopener noreferrer"
          target="_blank"
        >
          extend features via plugin
        </a>
        .
      </p>
    </section>
    <section>
      <figure>
        <img
          src="https://icongr.am/octicons/heart.svg?size=50&amp;color=444455"
          alt="Fully open source"
        />
      </figure>
      <h2>
        Fully <mark>open-source</mark>
      </h2>
      <p>
        We are loving open source! All tools and related libraries by{' '}
        <a
          href="https://github.com/marp-team"
          rel="noopener"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          Marp team
        </a>{' '}
        are MIT license.
      </p>
    </section>
  </section>
)

export const Features = () => {
  const { length } = FeatureSections().props.children

  return (
    <div
      css={css`
        position: relative;

        &:before {
          position: absolute;
          display: block;
          content: '';
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(
            -8deg,
            rgba(120, 197, 233, 0),
            rgba(120, 197, 233, 0) 50%,
            rgba(120, 197, 233, 0.5)
          );
          z-index: 0;
          clip-path: polygon(0 15vw, 100% 0, 100% 100%, 0 100%);
        }
      `}
    >
      <FeatureSections
        css={[
          contentStyle,
          css`
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-rows: repeat(${length + 1}, auto);
            grid-template-columns: 1fr;
            max-width: 1200px;

            section {
              background: #fff;
              box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
              box-sizing: border-box;
              font-size: 85%;
              margin: 10px;
              padding: 25px;
              white-space: break-word;
              grid-column: 1;

              figure {
                margin: 0;
                height: 50px;
                text-align: center;

                img {
                  width: 50px;
                  height: 50px;
                }
              }

              h2 {
                text-align: center;
              }

              p {
                font-size: 14px;
                font-size: calc(14px + 0.02vw);
                margin-bottom: 0;
              }
            }

            @media (min-width: 768px) {
              grid-template-columns: 1fr 1fr;

              section {
                margin: 20px;

                &:nth-of-type(odd) {
                  grid-column: 1;
                }

                &:nth-of-type(even) {
                  grid-column: 2;
                }

                ${[...Array(length)].map(
                  (_, i) => css`
                    &:nth-of-type(${i + 1}) {
                      grid-row: ${i + 1} / span 2;
                    }
                  `
                )}
              }
            }
          `,
        ]}
      />
    </div>
  )
}
