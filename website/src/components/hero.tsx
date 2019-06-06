import React from 'react'
import logo from '../../../marp.png'
import style from './style/hero.module.scss'
import Button from './button'

const Hero: React.FC = () => (
  <section className={style.hero}>
    <div className={style.lead}>
      <img alt="Marp" className={style.logo} src={logo} />
      <p className={style.description}>Markdown presentation ecosystem</p>
      <p>
        <Button
          color="primary"
          href="https://github.com/marp-team/marp/#readme"
        >
          Find Marp tools at repo...
        </Button>
      </p>
    </div>
  </section>
)

export default Hero
