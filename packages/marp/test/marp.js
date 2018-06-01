import assert from 'assert'
import cheerio from 'cheerio'
import Marpit from '@marp-team/marpit'
import Marp from '../lib/marp'

describe('Marp', () => {
  it('extends Marpit', () => assert(new Marp() instanceof Marpit))

  describe('markdown property', () => {
    const { markdown } = new Marp()

    it('renders breaks as <br> element', () => {
      const $ = cheerio.load(markdown.render('hard\nbreak'))
      assert($('br').length === 1)
    })

    it('has enabled table syntax', () => {
      const $ = cheerio.load(markdown.render('|a|b|\n|-|-|\n|c|d|'))
      assert($('table > thead > tr > th').length === 2)
      assert($('table > tbody > tr > td').length === 2)
    })

    it('converts URL to hyperlink', () => {
      const address = 'https://www.google.com/'
      const $ = cheerio.load(markdown.render(address))
      assert($(`a[href="${address}"]`).text() === address)
    })
  })

  describe('themeSet property', () => {
    const { themeSet } = new Marp()

    it('has default theme', () =>
      assert(themeSet.default === themeSet.get('default')))
  })
})
