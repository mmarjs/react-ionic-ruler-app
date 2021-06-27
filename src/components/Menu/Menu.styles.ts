import { CSSProperties, createStyles, CreateCSSProperties } from '@material-ui/styles';
import { font, percentage, pxToRem } from 'styles';

const footer: CSSProperties = {
	padding: pxToRem(20)
};

const menu: CreateCSSProperties = {
	width: pxToRem(291),
	height: percentage(1),
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#fff')
};

const menuPaper: CSSProperties = {
	borderTopRightRadius: pxToRem(15),
	borderBottomRightRadius: pxToRem(15)
};

const listItem: CSSProperties = {
	padding: `${pxToRem(12.5)} ${pxToRem(20)}}`
};

export const listItemIcon: CreateCSSProperties = {
	minWidth: pxToRem(40),
	color: (props: any) => (props.isDarkMode ? '#fff' : 'rgba(0, 0, 0, 0.54)')
};

const listItemText: CSSProperties = {
	marginTop: 0,
	marginBottom: 0
};

const listItemTextPrimary: CreateCSSProperties = {
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};

const list: CSSProperties = {
	paddingTop: pxToRem(27.5)
};
export const styles = createStyles({
	footer,
	menu,
	menuPaper,
	list,
	listItem,
	listItemIcon,
	listItemText,
	listItemTextPrimary
});
