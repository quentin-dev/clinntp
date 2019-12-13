export function save (config, name, args) {
  config.set(name, { limit: args.limit, port: args.port, host: args.host, newsgroups: args.newsgroups })
}
