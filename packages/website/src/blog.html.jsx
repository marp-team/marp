/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Layout, contentStyle, generateTitle } from './layout.jsx'
import { Heading } from './components/heading.js.jsx'

export default function Blog({ pages }) {
  const articles = pages
    .filter(p => p.path.startsWith('/blog/') && p.meta.title && p.meta.date)
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

  return (
    <Layout route="/blog" title={generateTitle('Blog')}>
      <section css={contentStyle}>
        <Heading style={{ marginTop: 0 }}>Blog</Heading>
        {articles.map(article => (
          <a
            key={article.path}
            href={article.path}
            css={css`
              border-radius: 10px;
              color: currentColor;
              display: block;
              margin: 1em 0;
              padding: 20px;
              transition: background-color 0.2s linear, box-shadow 0.2s linear !important;

              &:hover {
                background-color: #fff;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
              }

              > * {
                pointer-events: none;
              }
            `}
          >
            <h2>{article.meta.title}</h2>
          </a>
        ))}
      </section>
    </Layout>
  )
}
