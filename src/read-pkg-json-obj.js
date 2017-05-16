'use strict';
const read = require('fs').readFile;

const parseJson = require('./try-json').parse;

module.exports = getPkgJsonObj;

function getPkgJsonObj (pkgJsonPath, callback) {
	read(pkgJsonPath, 'utf8', (err, str) => {
		if (err) throw err;

		const jsonObj = parseJson(str);

		callback(jsonObj);
	});
}
