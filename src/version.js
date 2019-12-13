import chalk from 'chalk'
import { version as vnum } from '../package.json'

export function version () {
  console.log(`${chalk.magentaBright(vnum)}`)
}
