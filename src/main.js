import { cli } from './cli'

export async function main (argsArray) {
  process.exit(await cli(argsArray))
}
