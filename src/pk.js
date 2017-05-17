'use strict';

const readPkgJsonObj  = require('./read-pkg-json-obj');
const writePkgJsonObj = require('./write-pkg-json-obj');

module.exports = pkjs;

function pkjs (pkgJsonPath, prop, keyOrValue, ...values) {
	let key, value;

	if (typeof keyOrValue === 'undefined') {
		value = keyOrValue;
	}
	else {
		key = keyOrValue;
		value = values;
	}

	readPkgJsonObj(pkgJsonPath, (jsonObj) => {
		if (!jsonObj) {
			return;
		}

		if (typeof value === 'undefined') {
			// action: GET
			process.stdout.write(jsonObj[prop]);
		}
		else {
			// action: SET
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
	});
}
