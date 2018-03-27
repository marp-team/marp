import Marpit from '@marp-team/marpit'
import Default from './themes/default.scss'

export default class Marp extends Marpit {
  constructor(...args) {
    super(...args)

    const defaultTheme = this.themeSet.add(Default)
    this.themeSet.default = defaultTheme
  }
}
