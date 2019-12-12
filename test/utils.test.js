import expect from 'chai'

import { textArrayToString } from '../src/utils'

describe('#textArrayToString()', function () {
  it('Two lines no trailing newline', function () {
    expect.expect(textArrayToString(['line1', 'line2'])).to.equal('line1\nline2')
  })

  it('Empty array', function () {
    expect.expect(textArrayToString([])).to.equal('')
  })

  it('Only one empty string', function () {
    expect.expect(textArrayToString([''])).to.equal('')
  })

  it('Only empty strings', function () {
    expect.expect(textArrayToString(['', '', ''])).to.equal('\n\n')
  })
})
