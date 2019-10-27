/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Heading = ({ children, ...props }) => (
  <h1
    css={css`
      background: #009bda;
      color: #fff;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      max-width: 80%;
      width: 280px;
      transform: skewX(-45deg);
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
  </h1>
)
