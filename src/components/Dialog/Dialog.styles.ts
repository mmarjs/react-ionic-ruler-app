import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, percentage, pxToRem } from 'styles';

const titleTextStyle: CreateCSSProperties = {
	...font({
		fontSize: 20,
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	padding: `0 ${pxToRem(30)}`,
	'&.MuiTypography-root': {
		whiteSpace: 'pre-wrap'
	}
};

const modalPaper: CreateCSSProperties = {
	width: pxToRem(290),
	boxShadow: 'none',
	borderRadius: pxToRem(30),
	color: 'black',
	overflowY: 'visible',
	textAlign: 'center',
	padding: `${pxToRem(30)} 0`,
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : 'rgb(255, 255, 255)')
};

const imagePaper: CSSProperties = {
	width: percentage(1),
	backgroundColor: '#ffffff',
	borderRadius: pxToRem(15),
	padding: `${pxToRem(10)} ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(10)}`
};
const imgWrapper: CSSProperties = {
	margin: `${pxToRem(-114)} ${pxToRem(53.3)} 0 auto`,
	width: 'fit-content',
	height: 'fit-content'
};
const closeBtn: CSSProperties = {
	position: 'absolute',
	right: pxToRem(15),
	top: pxToRem(15),
	padding: '0 !important'
};
const dialogTitle: CSSProperties = {
	textAlign: 'center',
	padding: `${pxToRem(15)} 0 0 0`,
	...font({
		fontSize: 20,
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	})
};
const dialogContent: CSSProperties = {
	padding: `0 ${pxToRem(30)}`
};

const imageWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

const trashIcon: CSSProperties = {
	marginTop: pxToRem(20)
};

const imageAspectRatioBox: CSSProperties = {
	height: 0,
	width: percentage(1),
	paddingTop: percentage(1),
	position: 'relative'
};

const imageAspectRatioBoxInside: CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: percentage(1),
	height: percentage(1)
};

const image: CSSProperties = {
	width: percentage(1),
	height: percentage(1),
	objectFit: 'cover',
	borderRadius: pxToRem(15),
	overflow: 'hidden'
};
export const styles = createStyles({
	imageAspectRatioBox,
	imageAspectRatioBoxInside,
	image,
	trashIcon,
	imagePaper,
	imageWrapper,
	dialogContent,
	dialogTitle,
	modalPaper,
	titleTextStyle,
	closeBtn,
	imgWrapper
});
