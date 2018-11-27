import React from 'react'
import logo from './assets/marp-logo.svg'
import style from './style/header.module.scss'

const Header: React.FC = () => (
  <nav className={style.header}>
    <ul>
      <li>
        <img alt="Marp" className={style.logo} src={logo} />
      </li>
      <li>
        <a href="#" className={style.button}>
          Try Marp Web
        </a>
      </li>
      <li>
        <a href="#" className={`${style.button} ${style.frame}`}>
          Get Desktop App
        </a>
      </li>
      <li>
        <a href="#" className={style.link}>
          Features
        </a>
      </li>
      <li>
        <a href="#" className={style.link}>
          News
        </a>
      </li>
      <li>
        <a
          href="https://github.com/marp-team/marp"
          target="_blank"
          className={style.link}
        >
          GitHub
        </a>
      </li>
    </ul>
  </nav>
)

export default Header
