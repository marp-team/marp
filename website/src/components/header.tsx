import React from 'react'
import Button from './button'
import Menuitem from './menuitem'
import logo from './assets/marp-logo.svg'
import style from './style/header.module.scss'

const Header: React.FC = () => (
  <nav className={style.header}>
    <img alt="Marp" className={style.logo} src={logo} />
    <Button color="primary">Try Marp Web</Button>
    <Button outline>Get Desktop App</Button>
    <Menuitem href="#">Features</Menuitem>
    <Menuitem href="#">Docs</Menuitem>
    <Menuitem href="#">Blog</Menuitem>
  </nav>
)

export default Header
