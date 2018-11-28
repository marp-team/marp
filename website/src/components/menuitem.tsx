import React from 'react'
import Button, { ButtonProps } from './button'
import style from './style/menuitem.module.scss'
import { combineClass } from './utils'

export interface MenuitemProps extends ButtonProps {
  active?: boolean
  href: string
}

const Menuitem: React.FC<MenuitemProps> = props => {
  return (
    <Button
      {...combineClass({ ...props, active: undefined }, style.menuitem)}
      outline={false}
      data-active={`${!!props.active}`}
    >
      <span className={style.menuitemContainer}>{props.children}</span>
    </Button>
  )
}

export default Menuitem
