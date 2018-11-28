import { Link } from 'gatsby'
import React from 'react'
import style from './style/button.module.scss'
import { combineClass } from './utils'

enum ButtonColor {
  default = 'default',
  primary = 'primary',
}

export interface ButtonProps {
  color?: ButtonColor | keyof typeof ButtonColor
  href?: string // Link to external resource
  outline?: boolean
  to?: string // Link to internal page
  [delegatedProp: string]: any
}

const Button: React.FC<ButtonProps> = props => {
  const { href, outline, to } = props
  const colorStyle = style[`color-${props.color || ButtonColor.default}`]
  const element = to ? Link : href ? 'a' : 'span'

  return React.createElement(element, {
    ...combineClass(props, style.button, outline && style.outline, colorStyle),
    tabIndex: 0,
    role: 'button', // Use <span> instead of <button> to handle focus ring correctly
    color: undefined,
    outline: undefined,
  })
}

export default Button
