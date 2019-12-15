import Conf from 'conf'
import { assert } from 'chai'

import { configure } from '../src/configure'
import { name } from '../package.json'

describe('#configure()', function () {
  this.beforeEach(function () {
    const config = new Conf()
    config.clear()
  })

  it('sets default limit', function () {
    const config = new Conf()
    var currentConfig = configure(config, name)
    assert.equal(currentConfig.limit, -1)
  })

  it('sets default port', function () {
    const config = new Conf()
    var currentConfig = configure(config, name)
    assert.equal(currentConfig.port, 119)
  })

  it('sets default host', function () {
    const config = new Conf()
    var currentConfig = configure(config, name)
    assert.equal(currentConfig.host, 'news.epita.fr')
  })

  it('sets default newsgroups', function () {
    const config = new Conf()
    var currentConfig = configure(config, name)
    assert.equal(currentConfig.newsgroups, '*')
  })

  it('does not overwrite current limit', function () {
    const config = new Conf()
    config.set(name, { limit: 4, port: 119, host: 'news.epita.fr', newsgroups: '*' })
    var currentConfig = configure(config, name)
    assert.equal(currentConfig.limit, 4)
  })

  it('does not overwrite current port', function () {
    const config = new Conf()
    config.set(name, { limit: -1, port: 42, host: 'news.epita.fr', newsgroups: '*' })
    var currentConfig = configure(config, name)
    assert.equal(currentConfig.port, 42)
  })

  it('does not overwrite current host', function () {
    const config = new Conf()
    config.set(name, { limit: -1, port: 119, host: 'news.gnu.com', newsgroups: '*' })
    var currentConfig = configure(config, name)
    assert.equal(currentConfig.host, 'news.gnu.com')
  })

  it('does not overwrite current newsgroups', function () {
    const config = new Conf()
    config.set(name, { limit: -1, port: 119, host: 'news.epita.fr', newsgroups: 'assistants.*' })
    var currentConfig = configure(config, name)
    assert.equal(currentConfig.newsgroups, 'assistants.*')
  })
})
