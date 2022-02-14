const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	directory: {
		type: 'string',
		default: 'src/components',
		desc: 'The directory structure to create the component in'
	},
	javascript: {
		type: 'boolean',
		default: false,
		desc: 'Create a JaveScript component'
	},
	version: {
		type: 'boolean',
		alias: 'v',
		desc: 'Print CLI version'
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
