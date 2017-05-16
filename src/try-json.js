'use strict';

module.exports.parse = tryJSONParse;
module.exports.stringify = tryJSONStringify;

function tryJSONParse (jsonStr) {
	let obj;

	try {
		obj = JSON.parse(jsonStr);
	}
	catch (err) {
		console.log('pkjs ERROR: JSON source file is invalid.', jsonStr);
		console.log(err);
		obj = false;
	}

	return obj;
}

function tryJSONStringify (jsonObj) {
	let str;

	try {
		str = JSON.stringify(jsonObj);
	}
	catch (err) {
		console.log('pkjs ERROR: your value is json invalid. ', jsonObj);
		console.log(err);
		str = false;
	}

	return str;
}
