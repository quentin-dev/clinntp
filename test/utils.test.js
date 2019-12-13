import { expect } from 'chai'

import { textArrayToString } from '../src/utils'

describe('#textArrayToString()', function () {
  it('Two lines no trailing newline', function () {
    expect(textArrayToString(['line1', 'line2'])).to.equal('line1\nline2')
  })

  it('Empty array', function () {
    expect(textArrayToString([])).to.equal('')
  })

  it('Only one empty string', function () {
    expect(textArrayToString([''])).to.equal('')
  })

  it('Only empty strings', function () {
    expect(textArrayToString(['', '', ''])).to.equal('\n\n')
  })
})
