import { expect } from 'chai'
import 'mocha-sinon'

import { cli } from '../src/cli'

describe('#cli()', function () {
  this.timeout(5000)
  this.beforeEach(function () {
    this.sinon.stub(console, 'log')
  })

  it('exit 1 if wrong option', async function () {
    const argsArray = ['', '', '--homp']
    expect(await cli(argsArray)).to.equal(1)
  })

  it('exit 0 if long help option', async function () {
    const argsArray = ['', '', '--help']
    expect(await cli(argsArray)).to.equal(0)
  })

  it('exit 0 if short help option', async function () {
    const argsArray = ['', '', '-H']
    expect(await cli(argsArray)).to.equal(0)
  })

  it('exit 0 if long version option', async function () {
    const argsArray = ['', '', '--version']
    expect(await cli(argsArray)).to.equal(0)
  })

  it('exit 0 if short version option', async function () {
    const argsArray = ['', '', '-v']
    expect(await cli(argsArray)).to.equal(0)
  })

  it('exit 0 if long clear option', async function () {
    const argsArray = ['', '', '--clear']
    expect(await cli(argsArray)).to.equal(0)
  })

  it('exit 0 if short clear option', async function () {
    const argsArray = ['', '', '-c']
    expect(await cli(argsArray)).to.equal(0)
  })

  it('exit 0 if long dryrun option', async function () {
    const argsArray = ['', '', '--dryrun']
    expect(await cli(argsArray)).to.equal(0)
  })

  it('exit 0 if short dryrun option', async function () {
    const argsArray = ['', '', '-d']
    expect(await cli(argsArray)).to.equal(0)
  })
})
