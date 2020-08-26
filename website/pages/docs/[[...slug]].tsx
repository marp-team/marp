import path from 'path'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { Typography } from 'components/Typography'
import { Layout } from 'components/docs/Layout'
import { parse, renderToReact } from 'utils/markdown'

const defaultSlug = ['concepts', 'introduction']

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    '/docs',
    ...require
      .context('docs', true, /\.md$/)
      .keys()
      .map((id) => path.join('/docs/', id).slice(0, -3)),
  ],
  fallback: false,
})

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = ([] as string[]).concat(params?.slug ?? defaultSlug)
  const { default: md } = await import(`docs/${path.join(...slug)}.md`)
  const { data, mdast } = await parse(md)

  return { props: { data, mdast, slug } }
}

const Docs = ({
  mdast,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout breadcrumbs={slug}>
    <Typography>{renderToReact(mdast)}</Typography>
  </Layout>
)

export default Docs
