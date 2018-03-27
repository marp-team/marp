import assert from 'assert'
import Marpit from '@marp-team/marpit'
import Marp from '../src/marp'

describe('Marp', () => {
  it('extends Marpit', () => assert(new Marp() instanceof Marpit))

  describe('themeSet property', () => {
    const { themeSet } = new Marp()

    it('has default theme', () =>
      assert(themeSet.default === themeSet.get('default')))
  })
})
