import { SHA1 } from './sha1.js';

export const encryptSummary = message => {

	let encrypted = SHA1(message);
	return encrypted;
}
