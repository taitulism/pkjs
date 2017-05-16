'use strict';

const readPkgJsonObj  = require('./read-pkg-json-obj');
const writePkgJsonObj = require('./write-pkg-json-obj');

module.exports = pkjs;

function pkjs (pkgJsonPath, prop, a, b) {
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

				writePkgJsonObj(pkgJsonPath, jsonObj, (err) => {
					if (err) {
						throw err;
					}
				});
			}
		}
	});
}
