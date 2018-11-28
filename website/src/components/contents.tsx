import React from 'react'
import style from './style/contents.module.scss'
import { combineClass } from './utils'

const Contents: React.FC = props => (
  <div {...combineClass(props, style.contents)} />
)

export default Contents
