import matter from 'gray-matter'
import remarkParse from 'remark-parse'
import remarkReact from 'remark-react'
import remarkSlug from 'remark-slug'
import unified from 'unified'
import { imageParagraphToFigure } from './markdown/image-paragrpah-to-figure'
import { sanitize } from './markdown/sanitize'
import { Anchor } from 'components/markdown/Anchor'
import * as Heading from 'components/markdown/Heading'
import { Pre, toHastCodeHandler } from 'components/markdown/Pre'

type RenderToReactOptions = {
  anchorLink?: boolean
}

const toJSON = (value: any) => JSON.parse(JSON.stringify(value))
const remark = unified()
  .use(remarkParse, { commonmark: true })
  .use(remarkSlug)
  .use(imageParagraphToFigure)
  .use(remarkReact, {
    remarkReactComponents: {
      a: Anchor,
      h1: Heading.H1,
      h2: Heading.H2,
      h3: Heading.H3,
      h4: Heading.H4,
      h5: Heading.H5,
      h6: Heading.H6,
      pre: Pre,
    },
    sanitize,
    toHast: { commonmark: true, handlers: { code: toHastCodeHandler } },
  })

export const parseMatter = (md: string) =>
  matter(md, { excerpt_separator: '<!-- more -->' })

export const parse = async (markdown: string) => {
  const md = parseMatter(markdown)

  return {
    markdown,
    mdast: toJSON(await remark.run(remark.parse(md.content))),
    data: toJSON(md.data),
  }
}

export const renderToReact = (mdast: any, opts: RenderToReactOptions = {}) => {
  const { anchorLink = true } = opts

  return (
    <Heading.AnchorLinkProvider value={anchorLink}>
      {remark.stringify(mdast)}
    </Heading.AnchorLinkProvider>
  )
}
