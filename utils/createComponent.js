const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const {
	logIntro,
	logItemCompletion,
	logConclusion,
	logError
} = require('./log');

const {
	mkDirPromise,
	readFilePromiseRelative,
	writeFilePromise,
	delDirPromise
} = require('./files');

const prettify = template => prettier.format(template, { parser: 'babel' });

module.exports = ({ componentName, lang, directory }) => {
	// Find the path to the selected template file.
	const templatePath = `./templates/functional.js`;

	// Find the path to the test file.
	const testTemplatePath = `./templates/test.js`;

	// Get file extension
	const extension = lang === 'javascript' ? 'js' : 'tsx';

	// Get all of our file paths worked out, for the user's project.
	const componentDir = `${directory}/${componentName}`;
	const filePath = `${componentDir}/${componentName}.${extension}`;
	const indexPath = `${componentDir}/index.${
		lang === 'javascript' ? 'js' : 'ts'
	}`;

	// Get all of our file paths worked out, for the user's project.
	const componentTestDir = `${componentDir}/__test__`;
	const testFilePath = `${componentTestDir}/${componentName}.test.${extension}`;

	// Our index template is super straightforward, so we'll just inline it for now.
	const indexTemplate = prettify(`\
export { default } from './${componentName}';
`);

	logIntro({ name: componentName, dir: componentDir, type: 'functional' });

	// Check to see if a directory at the given path exists
	const fullPathToParentDir = path.resolve(directory);
	if (!fs.existsSync(fullPathToParentDir)) {
		logError(
			`Sorry, you need to create the directory first.\n(@maxklammer/new-component is looking for a directory at ${directory}).`
		);
		return;
	}

	// Check to see if this component has already been created
	const fullPathToComponentDir = path.resolve(componentDir);
	if (fs.existsSync(fullPathToComponentDir)) {
		logError(
			`Looks like this component already exists! There's already a component at ${componentDir}.\nPlease delete this directory and try again.`
		);
		return;
	}

	// Start by creating the directory that our component lives in.
	mkDirPromise(componentDir)
		.then(() => readFilePromiseRelative(templatePath))
		.then(template => {
			logItemCompletion('Directory created.');
			return template;
		})
		.then(template =>
			// Replace our placeholders with real data (so far, just the component name)
			template.replace(/COMPONENT_NAME/g, componentName)
		)
		.then(template =>
			// Format it using prettier, to ensure style consistency, and write to file.
			writeFilePromise(filePath, prettify(template))
		)
		.then(template => {
			logItemCompletion('Component built and saved to disk.');
			return template;
		})
		.then(() =>
			// We also need the `index.js` file, which allows easy importing.
			writeFilePromise(indexPath, prettify(indexTemplate))
		)
		.then(template => {
			logItemCompletion('Index file built and saved to disk.');
			return template;
		})
		.then(() =>
			// We also need a __test__ folder for unit tests.
			mkDirPromise(`${componentTestDir}`)
		)
		.then(() => readFilePromiseRelative(testTemplatePath))
		.then(template => {
			logItemCompletion('Test Directory created.');
			return template;
		})
		.then(template =>
			// Replace our placeholders with real data (so far, just the component name)
			template.replace(/COMPONENT_NAME/g, componentName)
		)
		.then(template =>
			// Format it using prettier, to ensure style consistency, and write to file.
			writeFilePromise(testFilePath, prettify(template))
		)
		.then(template => {
			logItemCompletion(
				'Component test directory built and saved to disk.'
			);
			return template;
		})
		.then(() => {
			logConclusion();
		})
		.catch(err => {
			console.error(err);
			delDirPromise(componentDir);
		});
};
