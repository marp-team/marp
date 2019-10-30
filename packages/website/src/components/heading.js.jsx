/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Heading = ({ children, level = 1, ...props }) => {
  const Tag = `h${level}`

  return (
    <Tag
      css={css`
        background-color: #009bda;
        background-image: url('/assets/noise.png'),
          linear-gradient(-30deg, #02669d, #009bda);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
        color: #fff;
        line-height: 1.2;
        margin-left: auto;
        margin-right: auto;
        max-width: calc(100% - 60px);
        padding: 0.25em 2.5em;
        text-align: center;
        transform: skewX(-45deg);
        width: max-content;
        word-wrap: break-word;
      `}
      {...props}
    >
      <span
        css={css`
          display: inline-block;
          transform: skewX(45deg);
        `}
      >
        {children}
      </span>
    </Tag>
  )
}
