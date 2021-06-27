import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const list: CSSProperties = {
	padding: 0
};

const listItem: CSSProperties = {
	padding: `${pxToRem(11)} 0`
};

const text: CreateCSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	color: '#00b559'
};

const content: CreateCSSProperties = {
	opacity: 0.5,
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255)' : 'rgba(24, 28, 25)')
};

const subTitle: CSSProperties = {
	margin: `${pxToRem(15)} 0 ${pxToRem(5)} 0`,
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY
};

const container: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#fff'),
	flex: 1
};
export const styles = createStyles({
	container,
	list,
	listItem,
	text,
	content,
	subTitle
});
