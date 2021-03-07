import test from 'ava';
import defaultBrowserId from './index.js';

test('main', async t => {
	t.regex(await defaultBrowserId(), /^com\./);
});
