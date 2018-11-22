import React from 'react'
import logo from './assets/marp-logo.svg'
import screenshot from './assets/screenshot-web.png'
import style from './style/hero.module.scss'

console.log(logo)

const Hero: React.FC = () => (
  <section className={`${style.hero}`}>
    <div className={`${style.heroBlock} ${style.heroBlockLead}`}>
      <h1 className={style.logoHeading}>
        <img alt="Marp" className={style.logo} src={logo} />
      </h1>
      <h2>Markdown Presentation Writer</h2>
    </div>
    <div className={`${style.heroBlock} ${style.heroBlockScreenshot}`}>
      <img alt="Screenshot" className={style.screenshot} src={screenshot} />
    </div>
  </section>
)

export default Hero
