#!/usr/bin/env node
'use strict';
const meow = require('meow');
const defaultBrowserId = require('./');

meow(`
	Example
	  $ default-browser-id
	  com.apple.Safari
`);

defaultBrowserId().then(console.log);
