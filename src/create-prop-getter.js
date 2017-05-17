'use strict';

const read = require('fs').readFile;

const parseJson = require('./try-json').parse;
const getJson = require('./get-json-obj');

module.exports = createPropGetter;

function handleError (err, pkgJsonPath) {
	const split = err.message.split(', open \'');

	if (split[0] === 'ENOENT: no such file or directory') {
		console.error('Couldn\'t find "package.json":');
		console.error(pkgJsonPath);
		console.log();

		throw err;
	}
}

function createPropGetter (pkgJsonPath) {
	return function getProp (prop, key) {
		getJson(pkgJsonPath, (str) => {
			const jsonObj = parseJson(str);

			if (typeof key === 'undefined') {
				console.log(jsonObj[prop]);
			}
			else if (typeof key === 'string') {
				console.log(jsonObj[prop][key]);
			}
			else {
				console.error('Unknown Key', key);
			}
		});
	};
}
