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
  const parsed = await parse(md)

  return {
    props: { markdown: { data: parsed.data, mdast: parsed.mdast }, slug },
  }
}

const Blog = ({
  markdown: { data, mdast },
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout
    activeItem="blog"
    description={data.description || ''}
    image={data.image}
    noIndex={!data.date}
    title={[data.title || slug, 'Blog']}
  >
    <Title>
      <Link href="/blog">Blog</Link>
    </Title>
    <div className="container mx-auto px-6 py-12">
      <BlogHeader
        title={data.title}
        date={data.date ? new Date(data.date) : undefined}
        author={data.author}
        github={data.github}
        slug={slug}
      />
      <article className="mx-auto mt-8 max-w-screen-lg">
        {data.image && (
          <figure className="my-12">
            <img
              src={data.image}
              alt={data.title}
              className="mx-auto block w-full max-w-screen-md bg-white shadow-xl"
            />
          </figure>
        )}
        <Typography>{renderToReact(mdast)}</Typography>
      </article>
    </div>
  </Layout>
)

export default Blog
