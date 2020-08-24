import matter from 'gray-matter'
import { parse as mdParse } from './parse'
import { renderer } from './renderer'
import { AnchorLinkProvider } from 'components/markdown/Heading'

const toJSON = (value: any) => JSON.parse(JSON.stringify(value))

export const parseMatter = (md: string) =>
  matter(md, { excerpt_separator: '<!-- more -->' })

export const parse = async (markdown: string) => {
  const md = parseMatter(markdown)
  const mdast = toJSON(await mdParse(md.content))

  return { markdown, mdast, data: toJSON(md.data) }
}

export const renderToReact = (
  mdast: any,
  { anchorLink = true }: { anchorLink?: boolean } = {}
) => (
  <AnchorLinkProvider value={anchorLink}>{renderer(mdast)}</AnchorLinkProvider>
)
