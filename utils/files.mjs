import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const mkDirPromise = dirPath =>
	new Promise((resolve, reject) => {
		fs.mkdir(dirPath, err => {
			err ? reject(err) : resolve();
		});
	});

// Simple promise wrappers for read/write files.
// utf-8 is assumed.
const readFilePromise = fileLocation =>
	new Promise((resolve, reject) => {
		fs.readFile(fileLocation, 'utf-8', (err, text) => {
			err ? reject(err) : resolve(text);
		});
	});

const writeFilePromise = (fileLocation, fileContent) =>
	new Promise((resolve, reject) => {
		fs.writeFile(fileLocation, fileContent, 'utf-8', err => {
			err ? reject(err) : resolve();
		});
	});

const readFilePromiseRelative = fileLocation => {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	return readFilePromise(path.join(__dirname + '/../', fileLocation));
};

export {
	mkDirPromise,
	readFilePromise,
	writeFilePromise,
	readFilePromiseRelative
};
