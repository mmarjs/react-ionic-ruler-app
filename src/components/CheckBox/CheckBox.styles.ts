import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font } from 'styles';

const root: CreateCSSProperties = {
	'& .MuiTypography-root': {
		...font({
			fontWeight: 600,
			lineHeight: 1.67
		}),
		color: (props: any) =>
			props.checked ? (props.isDarkMode ? '#ffffff' : '#181c19') : props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(28, 24, 25, 0.5)'
	}
};

const checkBox: CreateCSSProperties = {
	'&:hover': {
		backgroundColor: 'transparent'
	},
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(28, 24, 25, 0.5)'),
	'&$checked': {
		color: '#181c19'
	},
	'&$checkedDark': {
		color: '#ffffff'
	}
};

const checked: CSSProperties = {};

const checkedDark: CSSProperties = {};
export const styles = createStyles({
	root,
	checkBox,
	checked,
	checkedDark
});
