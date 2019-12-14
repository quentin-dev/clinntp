import Conf from 'conf'
import { assert } from 'chai'

import { clear } from '../src/clear'
import { name } from '../package.json'

describe('#clear()', function () {
    this.beforeEach(function () {
        const config = new Conf()
        config.clear()
    })

    it('clear() clears current config', function () {
        const config = new Conf()
        config.set(name, { limit: -1, port: 119, host: 'news.epita.fr', newsgroups: '*'})
        assert.notEqual(config.get(name), undefined)
        clear(config)
        assert.equal(config.get(name), undefined)
    })
})