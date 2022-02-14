#!/usr/bin/env node

/**
 * new-component
 * Creates new React component
 *
 * @author Max Klammer <http://maxklammer.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const createComponent = require('./utils/createComponent');

const input = cli.input;
const flags = cli.flags;
const { javascript, directory, dir, js } = flags;

// 1. Check Flags
// 2. Write Docs

(async () => {
	init();
	input.includes(`help`) && cli.showHelp(0);

	// If no input is provided, show help
	!input.length && cli.showHelp(0);

	// Creates the component
	input.forEach(componentName => {
		console.log({ javascript, directory, dir, js });
		const lang = javascript ? `javascript` : `typescript`;
		createComponent({ componentName: componentName, lang, directory });
	});
})();
