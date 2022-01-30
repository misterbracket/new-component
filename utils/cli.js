const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	directory: {
		type: `string`,
		default: 'src/components',
		alias: `dir`,
		desc: `The directory structure to create the component in`
	},
	javascript: {
		type: `boolean`,
		default: false,
		alias: `js`,
		desc: `Create a JaveScript component`
	},
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
};

const commands = {
	help: {
		desc: `Create the a folder structure for a new component e.g. new-component Button`
	}
};

const helpText = meowHelp({
	name: `new-component`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
