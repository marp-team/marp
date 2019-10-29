/** @jsx jsx */
import { Marp as MarpCore } from '@marp-team/marp-core'
import { css, jsx } from '@emotion/core'
import { resolvePath } from '../layout.jsx'

const reset = css`
  all: initial;
  display: inline;
  display: contents;

  svg {
    pointer-events: none;
    user-select: none;
    vertical-align: bottom;
  }
`

const container = css`
  display: inline-block;
`

export const Marp = props => {
  const marp = new MarpCore({
    container: null,
    script: false,
    printable: false,
  })

  marp.markdown.normalizeLink = url => resolvePath(url)

  const rendered = marp.render(props.markdown, { htmlAsArray: true })

  return (
    <div css={reset}>
      <div
        css={[
          container,
          css([rendered.css.replace(/\/\*[\s\S]*?\*\//g, '')]),
          props.style,
        ]}
        dangerouslySetInnerHTML={{
          __html: rendered.html[props.page ? props.page - 1 : 0],
        }}
      />
    </div>
  )
}
