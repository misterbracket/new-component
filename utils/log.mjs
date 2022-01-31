import alert from 'cli-alerts';
import chalk from 'chalk';

//Chalk Colors

const colors = {
	red: [216, 16, 16],
	green: [142, 215, 0],
	blue: [0, 186, 255],
	gold: [255, 204, 0],
	mediumGray: [128, 128, 128],
	darkGray: [90, 90, 90]
};

const log = info => {
	alert({
		type: `warning`,
		name: `DEBUG LOG`,
		msg: ``
	});

	console.log(info);
	console.log();
};

const logIntro = async ({ name, dir }) => {
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

const logItemCompletion = async successText => {
	const checkmark = chalk.rgb(...colors.green)('✓');
	console.info(`${checkmark} ${successText}`);
};

const logConclusion = async () => {
	console.info('\n');
	console.info(chalk.bold.rgb(...colors.green)('Component created! 🚀 '));
	console.info(
		chalk.rgb(...colors.mediumGray)('Thanks for using new-component.')
	);
	console.info('\n');
};

const logError = async error => {
	console.info('\n');
	console.info(chalk.bold.rgb(...colors.red)('Error creating component.'));
	console.info(chalk.rgb(...colors.red)(error));
	console.info('\n');
};

export { log, logIntro, logItemCompletion, logConclusion, logError };
