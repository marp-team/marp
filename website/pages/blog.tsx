import { basename } from 'path'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { Typography } from 'components/Typography'
import { formatDate, formatDateShort } from 'utils/date'
import { parse, parseMatter, renderToReact } from 'utils/markdown'

const toJSON = (obj: any) => JSON.parse(JSON.stringify(obj))

export const getStaticProps = async () => {
  const ctx = require.context('blog', false, /\.md$/)
  const mdMetas = await Promise.all(
    ctx.keys().map((id) => {
      const { default: md } = ctx(id)
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
                <img
                  className="inline w-8 h-8"
                  src="https://icongr.am/octicons/arrow-right.svg?color=4a5568"
                  alt="→"
                  width={32}
                  height={32}
                />
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
            @apply shadow-outline bg-white outline-none duration-0;
          }
          .article-container-link:hover + * .read-more {
            @apply text-marp-brand;
          }
        }

        .article-container-link:focus {
          @apply shadow-outline bg-white outline-none duration-0;
        }

        .read-more {
          @apply mt-6 text-right uppercase font-bold flex justify-end items-center transition-colors duration-300;
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
