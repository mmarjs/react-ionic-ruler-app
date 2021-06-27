import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const listItem: CSSProperties = {
	padding: `${pxToRem(11)} ${pxToRem(10)}`,
	color: '#181c19'
};
const list: CSSProperties = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column'
};
const text: CreateCSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};
const icon: CSSProperties = {
	marginRight: pxToRem(10),
	width: pxToRem(30),
	minWidth: pxToRem(30)
};
const last: CSSProperties = {
	marginTop: 'auto',
	marginBottom: pxToRem(4)
};
const dialogContentText: CreateCSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5)'),
	padding: `${pxToRem(15)} 0`
};

const notRecommendedButton: CreateCSSProperties = {
	fontWeight: 'bold',
	backgroundColor: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	'& span': {
		color: (props: any) => (props.isDarkMode ? '#181c19' : '#fff')
	}
};

const emailRoot: CSSProperties = {
	marginBottom: pxToRem(25),
	'& .MuiInput-underline:before': {
		borderBottom: '2px solid #181c19'
	},
	'& input': {
		padding: `0 0 ${pxToRem(12)} 0`,
		fontSize: pxToRem(15),
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	}
};

export const styles = createStyles({
	list,
	listItem,
	text,
	icon,
	last,
	dialogContentText,
	notRecommendedButton,
	emailRoot
});
