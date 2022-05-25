import { createElement, FunctionComponent } from 'react'
import RemarkReact, { Options } from 'remark-react'
import { sanitize } from './sanitize'
import { MarpSlides } from 'components/Marp'
import { Anchor } from 'components/markdown/Anchor'
import * as Heading from 'components/markdown/Heading'
import { Image } from 'components/markdown/Image'
import { Pre, toHastCodeHandler } from 'components/markdown/Pre'

const remarkReactComponents: Record<string, FunctionComponent<any>> = {
  a: Anchor,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  'marp-slides': MarpSlides,
  pre: Pre,
  img: Image,
}

export const { Compiler: renderer } = new RemarkReact({
  createElement: createElement as Options['createElement'],
  remarkReactComponents,
  sanitize,
  toHast: { handlers: { code: toHastCodeHandler } },
})
