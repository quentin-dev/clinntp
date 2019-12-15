import Conf from 'conf'
import { assert } from 'chai'

import { save } from '../src/save'
import { name } from '../package.json'

describe('#save()', function () {
  this.beforeEach(function () {
    const config = new Conf()
    config.clear()
  })

  const args = {
    limit: -1,
    port: 119,
    host: 'news.epita.fr',
    newsgroups: '*'
  }

  it('saves current limit', function () {
    const config = new Conf()
    save(config, name, args)
    var currentConfig = config.get(name)
    assert.equal(currentConfig.limit, args.limit)
  })

  it('saves current port', function () {
    const config = new Conf()
    save(config, name, args)
    var currentConfig = config.get(name)
    assert.equal(currentConfig.port, args.port)
  })

  it('saves current host', function () {
    const config = new Conf()
    save(config, name, args)
    var currentConfig = config.get(name)
    assert.equal(currentConfig.host, args.host)
  })

  it('saves current newsgroups', function () {
    const config = new Conf()
    save(config, name, args)
    var currentConfig = config.get(name)
    assert.equal(currentConfig.newsgroups, args.newsgroups)
  })
})
