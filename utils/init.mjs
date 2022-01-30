import welcome from 'cli-welcome';
import unhandled from 'cli-handle-unhandled';

export default ({ clear = true }) => {
	unhandled();
	welcome({
		title: `new-component`,
		tagLine: `by Max Klammer`,
		version: `0.0.1`,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear
	});
};
