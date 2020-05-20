/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const btnShadow = '0 3px 6px rgba(0, 0, 0, 0.25)'
const btnShadowFocus = '0 0 0 0.15em #67b8e3'

const button = css`
  appearance: none;
  border-radius: 1.5em;
  border: 0;
  box-shadow: ${btnShadow};
  box-sizing: content-box;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-weight: bold;
  outline: 0;
  overflow: hidden;
  margin: 0;
  padding: 0.6em 0.95em;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  &:hover {
    transition: color 0.15s linear, background-color 0.15s linear;

    &:active {
      transition: none;
    }
  }

  &:focus {
    box-shadow: ${btnShadowFocus}, ${btnShadow};
  }
`

const outline = css`
  padding: 0.475em 0.825em;
`

const colors = {
  default: {
    common: css`
      background-color: #fff;
      color: #444;

      &:hover {
        color: #444;
        background-color: #f8f8f8;

        &:active {
          color: #444;
          background-color: #e0e0e0;
        }
      }
    `,
    outline: css`
      border: 0.125em solid #444;
    `,
  },
  primary: {
    regular: css`
      color: #fff;
      background: #0288d1
        linear-gradient(30deg, transparent, rgba(255, 255, 255, 0.3));

      &:hover {
        color: #fff;
        background-color: #0277b7;

        &:active {
          color: #fff;
          background-color: #02669d;
        }
      }
    `,
    outline: css`
      color: #0288d1;
      border: 0.125em solid #0288d1;
      background-color: #fff;

      &:hover {
        color: #fff;
        background-color: #0288d1;

        &:active {
          color: #fff;
          background-color: #0277b7;
          border-color: #0277b7;
        }
      }
    `,
  },
}

export const Button = (props) => {
  const color = colors[props.color] || colors.default
  const style = [
    button,
    color.common,
    props.outline && outline,
    color[props.outline ? 'outline' : 'regular'],
    props.css,
  ]

  if (props.href) return <a tabIndex={0} role="button" {...props} css={style} />
  return <button {...props} css={style} />
}
