'use strict';
const write = require('fs').write;

const stringify = require('./try-json').stringify;

module.exports = writePkgJsonObj;

function writePkgJsonObj (pkgJsonPath, jsonObj, callback) {
	const jsonStr = stringify(jsonObj, null, 2);

	if (jsonStr) {
		write(pkgJsonPath, jsonStr);
	}
}
