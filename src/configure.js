export function configure (config, name) {
  if (config.get(name) === undefined) {
    config.set(name, { limit: -1, port: 119, host: 'news.epita.fr', newsgroups: '*' })
  }

  return config.get(name)
}
