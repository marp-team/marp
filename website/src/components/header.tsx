import React from 'react'
import Button from './button'
import Menuitem from './menuitem'
import logo from './assets/marp-logo.svg'
import style from './style/header.module.scss'

const Header: React.FC = () => (
  <header className={style.header}>
    <img alt="Marp" className={style.logo} src={logo} />
    <nav className={style.nav}>
      <Menuitem href="#">Features</Menuitem>
      <Menuitem href="#">Blog</Menuitem>
      <Menuitem href="https://github.com/marp-team/marp/" target="_blank">
        GitHub
      </Menuitem>
    </nav>
  </header>
)

export default Header
