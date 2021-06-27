import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, percentage, pxToRem } from 'styles';

const formWrapper: CSSProperties = {
	paddingTop: pxToRem(25),
	'& button': {
		fontWeight: 'bold',
		marginTop: pxToRem(-5)
	}
};

const textField: CSSProperties = {
	marginBottom: pxToRem(35)
};

const footer: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	// marginTop: 'auto',
	paddingTop: pxToRem(20),
	'& button': {
		fontWeight: 'bold',
		marginTop: pxToRem(20)
	}
};

const qrText: CSSProperties = {
	...font({
		fontWeight: 'bold',
		lineHeight: 1.67,
		color: '#181c19'
	}),
	fontSize: pxToRem(15),
	paddingBottom: pxToRem(15)
};

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: '#181c19',
	opacity: 0.5,
	padding: `${pxToRem(10)} ${pxToRem(10)} 0 ${pxToRem(10)}`
};

const shareImageAspectRatioBox: CSSProperties = {
	height: 0,
	width: percentage(0.4),
	paddingTop: percentage(0.4),
	position: 'relative'
};

const shareImageAspectRatioBoxInside: CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	width: '100%',
	height: '100%'
};

const shareImage: CSSProperties = {
	width: percentage(1),
	height: percentage(1),
	objectFit: 'cover',
	borderRadius: pxToRem(10),
	overflow: 'hidden'
};

const container: CSSProperties = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between'
	// alignItems: 'center'
};

const qrCodeWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

const qrCode: CSSProperties = {
	width: '100%',
	height: 0,
	paddingTop: '100%'
};

const currencySymbol: CreateCSSProperties = {
	'&.MuiInputAdornment-root > p': {
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
	}
};
export const styles = createStyles({
	currencySymbol,
	qrCode,
	qrCodeWrapper,
	formWrapper,
	textField,
	footer,
	qrText,
	dialogContentText,
	container,
	shareImageAspectRatioBox,
	shareImageAspectRatioBoxInside,
	shareImage
});
