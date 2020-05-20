/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Heading } from './components/heading.js.jsx'
import { Meta, blogStyle } from './blog.jsx'
import { Layout, contentStyle, generateTitle } from './layout.jsx'

export default function Blog({ environment, pages }) {
  const articles = pages
    .filter((p) => p.path.startsWith('/blog/') && p.meta.title && p.meta.date)
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

  return (
    <Layout
      environment={environment}
      route="/blog"
      title={generateTitle('Blog')}
    >
      <section css={contentStyle}>
        <Heading
          css={css`
            text-transform: uppercase;
            margin-top: 0;
          `}
        >
          Blog
        </Heading>
        {articles.map((article) => (
          <section
            key={article.path}
            css={css`
              margin: 1em 0;
              padding: 25px;
              position: relative;
            `}
          >
            <a
              href={article.path}
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                text-indent: 200%;
                white-space: nowrap;
                pointer-events: auto;
                z-index: 1;
                transition: background-color 0.2s linear, box-shadow 0.2s linear;

                &:hover {
                  transition: background-color 0.2s linear,
                    box-shadow 0.2s linear;
                  background: white;
                  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

                  &:active {
                    transition: box-shadow 0.07s linear;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                  }
                }
              `}
            >
              {article.meta.title}
            </a>
            <div
              css={css`
                position: relative;
                pointer-events: none;
                z-index: 2;
                h2 {
                  font-size: 1.75em;
                  font-size: calc(1.25em + 0.4vw);
                  margin: 0 0 0.5em 0;
                }
              `}
            >
              <a href={article.path} tabIndex={-1}>
                <h2>{article.meta.title}</h2>
              </a>
              <Meta
                author={article.meta.author}
                date={article.meta.date}
                github={article.meta.github}
              />
              {article.meta.description && (
                <div css={blogStyle()} style={{ margin: '1em 0 0 0' }}>
                  <p style={{ margin: 0 }}>{article.meta.description}</p>
                </div>
              )}
            </div>
          </section>
        ))}
      </section>
    </Layout>
  )
}
