import React from 'react'
import logo from './assets/marp-logo.svg'
import style from './style/hero.module.scss'

console.log(logo)

const Hero: React.FC = () => (
  <section className={style.hero}>
    <div className={style.lead}>
      <img alt="Marp" className={style.leadLogo} src={logo} />
      <header className={style.leadHeader}>
        <h1 className={style.leadName}>Marp</h1>
        <p className={style.leadDescription}>Markdown Presentation Writer</p>
      </header>
    </div>
    <div className={style.screenshot} />
  </section>
)

export default Hero
