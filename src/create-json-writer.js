'use strict';

const write     = require('fs').writeFile;
const stringify = require('./try-json').stringify;

module.exports = createJsonWriter;

function createJsonWriter (pkgJsonPath) {
	return function writeJson (jsonObj) {
		const jsonStr = stringify(jsonObj, null, 2);

		if (jsonStr) {
			write(pkgJsonPath, jsonStr, (err) => {
				if (err) {
					throw err;
				}
			});
		}
	};
}
