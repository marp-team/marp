import type { Literal } from 'unist'
import { visit } from 'unist-util-visit'
import { RenderedMarp, generateRenderedMarp } from 'components/Marp'

export const marpCodeBlock = () => async (tree) => {
  const marpNodes = new Set<Literal<string> & { marp?: RenderedMarp }>()

  visit(tree, 'code', (node) => {
    const lang = node.lang as string
    const langSub = lang.split(':').pop() as string

    if (langSub === 'marp') marpNodes.add(node)
  })

  await Promise.all(
    [...marpNodes].map((node) =>
      (async () => {
        node.marp = await generateRenderedMarp(node.value)
      })()
    )
  )
}
