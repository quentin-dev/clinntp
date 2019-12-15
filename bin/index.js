#!/usr/bin/env node

require = require('esm')(module)
require('../src/main').main(process.argv)
