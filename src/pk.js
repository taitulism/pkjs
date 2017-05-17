'use strict';

const getJsonObj       = require('./get-json-obj');
const writePkgJsonObj  = require('./write-pkg-json-obj');
const createPropGetter = require('./create-prop-getter');
const createJsonWriter = require('./create-json-writer');

module.exports = pkjs;

function pkjs (pkgJsonPath, actionFlag, prop, ...args) {
	const writeJson = createJsonWriter(pkgJsonPath);

	if (actionFlag === '-g') {
		const getProp = createPropGetter(pkgJsonPath);
		
		getProp(prop);
	}
	else if (actionFlag === '-s') {
		
	}
	else if (actionFlag === '-d') {
		
	}
	else {
		console.log(actionFlag);
	}
	return;

	if (typeof keyOrValue === 'undefined') {
		// GET
	}
	else {
		getJsonObj(pkgJsonPath, (jsonObj) => {
			if (typeof _values[0] === 'undefined') {
				const propType = getPropType(prop, jsonObj);
				const value    = keyOrValue;

				// SET string
				if (propType === 'string') {
					jsonObj[prop] === value;

					writeJson(jsonObj);
				}
				// SET array
				else if (propType === 'array') {
					// if array exists: push
					if (Array.isArray(jsonObj[prop])) {
						jsonObj[prop].push(value);
					}
					// else create array with one value
					else {
						jsonObj[prop] = [value];
					}
					
					writeJson(jsonObj);
				}
				// GET [prop][key]
				else if (propType === 'object') {
					const key = keyOrValue;

					console.log(jsonObj[prop][key]);
				}
				else {
					console.log('pkjs: Unknown Property', prop);
				}
			}
			else {
				// SET string
				if (propType === 'string') {
					const value = [value, ..._values].join();
					
					jsonObj[prop] === value;

					writeJson(jsonObj);
				}
				// SET array
				else if (propType === 'array') {
					const value = keyOrValue;

					// if array exists: push
					if (Array.isArray(jsonObj[prop])) {
						const values = [value, ..._values];

						values.forEach((item) => {
							jsonObj[prop].push(item);
						});
					}
					// else create array with all _values
					else {
						jsonObj[prop] = [value, ..._values];
					}
					
					writeJson(jsonObj);
				}
				// SET [prop][key] = value
				else if (propType === 'object') {
					const key = keyOrValue;
					const value = _values[0];

					jsonObj[prop][key] = value;
					
					writeJson(jsonObj);
				}
				else {
					console.error('pkjs: Unknown Property', prop);
				}
			}
		});
	}
}

const booleanProps = [
	'private',
	'preferGlobal'
];

const stringProps = [
	'name',
	'version',
	'description',
	'homepage',
	'author',
	'license',
	'main',
	'bin',
	'bugs',
	'man'
];

const arrayProps = [
	'bundledDependencies',
	'os',
	'cpu',
	'keywords',
	'contributors',
	'files',
	'man'
];

const objectProps = [
	'bin',
	'engines',
	'directories',
	'repository',
	'scripts',
	'publishConfig',
	'config',
	'dependencies',
	'devDependencies',
	'peerDependencies',
	'optionalDependencies'
];


function getPropType (propName, jsonObj) {
	const prop = jsonObj[propName];

	if (prop) {
		if (prop === STR) {
			return STR;
		}
		else if (prop === ARY) {
			return ARY;
		}
		else if (prop === OBJ) {
			return OBJ;
		}
	}
	else {
		getDefaultPropType(propName);
	}
}

const STR = 0;
const ARY = 1;
const OBJ = 2;

function getDefaultPropType (prop) {
	return STR;
	// return ARY;
	// return OBJ;
}
