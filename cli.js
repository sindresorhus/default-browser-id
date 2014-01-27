#!/usr/bin/env node
'use strict';
var defaultBrowserId = require('./index');

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	return console.log('Usage\n  default-browser-id\n\nExample output\n  com.apple.Safari\n\nReturns the bundle identifier of the default browser');
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	return console.log(require('./package').version);
}

defaultBrowserId(function (err, id) {
	if (err) {
		throw err;
	}

	console.log(id);
});
