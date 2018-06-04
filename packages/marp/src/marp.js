import Marpit from '@marp-team/marpit'
import highlightjs from 'highlight.js'
import markdownItEmoji from 'markdown-it-emoji'
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

  applyMarkdownItPlugins(md = this.markdown) {
    super.applyMarkdownItPlugins(md)

    // Emoji shorthand
    md.use(markdownItEmoji, { shortcuts: {} })
    md.renderer.rules.emoji = (token, idx) =>
      `<span data-marpit-emoji>${token[idx].content}</span>`
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
