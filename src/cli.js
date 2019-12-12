import minimist from 'minimist'
import Client from 'newsie'

import { news } from './news'
import { help } from './help'

export async function cli (argsArray) {
  const args = minimist(argsArray.slice(2), {
    int: ['limit', 'port'],
    string: ['host', 'newsgroups'],
    boolean: ['help', 'save'],
    alias: { l: 'limit', h: 'host', p: 'port', H: 'help', n: 'newsgroups', s: 'save' },
    default: { limit: -1, host: 'news.epita.fr', port: 119, help: false, newsgroups: '*', save: false },
    stopEarly: true,
    unknown: () => {
      console.log('Unknown option was used!')
      process.exit(1)
    }
  })

  if (args.help) {
    help()
    process.exit(0)
  }

  const client = new Client({
    host: args.host,
    port: args.port
  })

  await client.connect().catch(exception => console.log(exception))

  await news(client, args.limit, args.newsgroups)

  await client.quit()
  process.exit(0)
}
