import assert from 'assert'
import Marpit from '@marp-team/marpit'
import Marp from '../lib/marp'

describe('Marp', () => {
  it('extends Marpit', () => assert(new Marp() instanceof Marpit))

  describe('markdown property', () => {
    const { markdown } = new Marp()

    // TODO: Use cheerio to be disambiguation
    it('renders breaks as <br> element', () =>
      assert(
        markdown
          .render('hard\nbreak')
          .replace(/\n/g, '')
          .includes('hard<br />break')
      ))

    it('has enabled table syntax', () =>
      assert(markdown.render('|a|b|\n|-|-|\n|c|d|').includes('<table>')))

    it('converts URL to hyperlink', () =>
      assert(
        markdown
          .render('https://www.google.com/')
          .includes(
            '<a href="https://www.google.com/">https://www.google.com/</a>'
          )
      ))
  })

  describe('themeSet property', () => {
    const { themeSet } = new Marp()

    it('has default theme', () =>
      assert(themeSet.default === themeSet.get('default')))
  })
})
