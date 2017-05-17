'use strict';

module.exports.parse = tryJSONParse;
module.exports.stringify = tryJSONStringify;

function tryJSONParse (jsonStr, callback) {
	try {
		callback(JSON.parse(jsonStr));
	}
	catch (err) {
		console.log('pkjs ERROR: JSON source file is invalid and unparsable.', jsonStr);
		throw err;
	}
}

function tryJSONStringify (jsonObj, callback) {
	try {
		return JSON.stringify(jsonObj, null, 2);
	}
	catch (err) {
		console.error('pkjs ERROR: JSON object is invalid and unstringable.', jsonObj);
		throw err;
	}
}
