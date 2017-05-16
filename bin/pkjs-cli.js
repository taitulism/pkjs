#!/usr/bin/env node

const join = require('path').join;
const pkjs = require('../src/pk.js');
const args = process.argv.slice(2);

const pkgJsonPath = join(process.cwd(), 'package.json');

pkjs(pkgJsonPath, ...args);
