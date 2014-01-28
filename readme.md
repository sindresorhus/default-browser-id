# default-browser-id [![Build Status](https://travis-ci.org/sindresorhus/default-browser-id.png?branch=master)](http://travis-ci.org/sindresorhus/default-browser-id)

> Get the [bundle identifier](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleIdentifier) of the default browser (OS X)  
> Example: `com.apple.Safari`


## Install

```
npm install --save default-browser-id
```


## Example

```js
var defaultBrowserId = require('default-browser-id');

defaultBrowserId(function (err, browserId) {
	console.log(browserId);
	//=> com.apple.Safari
});
```


## CLI

You can also use it as a CLI app by installing it globally:

```
npm install --global default-browser-id
```

### Usage

```
default-browser-id
```

Which will for example output `com.apple.Safari`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
