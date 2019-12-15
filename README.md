# clinntp

## Badges

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a97b217d935d488a9fbf346afd2ceece)](https://www.codacy.com/manual/quentin-dev/clinntp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=quentin-dev/clinntp&amp;utm_campaign=Badge_Grade) [![codecov](https://codecov.io/gh/quentin-dev/clinntp/branch/master/graph/badge.svg)](https://codecov.io/gh/quentin-dev/clinntp)

## What it is

*clinntp* is a cli nntp news reader written using node.js. It can be configured
using its options and supports saving the current configuration.

## Requirements
* node
* npm

## Installation
`npm install -g clinntp`

## Usage
`clinntp [options]`

### Options
* `-l, --limit <news limit>`
  * Limit the number of news you load when choosing a newsgroup
  * *Default:* Loads **all** of the news in the selected newsgroup

* `-p, --port <port number>`
  * Sets the port number to use when connecting to the host
  * *Default:* Set to **119**

* `-h, --host <host address>`
  * Sets the address to use when connecting to the host
  * *Default*: Set to **'news.epita.fr'**

* `-n, --newsgroup <match regex>`
  * Sets the regex to use when looking up newsgroups
  * *Default:* Set to **'*'**

* `-H, --help`
  * Prints clinntp help menu with options info

* `-v, --version`
  * Prints clinntp version number

* `-s, --save`
  * Saves the current settings as defaults

* `-c, --clear`
  * Resets the settings to initial default

## Examples

### Saving the number of news to load
```bash
clinntp -l 4 -s
```

## Planned improvements

* [X] Add option to save current configuration as default
* [ ] Add advanced menu navigation using keyboard
* [ ] Implement a better selection interface

## Development

### Setup

```bash
git clone https://github.com/quentin-dev/clinntp.git
cd clinntp/
npm install
```

### Running coding style checks
```bash
npm run lint
```

### Running test suite
```bash
npm run test
```

### Running locally
```bash
./bin/index.js [options]
```