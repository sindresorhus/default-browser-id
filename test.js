'use strict';
var assert = require('assert');
var defaultBrowser = require('./');

it('should return the default browser', function () {
	return defaultBrowser().then(function (id) {
		console.log('Bundle id:', id);
		assert(/^com\./.test(id));
	});
});
