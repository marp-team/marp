import RemarkReact from 'remark-react'
import { sanitize } from './sanitize'
import { Anchor } from 'components/markdown/Anchor'
import * as Heading from 'components/markdown/Heading'
import { Pre, toHastCodeHandler } from 'components/markdown/Pre'

export const { Compiler: renderer } = new RemarkReact({
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
