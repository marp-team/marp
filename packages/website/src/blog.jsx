/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Layout, contentStyle, generateTitle, resolvePath } from './layout.jsx'

const articleStyle = css`
  margin: 10px auto;

  h1 {
    margin: 0 0 0.5em 0;
  }
`
const coverStyle = css`
  display: block;
  width: 100%;
  max-width: 640px;
  margin: 1em auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`

export const blogStyle = ({ fontSize = 17 } = {}) => css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
    Apple Color Emoji, Segoe UI Emoji;
  font-size: ${fontSize}px;
  letter-spacing: 0.03em;
  line-height: 1.5;
  margin: 2em 0;
  white-space: break-word;

  p {
    margin: ${fontSize}px 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: ${fontSize * 2}px 0 ${fontSize}px 0;
    font-weight: bold;
  }

  h1 {
    background: transparent
      linear-gradient(to bottom, transparent 85%, #67b8e3 85%);
    font-size: 1.6em;
    max-width: 100%;
    width: max-content;
  }

  h2 {
    font-size: 1.3em;
  }

  h3 {
    font-size: 1.1em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.9em;
  }

  h6 {
    color: #666;
    font-size: 0.8em;
  }

  img {
    border-style: none;
    max-width: 100%;
  }

  figure {
    img {
      display: block;
      margin: 1em auto;
    }
  }

  hr {
    background: linear-gradient(-45deg, #eee 33%, #ccc 33%, #ccc 67%, #eee 67%)
      repeat center center;
    background-size: 6px 3px;
    border: none;
    height: 3px;
    margin: ${fontSize * 2}px 0;
  }

  ul,
  ol,
  pre,
  blockquote {
    margin: ${fontSize * 1.5}px 0;
  }

  ul,
  ol {
    padding: 0 0 0 1.75em;

    li {
      margin: ${fontSize * 0.25}px 0;
    }

    ul,
    ol {
      margin: ${fontSize * 0.25}px 0;
    }
  }

  code,
  pre {
    font-family: 'Source Code Pro', 'Courier New', Courier, monospace;
    background-color: #f0f0f0;
    border-radius: 2px;
    letter-spacing: 0;
  }

  code {
    font-size: 0.85em;
    margin: 0;
    padding: 0.15em 0.35em;
  }

  pre {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    font-weight: 500;
    line-height: 1.1em;
    overflow-x: auto;
    white-space: pre;
    word-wrap: normal;

    > code {
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;
      display: inline-block;
      margin: 1em;
      padding: 0;
    }
  }

  blockquote {
    border-left: 3px solid #007aad;
    color: #666;
    padding: 0 0 0 1em;

    blockquote {
      border-color: #009bda;

      blockquote {
        border-color: #78c5e9;

        blockquote {
          border-color: #ccc;
        }
      }
    }
  }
`

export const Meta = ({ author, date, github }) => (
  <div
    css={css`
      font-size: calc(11.5px + 0.25vw);
      font-weight: 500;
      color: #666;

      &,
      & > a {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
      }

      img {
        width: 2em;
        height: 2em;
        border-radius: 2em;
      }
    `}
  >
    <time dateTime={date}>Posted {date}</time>
    {author && (
      <>
        &nbsp;by&nbsp;
        {(() => {
          if (!github) return author

          return (
            <a
              href={`https://github.com/${github}`}
              rel="noopener"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              <img
                alt={author}
                src={`https://github.com/${github}.png`}
                width="40"
                height="40"
              />
              &nbsp;{author}
            </a>
          )
        })()}
      </>
    )}
  </div>
)

export const BlogLayout = ({ children, environment, meta }) => {
  const { title, description, image, slug, date, author, github } = meta
  const route = slug && `/blog/${slug}`

  return (
    <Layout
      description={description}
      environment={environment}
      image={image}
      route={route}
      title={generateTitle('Blog', title)}
    >
      <article css={[contentStyle, articleStyle]}>
        <a href={route || '#'}>
          <h1 style={{ marginTop: 0 }}>{title}</h1>
        </a>
        <Meta author={author} date={date} github={github} />
        {image && (
          <figure>
            <img
              css={coverStyle}
              src={resolvePath(image, environment)}
              alt={title}
            />
          </figure>
        )}
        <div css={blogStyle()}>{children}</div>
      </article>
    </Layout>
  )
}
