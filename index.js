#!/usr/bin/env node

/**
 * new-component
 * Creates new React component
 *
 * @author Max Klammer <http://maxklammer.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const { log } = require('./utils/log');
const createComponent = require('./helpers/createComponent');

const input = cli.input;
const flags = cli.flags;
const { clear, debug, javascript, directory } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	if (debug) {
		log(flags);
		log(input);
	}

	// If no input is provided, show help
	!input.length && cli.showHelp(0);

	// Creates the component
	input.forEach(componentName => {
		const lang = javascript ? `javascript` : `typescript`;
		createComponent({ componentName: componentName, lang, directory });
	});
})();
