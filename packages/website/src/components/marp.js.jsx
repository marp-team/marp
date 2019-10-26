/** @jsx jsx */
import { Marp as MarpCore } from '@marp-team/marp-core'
import { css, jsx } from '@emotion/core'

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
    script: { source: 'cdn' },
    printable: false,
  })
  const { html, css: renderedCss } = marp.render(props.markdown, {
    htmlAsArray: true,
  })

  return (
    <div css={reset}>
      <div
        css={[
          container,
          css([renderedCss.replace(/\/\*[\s\S]*?\*\//g, '')]),
          props.style,
        ]}
        dangerouslySetInnerHTML={{
          __html: html[props.page ? props.page - 1 : 0],
        }}
      />
    </div>
  )
}
