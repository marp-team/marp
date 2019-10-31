/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Heading = ({ children, level = 1, ...props }) => {
  const Tag = `h${level}`

  return (
    <span
      css={css`
        display: block;
        filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.15));
      `}
    >
      <Tag
        css={css`
          background-color: #009bda;
          background-image: url('/assets/noise.png'),
            linear-gradient(-30deg, #02669d, #009bda);
          box-sizing: border-box;
          clip-path: polygon(1.5em 0, 100% 0, calc(100% - 1.5em) 100%, 0 100%);
          color: #fff;
          line-height: 1.2;
          margin-left: auto;
          margin-right: auto;
          max-width: calc(100% - 60px);
          padding: 0.25em 2em;
          text-align: center;
          width: max-content;
          word-wrap: break-word;
        `}
        {...props}
      >
        {children}
      </Tag>
    </span>
  )
}
