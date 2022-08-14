// Set your STDLIB_LIBRARY_TOKEN inside env.json
const db = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN }).utils.kv;

// TO GET MORE STREAMS, GO TO http://directory.shoutcast.com. All URLs should start with https
const sample_cstations = [
	{
		name: 'TOP 80 radio',
		url: 'https://securestreams6.autopo.st:2321/stream'
	}
];

module.exports = async (status = '', info = {}) => {
	
	if (status) {
		// console.log('status', status)
		let res = await db.set({
			key: 'channels',
			value: info
		});
		return res;
	} else {

		info = await db.get({
			key: 'channels'
		});
		// console.log('else', info);
		return info;
	}
};