import fs from 'fs'
import { basename } from 'path'
import { ArrowRightIcon } from '@primer/octicons-react'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { Typography } from 'components/Typography'
import { formatDate, formatDateShort } from 'utils/date'
import { parse, parseMatter, renderToReact } from 'utils/markdown'
import { absoluteUrl } from 'utils/url'

const toJSON = (obj: any) => JSON.parse(JSON.stringify(obj))

export const getStaticProps = async () => {
  const ctx = require.context('blog', false, /^.[\\/][^\\/]*\.md$/)
  const mdMetas = await Promise.all(
    ctx.keys().map((id) => {
      const md = ctx(id)
      const { data, excerpt } = parseMatter(md)

      return (async () => ({
        data,
        excerpt: excerpt ? await parse(excerpt) : undefined,
        slug: basename(id, '.md'),
      }))()
    })
  )

  const articles = mdMetas.filter(({ data }) => data.date)
  articles.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())

  // Generate RSS
  const rss = `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog | Marp</title>
    <link>${absoluteUrl('/blog')}</link>
    <description>Marp, Markdown Presentation Ecosystem, provides the great experience to create beautiful slide deck. You only have to focus writing your story in Markdown document.</description>
    <language>en</language>
    <lastBuildDate>${articles[0].data.date.toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl(
      '/blog/feed.xml'
    )}" rel="self" type="application/rss+xml"/>
    ${articles
      .map((article) =>
        `
      <item>
        <guid>${absoluteUrl(`/blog/${article.slug}`)}</guid>
        <title>${article.data.title}</title>
        <link>${absoluteUrl(`/blog/${article.slug}`)}</link>
        <description>${article.data.description}</description>
        <pubDate>${article.data.date.toUTCString()}</pubDate>
      </item>
    `.trim()
      )
      .join('')}
  </channel>
</rss>
  `.trim()

  await fs.promises.writeFile('./public/blog/feed.xml', rss)

  return {
    props: {
      articles: articles.map((article) =>
        toJSON({
          data: article.data,
          excerpt: article.excerpt?.mdast,
          slug: article.slug,
        })
      ),
    },
  }
}

const Blog = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout activeItem="blog" title={['Blog']}>
    <Title>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </Title>
    <Head>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Blog | Marp"
        href={absoluteUrl(`/blog/feed.xml`).toString()}
      />
    </Head>
    <div className="container mx-auto max-w-screen-lg px-3 py-1">
      {articles.map((article) => {
        let summary: JSX.Element | string | undefined

        if (article.excerpt) {
          summary = (
            <Typography>
              {renderToReact(article.excerpt, { anchorLink: false })}
            </Typography>
          )
        } else if (article.data.description) {
          summary = article.data.description
        }

        const date = new Date(article.data.date)

        return (
          <div key={article.slug} className="article-container">
            <Link href={`/blog/${article.slug}`}>
              <a className="article-container-link">
                <h1 className="sr-only">{article.data.title}</h1>
              </a>
            </Link>
            <div className="relative pointer-events-none">
              <h1 className="text-3xl text-gradient font-bold" aria-hidden>
                {article.data.title}
              </h1>
              <p className="mt-2 text-gray-600 pb-4 border-b-2 mb-4 text-sm">
                <time dateTime={formatDateShort(date)}>{formatDate(date)}</time>
                {article.data.author && ` by ${article.data.author}`}
              </p>
              {summary && (
                <>
                  <div className="flex flex-col lg:flex-row" inert="">
                    {article.data.image && (
                      <figure className="mx-auto mb-6 lg:order-1 lg:mb-0 lg:ml-6 lg:w-full lg:max-w-sm">
                        <img
                          src={article.data.image}
                          alt={article.data.title}
                          className="bg-white border border-gray-100 shadow-md w-full max-w-sm"
                        />
                      </figure>
                    )}
                    <article className="flex-grow">{summary}</article>
                  </div>
                </>
              )}
              <p className="read-more">
                <ArrowRightIcon className="read-more-icon" />
                Read more...
              </p>
            </div>
          </div>
        )
      })}
      <style jsx>{`
        .article-container {
          @apply relative p-6 my-6;
        }
        .article-container-link {
          @apply absolute inset-0 rounded-lg transition-all duration-300;
        }

        @media not all and (hover: none) {
          .article-container-link:hover {
            @apply shadow-lg bg-white;
          }
          .article-container-link:hover:active {
            @apply ring-offset-2 ring-1 ring-white bg-white outline-none duration-0;
          }
          .article-container-link:hover + * .read-more {
            @apply text-marp-brand;
          }
        }

        .article-container-link:focus {
          @apply ring-offset-2 ring-1 ring-white bg-white outline-none duration-0;
        }

        .read-more {
          @apply mt-6 text-right uppercase font-bold flex justify-end items-center transition-colors duration-300;
        }

        .read-more :global(.read-more-icon) {
          @apply h-8 w-8;
        }

        @screen md {
          .article-container {
            @apply relative p-8;
          }
        }
      `}</style>
    </div>
  </Layout>
)

export default Blog
