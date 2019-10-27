/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import highlightjs from 'highlight.js'

export const Code = ({ children, language, style }) => {
  const colored = highlightjs.getLanguage(language)
    ? highlightjs.highlight(language, children, true)
    : highlightjs.highlightAuto(children)

  const lines = colored.value.split('\n')
  const codeStyle = css`
    --line-number-width: 3.5em;

    cursor: text;
    font-family: 'Source Code Pro', 'Courier New', Courier, monospace;
    font-weight: 500;
    letter-spacing: 0;
    word-wrap: break-word;

    > ol {
      box-sizing: border-box;
      list-style: none;
      margin: 0;
      padding: 0 0 0 var(--line-number-width);
    }

    .code-line {
      counter-increment: code;

      &::before {
        pointer-events: none;
        display: inline-block;
        text-align: right;
        content: counter(code);
        margin-left: calc(var(--line-number-width) * -1);
        width: var(--line-number-width);
        box-sizing: border-box;
        padding-right: calc(var(--line-number-width) * 0.3);
        color: rgba(0, 0, 0, 0.5);
        font-size: 80%;
      }
    }
  `

  return (
    <div css={[codeStyle, style]}>
      <ol>
        {lines.map((line, i) => (
          <li className="code-line" key={i}>
            {line === '' ? (
              <br />
            ) : (
              <span dangerouslySetInnerHTML={{ __html: line }} />
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
