import test from 'ava';
import defaultBrowserId from './index.js';

test('main', async t => {
	const result = await defaultBrowserId();
	console.log('Default browser:', result);
	t.regex(result, /^com\./);
});

/*
Example content:

```
(
	{
		LSHandlerPreferredVersions = {
			LSHandlerRoleAll = "-";
		};
		LSHandlerRoleAll = "com.apple.safari";
		LSHandlerURLScheme = http;
	},
	…
)
```
*/
