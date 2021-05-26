import { visit } from 'unist-util-visit'
import { generateRenderedMarp } from 'components/Marp'

export const marpCodeBlock = () => (tree) => {
  visit(tree, 'code', (node) => {
    const lang = node.lang as string
    const langSub = lang.split(':').pop() as string

    if (langSub === 'marp') {
      node.marp = generateRenderedMarp(node.value as string)
    }
  })
}
