**PROJECT STATUS:** Just got started. Nothing to see here.  
**CURRENT VERSION:** `0.0.0`  
**FOLLOWS SEMVER:** Not yet.  
**DEFAULT BRANCH:** `develop`  

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/taitulism/pkjs.svg?branch=develop)](https://travis-ci.org/taitulism/pkjs)



pkjs
====
Edit your `package.json` from the CLI.  
Get and set values, add to array and handle objects.

Usage:
------
### Get the value of the `"name"` field:
```sh
$ pkjs name
# > my-module
```

# FUTURE SPEC

__Up Next:__
### Set `"name"` field to equal `"my-new-module"`:
```sh
$ pkjs name my-new-module
```
Results:
```js
// package.json:
{
  "name": "my-new-module",
  ...
}
```


__More:__
### Add keywords to the `"keywords"` array. 
Create an array if not exists.
```sh
$ pkjs keywords word-1 "word 2" word-3
```
Results:
```js
{
  ...
  "keywords": [
	  "word-1",
	  "word 2",
	  "word-3"
  ],
  ...
}
```

```sh
# add a script (object[prop]) - does not create if not exists
$ pkjs scripts lint "eslint ./index.js"
```
