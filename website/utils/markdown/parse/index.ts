import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import unified from 'unified'
import { removePosition } from 'unist-util-remove-position'
import { imageParagraphToFigure } from './image-paragrpah-to-figure'
import { marpCodeBlock } from './marp-code-block'

let parser: unified.Processor | undefined

export const parse = async (md: string) => {
  parser =
    parser ||
    unified()
      .use(remarkParse)
      .use(remarkSlug)
      .use(imageParagraphToFigure)
      .use(marpCodeBlock)

  return removePosition(await parser.run(parser.parse(md)), true)
}
