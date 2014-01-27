'use strict';
var bplist = require('bplist-parser');

var file = process.env.HOME + '/Library/Preferences/com.apple.LaunchServices.plist';
var bundleId = 'com.apple.Safari';

module.exports = function (cb) {
	bplist.parseFile(file, function (err, data) {
		if (err) {
			return cb(err);
		}

		var handlers = data && data[0]['LSHandlers'];

		if (!handlers || handlers.length === 0) {
			return cb(null, ret);
		}

		for (var i = 0; i < handlers.length; i++) {
			var el = handlers[i];

			if (el.LSHandlerURLScheme === 'http' && el.LSHandlerRoleAll) {
				bundleId = el.LSHandlerRoleAll;
				break;
			}
		}

		cb(null, bundleId);
	});
};
