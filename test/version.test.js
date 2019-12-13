import { assert } from 'chai'
import 'mocha-sinon'
import chalk from 'chalk'

import { version as vnum } from '../package.json'
import { version } from '../src/version'

describe('#version()', function () {
  this.beforeEach(function () {
    this.sinon.stub(console, 'log')
  })

  it('console.log called once', function () {
    version()
    assert.equal(console.log.calledOnce, true)
  })

  it('console.log prints vnum in purle', function () {
    version()
    assert.equal(console.log.calledWith(`${chalk.magentaBright(vnum)}`), true)
  })
})
