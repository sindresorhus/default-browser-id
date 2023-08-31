import process from 'node:process';
import os from 'node:os';
import fs from 'node:fs/promises';
import bplist from 'bplist-parser';
import untildify from 'untildify';

const macOsVersion = Number(os.release().split('.')[0]);
const filePath = untildify(macOsVersion >= 14 ? '~/Library/Preferences/com.apple.LaunchServices/com.apple.launchservices.secure.plist' : '~/Library/Preferences/com.apple.LaunchServices.plist');

export default async function defaultBrowserId() {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const defaultBundleId = 'com.apple.Safari';

	let buffer;
	try {
		buffer = await fs.readFile(filePath);
	} catch (error) {
		if (error.code === 'ENOENT') {
			return defaultBundleId;
		}

		throw error;
	}

	const handlers = bplist.parseBuffer(buffer)?.[0]?.LSHandlers;

	if (!handlers || handlers.length === 0) {
		return defaultBundleId;
	}

	for (const handler of handlers) {
		if (handler.LSHandlerURLScheme === 'http' && handler.LSHandlerRoleAll) {
			return handler.LSHandlerRoleAll;
		}
	}

	return defaultBundleId;
}
