#!/usr/bin/env node

'use strict';

const join = require('path').join;
const pkjs = require('../src/pk.js');
const pkgJsonPath = join(process.cwd(), 'package.json');
const args        = process.argv.slice(2);

pkjs(pkgJsonPath, ...args);
