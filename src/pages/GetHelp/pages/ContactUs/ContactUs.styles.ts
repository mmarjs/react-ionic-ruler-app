import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const container: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#fff'),
	flex: 1
};
const buttonWrapper: CSSProperties = {
	paddingBottom: pxToRem(5),
	paddingTop: pxToRem(30),
	display: 'flex',
	flexDirection: 'column'
};
const bigButton: CreateCSSProperties = {
	marginBottom: pxToRem(15),
	backgroundColor: (props: any) => (props.isDarkMode ? '#303331' : 'rgb(202, 241, 221)'),
	color: (props: any) => (props.isDarkMode ? '#fff' : 'rgb(0, 181, 89)'),
	fontWeight: 'bold'
};
const li: CreateCSSProperties = {
	display: 'flex',
	alignItems: 'center',
	margin: `${pxToRem(23)} 0 ${pxToRem(5)} 0`,
	'&:first-child': {
		marginTop: pxToRem(17)
	},
	'& h6': {
		width: '100%',
		marginLeft: pxToRem(10),
		color: (props: any) => (props.isDarkMode ? '#ffffff' : '#181c19'),
		fontWeight: 600,
		fontSize: pxToRem(15)
	},
	'& img': {
		width: pxToRem(30),
		height: pxToRem(30)
	}
};
const content: CreateCSSProperties = {
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	opacity: 0.5,
	lineHeight: 1.67,
	fontWeight: 600,
	paddingLeft: pxToRem(40),
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(24, 28, 25, 1)')
};

export const styles = createStyles({
	container,
	buttonWrapper,
	bigButton,
	content,
	li
});
