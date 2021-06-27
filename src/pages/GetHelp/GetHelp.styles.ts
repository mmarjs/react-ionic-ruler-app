import { CSSProperties, createStyles, CreateCSSProperties } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const listItem: CreateCSSProperties = {
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	padding: `0 ${pxToRem(20)}`,
	'&:last-child li': {
		display: 'none'
	}
};

const list: CSSProperties = {
	flex: 1,
	padding: 0
};

const text: CSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	padding: `${pxToRem(11)} 0`
};

const buttonWrapper: CSSProperties = {
	padding: `${pxToRem(30)} ${pxToRem(20)} 0 `
};

const backButton: CSSProperties = {
	fontWeight: 'bold'
};

const sheetText: CreateCSSProperties = {
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(15),
	fontWeight: 600,
	lineHeight: 1.67,
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	opacity: 0.5,
	padding: `0 0 ${pxToRem(20)} 0`,
	textAlign: 'center'
};

const sheetButton: CSSProperties = {
	marginBottom: pxToRem(15),
	fontWeight: 'bold',
	'& span>span': {
		padding: 0
	}
};

export const styles = createStyles({
	list,
	listItem,
	text,
	buttonWrapper,
	backButton,
	sheetText,
	sheetButton
});
