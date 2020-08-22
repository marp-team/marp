import { basename } from 'path'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'
import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { Typography } from 'components/Typography'
import { BlogHeader } from 'components/blog/BlogHeader'
import { parse, renderToReact } from 'utils/markdown'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: require
    .context('blog', false, /\.md$/)
    .keys()
    .map((id) => `/blog/${basename(id, '.md')}`),
  fallback: false,
})

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug as string
  const { default: md } = await import(`blog/${slug}.md`)

  return { props: { markdown: await parse(md), slug } }
}

const Blog = ({
  markdown,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout
    activeItem="blog"
    description={markdown.data.description || ''}
    image={markdown.data.image}
    noIndex={!markdown.data.date}
    title={[markdown.data.title || slug, 'Blog']}
  >
    <Title>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </Title>
    <div className="container mx-auto px-6 py-12">
      <BlogHeader
        title={markdown.data.title}
        date={markdown.data.date ? new Date(markdown.data.date) : undefined}
        author={markdown.data.author}
        github={markdown.data.github}
        slug={slug}
      />
      <article className="mt-8 mx-auto max-w-screen-lg">
        {markdown.data.image && (
          <figure className="my-12">
            <img
              src={markdown.data.image}
              alt={markdown.data.title}
              className="block bg-white mx-auto max-w-screen-md shadow-xl w-full"
            />
          </figure>
        )}
        <Typography>{renderToReact(markdown.mdast)}</Typography>
      </article>
    </div>
  </Layout>
)

export default Blog
