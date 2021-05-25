import { whitespace } from 'hast-util-whitespace'
import { visit } from 'unist-util-visit'

// Based on remark-unwrap-images
// https://github.com/remarkjs/remark-unwrap-images/blob/main/index.js
const applicable = (node, inLink = false): string | false | null => {
  const { children } = node
  const { length } = children

  let image: string | false | null = null
  let index = -1

  while (++index < length) {
    const child = children[index]

    if (whitespace(child)) {
      // No ops
    } else if (child.type === 'image' && typeof child.title === 'string') {
      image = child.title.trim()
      child.title = image || null
    } else if (
      !inLink &&
      (child.type === 'link' || child.type === 'linkReference')
    ) {
      const linkResult = applicable(child, true)

      if (linkResult === false) return false
      if (typeof linkResult === 'string') image = linkResult
    } else {
      return false
    }
  }

  return image
}

// Transform wrapping paragraph for images with title to <figure>.
export const imageParagraphToFigure = () => (tree) => {
  visit(tree, 'paragraph', (node) => {
    const figureCaption = applicable(node)

    if (typeof figureCaption === 'string') {
      node.data = node.data ?? {}
      node.data.hName = 'figure'

      if (figureCaption.trim()) {
        ;(node.children as any[]).push({
          type: 'strong',
          data: { hName: 'figcaption' },
          children: [{ type: 'text', value: figureCaption }],
        })
      }
    }
  })
}
