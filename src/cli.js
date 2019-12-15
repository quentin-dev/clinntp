import minimist from 'minimist'
import Client from 'newsie'
import Conf from 'conf'

import { news } from './news'
import { version } from './version'
import { help } from './help'
import { save } from './save'
import { configure } from './configure'
import { clear } from './clear'

import { name } from '../package.json'

export async function cli (argsArray) {
  const config = new Conf()

  var currentConfig = configure(config, name)

  var unknown = false

  const args = minimist(argsArray.slice(2), {
    int: ['limit', 'port'],
    string: ['host', 'newsgroups'],
    boolean: ['help', 'save', 'version', 'clear'],
    alias: {
      l: 'limit',
      h: 'host',
      p: 'port',
      H: 'help',
      n: 'newsgroups',
      s: 'save',
      v: 'version',
      c: 'clear'
    },
    default: {
      limit: currentConfig.limit,
      host: currentConfig.host,
      port: currentConfig.port,
      help: false,
      newsgroups: currentConfig.newsgroups,
      save: false,
      version: false,
      clear: false
    },
    stopEarly: true,
    unknown: () => {
      console.log('Unknown option was used!')
      unknown = true
    }
  })

  if (unknown) {
    return 1
  }

  if (args.version) {
    version()
    return 0
  }

  if (args.help) {
    help()
    return 0
  }

  if (args.clear) {
    clear(config)
    return 0
  }

  const client = new Client({
    host: args.host,
    port: args.port
  })

  await client.connect().catch(exception => console.log(exception))

  await news(client, args.limit, args.newsgroups)

  await client.quit()

  if (args.save) {
    save(config, name, args)
  }

  return 0
}
