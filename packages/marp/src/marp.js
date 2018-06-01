/* eslint class-methods-use-this: 0 */
import Marpit from '@marp-team/marpit'
import highlightjs from 'highlight.js'
import Default from '../themes/default.scss'
import Gaia from '../themes/gaia.scss'

export default class Marp extends Marpit {
  constructor(opts) {
    super({
      markdown: [
        'commonmark',
        {
          breaks: true,
          highlight: (...hargs) => this.highlighter(...hargs),
          linkify: true,
        },
      ],
      ...opts,
    })

    // Enable table
    this.markdown.enable(['table', 'linkify'])

    // Add themes
    this.themeSet.default = this.themeSet.add(Default)
    this.themeSet.add(Gaia)
  }

  highlighter(code, lang) {
    if (lang) {
      if (['text', 'plain'].includes(lang)) return ''
      if (highlightjs.getLanguage(lang))
        return highlightjs.highlight(lang, code, true).value
    }

    return highlightjs.highlightAuto(code).value
  }
}
