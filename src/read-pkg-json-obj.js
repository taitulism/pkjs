#!/usr/bin/env

const read = require('fs').readFile;

const parseJson = require('./try-json').parse;

module.exports = getPkgJsonObj;

function handleError (err, pkgJsonPath) {
	const split = err.message.split(', open \'');

	if (split[0] === 'ENOENT: no such file or directory') {
		console.error('Couldn\'t find "package.json":');
		console.error(pkgJsonPath);
		console.log();

		throw err;
	}
}

function getPkgJsonObj (pkgJsonPath, callback) {
	read(pkgJsonPath, 'utf8', (err, str) => {
		if (err) {
			return handleError(err, pkgJsonPath);
		}

		const jsonObj = parseJson(str);

		callback(jsonObj);
	});
}
