import React from 'react'
import style from './style/button.module.scss'
import { combineClass } from './utils'

enum ButtonColor {
  default = 'default',
  primary = 'primary',
}

export interface ButtonProps {
  color?: ButtonColor | keyof typeof ButtonColor
  href?: string
  outline?: boolean
  [delegatedProp: string]: any
}

const Button: React.FC<ButtonProps> = props => {
  const { href, outline } = props
  const colorStyle = style[`color-${props.color || ButtonColor.default}`]

  return React.createElement(href ? 'a' : 'span', {
    ...combineClass(props, style.button, outline && style.outline, colorStyle),
    tabIndex: 0,
    role: 'button', // Use <span> instead of <button> to handle focus ring correctly
    color: undefined,
    outline: undefined,
  })
}

export default Button
