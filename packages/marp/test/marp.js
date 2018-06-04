import assert from 'assert'
import cheerio from 'cheerio'
import Marpit from '@marp-team/marpit'
import Marp from '../lib/marp'

describe('Marp', () => {
  const marp = () => new Marp()

  it('extends Marpit', () => assert(new Marp() instanceof Marpit))

  describe('markdown property', () => {
    it('renders breaks as <br> element', () => {
      const $ = cheerio.load(marp().markdown.render('hard\nbreak'))
      assert($('br').length === 1)
    })

    it('has enabled table syntax', () => {
      const $ = cheerio.load(marp().markdown.render('|a|b|\n|-|-|\n|c|d|'))
      assert($('table > thead > tr > th').length === 2)
      assert($('table > tbody > tr > td').length === 2)
    })

    it('converts URL to hyperlink', () => {
      const address = 'https://www.google.com/'
      const $ = cheerio.load(marp().markdown.render(address))
      assert($(`a[href="${address}"]`).text() === address)
    })

    it('converts emoji shorthand to unicode emoji', () => {
      const $ = cheerio.load(
        marp().markdown.render('# emoji:heart:\n\n## emoji❤️')
      )
      assert($('h1').html() === $('h2').html())
      assert($('h1 > span[data-marpit-emoji]').length === 1)
    })
  })

  describe('themeSet property', () => {
    const { themeSet } = marp()

    it('has default theme', () =>
      assert(themeSet.default === themeSet.get('default')))
  })

  describe('#highlighter', () => {
    context('when fence is rendered without lang', () => {
      const $ = cheerio.load(marp().markdown.render('```\n# test\n```'))

      it('highlights code automatically', () =>
        assert($('code > [class^="hljs-"]').length > 0))
    })

    context('when fence is rendered with specified lang', () => {
      const $ = cheerio.load(marp().markdown.render('```markdown\n# test\n```'))

      it('highlights code with specified lang', () => {
        assert($('code.language-markdown').length === 1)
        assert($('code > .hljs-section').length === 1)
      })
    })

    const plainLangs = ['text', 'plain']

    plainLangs.forEach(lang => {
      context(`when fence is rendered with ${lang} lang`, () => {
        const $ = cheerio.load(
          marp().markdown.render(`\`\`\`${lang}\n# test\n\`\`\``)
        )

        it('disables highlight', () =>
          assert($('code > [class^="hljs-"]').length === 0))
      })
    })

    context('with overriden #highlighter', () => {
      const instance = marp()

      instance.highlighter = (code, lang) => {
        assert(code.trim() === 'test')
        assert(lang === 'markdown')

        return '<b class="customized">customized</b>'
      }

      const $ = cheerio.load(instance.markdown.render('```markdown\ntest\n```'))

      it('highlights with custom highlighter', () =>
        assert($('code > .customized').length === 1))
    })
  })
})
