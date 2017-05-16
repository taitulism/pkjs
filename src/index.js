'use strict';

const fs   = require('fs');
const join = require('path').join;

const readPkgJsonObj  = require('./read-pkg-json-obj');
const writePkgJsonObj = require('./write-pkg-json-obj');

const {
	parse: jsonParse,
	stringify: jsonStringify
} = require('./try-json');

const pkgJsonPath = join(process.cwd(), 'package.json');

const args = process.argv.slice(2);

pkjs(...args);

module.exports = pkjs;

function pkjs (prop, a, b) {
	let key, value;

	if (!b) {
		value = a;
	}
	else {
		key = a;
		value = b;
	}

	readPkgJsonObj(pkgJsonPath, (jsonObj) => {
		if (jsonObj) {
			if (typeof value === 'undefined') {
				process.stdout.write(jsonObj[prop]);
			}
			else {
				if (Array.isArray(jsonObj[prop])) {
					jsonObj[prop].push(value);
				}
				else if (typeof jsonObj[prop] === 'object') {
					jsonObj[prop][key] = value;
				}
				else {
					jsonObj[prop] = value;
				}

				writePkgJsonObj(pkgJsonPath, jsonObj);
			}
		}
	});
}
