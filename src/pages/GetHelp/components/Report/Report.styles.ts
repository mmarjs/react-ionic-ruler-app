import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, dropShadow, pxToRem } from 'styles';

const content: CreateCSSProperties = {
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	opacity: 0.5,
	lineHeight: 1.67,
	fontWeight: 600,
	marginTop: pxToRem(5)
};
const reportContainer: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#242725' : '#f3f3f3'),
	marginTop: pxToRem(20),
	borderRadius: pxToRem(15)
};
const reportHeaderWrapper: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#242725' : '#ffffff'),
	padding: `${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(10)}`,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderRadius: pxToRem(15),
	boxShadow: (props: any) => (props.isDarkMode ? '0 10px 40px 0 #181c19' : 'none'),
	...dropShadow('0 10px 40px rgba(0, 0, 0, 0.1)')
};
const reportTitleWrapper: CreateCSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	'& span': {
		width: pxToRem(30),
		height: pxToRem(30),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& span': {
			width: pxToRem(4),
			height: pxToRem(4),
			borderRadius: pxToRem(5),
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			border: (props: any) => `${pxToRem(3)} solid ${props.type === 'resolved' ? '#00b559' : '#f8ca06'}`
		}
	},
	'& div': {
		'& h6': {
			opacity: '1 !important',
			marginTop: pxToRem(2),
			marginBottom: pxToRem(3),
			color: (props: any) => (props.isDarkMode ? '#fff' : 'inherit')
		},
		'& p': {
			fontSize: pxToRem(10),
			lineHeight: 1.5,
			marginTop: 0,
			color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'inherit')
		}
	}
};
const reportIconWrapper: CreateCSSProperties = {
	width: pxToRem(40),
	height: pxToRem(40),
	borderRadius: pxToRem(20),
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	boxShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.1)',
	backgroundColor: (props: any) => (props.type === 'new' ? '#f8ca06' : props.isDarkMode ? '#303331' : '#ffffff')
};
const reportDataWrapper: CSSProperties = {
	padding: `${pxToRem(5)} 0 ${pxToRem(20)} 0`,
	'& div': {
		display: 'flex',
		paddingTop: pxToRem(15),
		'& div': {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
			padding: `0 0 0 ${pxToRem(45)}`,
			'& h6': {
				opacity: 0.5
			}
		}
	}
};
const reportDataText: CreateCSSProperties = {
	fontSize: pxToRem(10),
	fontFamily: DEFAULT_FONT_FAMILY,
	lineHeight: 1.5,
	fontWeight: 600,
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};
const reportBadge: CSSProperties = {
	width: pxToRem(6),
	height: pxToRem(6),
	borderRadius: pxToRem(3),
	backgroundColor: '#ffffff',
	position: 'absolute',
	top: pxToRem(12),
	left: pxToRem(12)
};
export const styles = createStyles({
	content,
	reportContainer,
	reportHeaderWrapper,
	reportTitleWrapper,
	reportDataWrapper,
	reportIconWrapper,
	reportDataText,
	reportBadge
});
