const alert = require('cli-alerts');
const chalk = require('chalk');

//Chalk Colors

const colors = {
	red: [216, 16, 16],
	green: [142, 215, 0],
	blue: [0, 186, 255],
	gold: [255, 204, 0],
	mediumGray: [128, 128, 128],
	darkGray: [90, 90, 90]
};

module.exports.log = info => {
	alert({
		type: `warning`,
		name: `DEBUG LOG`,
		msg: ``
	});

	console.log(info);
	console.log();
};

module.exports.logIntro = ({ name, dir }) => {
	console.info(
		`✨  Creating the ${chalk.bold.rgb(...colors.gold)(name)} component ✨`
	);
	console.info('\n');

	const pathString = chalk.bold.rgb(...colors.blue)(dir);

	console.info(`Directory:  ${pathString}`);
	console.info(
		chalk.rgb(...colors.darkGray)(
			'========================================='
		)
	);

	console.info('\n');
};

module.exports.logItemCompletion = successText => {
	const checkmark = chalk.rgb(...colors.green)('✓');
	console.info(`${checkmark} ${successText}`);
};

module.exports.logConclusion = () => {
	console.info('\n');
	console.info(chalk.bold.rgb(...colors.green)('Component created! 🚀 '));
	console.info(
		chalk.rgb(...colors.mediumGray)('Thanks for using new-component.')
	);
	console.info('\n');
};

module.exports.logError = error => {
	console.info('\n');
	console.info(chalk.bold.rgb(...colors.red)('Error creating component.'));
	console.info(chalk.rgb(...colors.red)(error));
	console.info('\n');
};
