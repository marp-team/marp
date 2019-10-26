/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'

export const defaultTitle = 'Marp: Markdown Presentation Ecosystem'

const globalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    height: 100%;
  }

  body {
    color: #333;
    background-color: #f8f8f8;
    background-image: linear-gradient(to bottom, #f8f8f8, #fff);
    background-attachment: fixed;
    font-family: Quicksand, Avenir, Century Gothic, -apple-system,
      BlinkMacSystemFont, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    font-size: 18px;
    letter-spacing: 0.04em;
    line-height: 1.3;
    min-height: 100%;
  }

  img {
    border: 0;
  }

  a {
    color: #0288d1;
    text-decoration: none;

    &:hover {
      color: #02669d;
      transition: color 0.15s linear;

      &:active {
        color: #1b4d68;
        transition: none;
      }
    }
  }

  mark {
    color: inherit;
    background-color: transparent;
    background-image: linear-gradient(to bottom, transparent 80%, #67b8e3 80%);
  }
`

const Header = ({ active, height = 80 }) => (
  <header
    css={css`
      --header-gap: calc(5px + 1vw);

      background: #fff;
      border: 0;
      border-bottom-width: thin;
      border-color: rgba(51, 51, 51, 0.07);
      border-style: solid;
      box-shadow: 0 0 40px rgba(128, 128, 128, 0.05);
      box-sizing: border-box;
      display: flex;
      font-size: ${height * 0.22}px;
      height: ${height}px;
      left: 0;
      overflow: hidden;
      padding: 0 var(--header-gap);
      position: sticky;
      justify-content: center;
      top: 0;
      width: 100%;
      z-index: 99;

      > a {
        align-items: center;
        align-self: center;
        display: flex;
        margin: 0 var(--header-gap);
        width: ${height * 0.75}px;

        > img {
          width: ${height * 0.75}px;
          height: ${height * 0.75}px;
        }
      }

      > nav {
        > ul {
          align-items: center;
          display: flex;
          font-weight: 500;
          height: 100%;
          letter-spacing: 0.1vw;
          list-style: none;
          margin: 0;
          padding: 0;
          text-transform: uppercase;

          a {
            position: relative;
            align-items: center;
            color: currentColor;
            display: flex;
            margin: 0 var(--header-gap);
            text-decoration: none;

            &::before {
              /* Expand hit area */
              content: '';
              display: block;
              position: absolute;
              left: calc(var(--header-gap) * -1);
              right: calc(var(--header-gap) * -1);
              top: ${height * -0.5}px;
              bottom: ${height * -0.5}px;
            }

            &::after {
              content: '';
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: ${height * -0.075}px;
              transition: box-shadow 0.2s linear;
            }

            &:hover {
              &::after {
                box-shadow: inset 0 ${height * -0.05}px rgba(0, 0, 0, 0.15);
              }
            }

            &.active {
              &::after {
                transition: none;
                box-shadow: inset 0 ${height * -0.05}px #009bda;
              }
            }

            &:focus {
              outline: 0;

              &::after {
                transition: none;
                box-shadow: inset 0 ${height * -0.05}px #78c5e9;
              }
            }

            &:hover:active {
              &::after {
                transition: none;
                box-shadow: inset 0 ${height * -0.05}px #007aad;
              }
            }
          }
        }
      }
    `}
  >
    <a href="/">
      <img src="./assets/marp-logo.svg" alt={defaultTitle} />
    </a>
    <nav>
      <ul>
        <li>
          <a href="/blog" className={active === 'blog' ? 'active' : undefined}>
            Blog
          </a>
        </li>
        <li>
          <a
            href="https://github.com/marp-team/marp"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export const Layout = ({ active, children, title = defaultTitle }) => (
  <html lang="en">
    <head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap"
        rel="stylesheet"
      />
      <Global styles={globalStyle} />
    </head>
    <body
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <Header active={active} />
      <main>{children}</main>
    </body>
  </html>
)
