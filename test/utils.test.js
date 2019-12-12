import expect from 'chai'

import { textArrayToString } from '../src/utils'

describe('#textArrayToString()', function () {
  it('Two lines no trailing newline', function () {
    expect.expect(textArrayToString(['line1', 'line2'])).to.equal('line1\nline2')
  })
})
