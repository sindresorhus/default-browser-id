'use strict';
var assert = require('assert');
var defaultBrowser = require('./');

it('should return the default browser', function (cb) {
	defaultBrowser(function (err, id) {
		console.log('Bundle id:', id);
		assert(/^com\./.test(id));
		cb();
	});
});
