import { assert } from 'chai'
import 'mocha-sinon'

import { help } from '../src/help'

describe('#help()', function () {
  this.beforeEach(function () {
    this.sinon.stub(console, 'log')
  })

  it('console.log called once', function () {
    help()
    assert.equal(console.log.calledOnce, true)
  })

  it('stdout contains -l, --limit', function () {
    help()
    assert.equal(console.log.getCall(0).args[0].includes('-l, --limit'), true)
  })

  it('stdout contains -p, --port', function () {
    help()
    assert.equal(console.log.getCall(0).args[0].includes('-p, --port'), true)
  })

  it('stdout contains -h, --host', function () {
    help()
    assert.equal(console.log.getCall(0).args[0].includes('-h, --host'), true)
  })

  it('stdout contains -n, --newsgroups', function () {
    help()
    assert.equal(console.log.getCall(0).args[0].includes('-n, --newsgroups'), true)
  })

  it('stdout contains -H, --help', function () {
    help()
    assert.equal(console.log.getCall(0).args[0].includes('-H, --help'), true)
  })

  it('stdout contains -v, --version', function () {
    help()
    assert.equal(console.log.getCall(0).args[0].includes('-v, --version'), true)
  })

  it('stdout contains -s, --save', function () {
    help()
    assert.equal(console.log.getCall(0).args[0].includes('-s, --save'), true)
  })

  it('stdout contains -c, --clear', function () {
    help()
    assert.equal(console.log.getCall(0).args[0].includes('-c, --clear'), true)
  })

  it('stdout contains -d, --dryrun', function () {
    help()
    assert.equal(console.log.getCall(0).args[0].includes('-d, --dryrun'), true)
  })
})
