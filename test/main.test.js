import { expect } from 'chai'
import 'mocha-sinon'

import { main } from '../src/main'

describe('#main()', function () {
    this.beforeEach(function () {
        this.sinon.stub(console, 'log')
    })

    it('return 0 if correct args', async function () {
        const argsArray = ['', '', '--dryrun']
        expect(await main(argsArray)).to.equal(0)
    })

    it('return 1 if correct args', async function () {
        const argsArray = ['', '', '--dryran']
        expect(await main(argsArray)).to.equal(1)
    })
})