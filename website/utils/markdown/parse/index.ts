import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import { unified, Processor } from 'unified'
import { removePosition } from 'unist-util-remove-position'
import { imageParagraphToFigure } from './image-paragraph-to-figure'
import { marpCodeBlock } from './marp-code-block'

let parser: Processor | undefined

export const parse = async (md: string) => {
  parser =
    parser ||
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkSlug)
      .use(imageParagraphToFigure)
      .use([marpCodeBlock])

  return removePosition(await parser.run(parser.parse(md)), true)
}
