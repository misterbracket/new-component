const welcome = require('cli-welcome');
const unhandled = require('cli-handle-unhandled');
const pkg = require('../package.json');

module.exports = () => {
	unhandled();
	welcome({
		title: `@maxklammer/new-component`,
		tagLine: `by Max Klammer`,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true
	});
};
