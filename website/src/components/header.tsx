import React from 'react'
import { Locations } from './layout'
import Menuitem from './menuitem'
import logo from './assets/marp-logo.svg'
import style from './style/header.module.scss'
import { combineClass } from './utils'

export interface HeaderProps {
  stuck: boolean
  location: string | Locations
  [delegated: string]: any
}

const Header: React.FC<HeaderProps> = ({ stuck, location, ...props }) => (
  <header {...combineClass(props, style.header, stuck && style.stuck)}>
    <a href="/" target="_top" className={style.logoLink}>
      <img alt="Marp" className={style.logo} src={logo} />
    </a>
    <nav className={style.nav}>
      <Menuitem href="/blog" active={location === Locations.blog}>
        Blog
      </Menuitem>
      <Menuitem href="https://github.com/marp-team/marp/" target="_blank">
        GitHub
      </Menuitem>
    </nav>
  </header>
)

export default Header
