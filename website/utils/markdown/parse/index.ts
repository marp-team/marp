import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import unified from 'unified'
import removePosition from 'unist-util-remove-position'
import { imageParagraphToFigure } from './image-paragrpah-to-figure'

let parser: unified.Processor | undefined

export const parse = async (md: string) => {
  parser =
    parser ||
    unified().use(remarkParse).use(remarkSlug).use(imageParagraphToFigure)

  return removePosition(await parser.run(parser.parse(md)), true)
}
