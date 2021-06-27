import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const list: CSSProperties = {
	padding: 0
};
const searchBox: CSSProperties = {
	marginTop: pxToRem(5),
	marginBottom: pxToRem(10)
	// '& input': {
	// 	fontWeight: 600,
	// 	color: '#181c19'
	// }
};
const listItem: CSSProperties = {
	padding: `0 0 ${pxToRem(7)} 0`,
	color: '#00b559'
};
const text: CSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY
};
const content: CSSProperties = {
	opacity: 0.5
};
const subHeader: CreateCSSProperties = {
	fontSize: pxToRem(20),
	fontWeight: 'bold',
	lineHeight: 1.5,
	marginLeft: 0,
	marginBottom: pxToRem(11),
	marginTop: pxToRem(15),
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	fontFamily: DEFAULT_FONT_FAMILY
};
export const styles = createStyles({
	list,
	searchBox,
	listItem,
	text,
	content,
	subHeader
});
