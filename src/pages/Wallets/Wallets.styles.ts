import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';
import walletsLogoImage from './images/card-img.svg';

const walletsLogoContainer: CSSProperties = {
	padding: `${pxToRem(15)} ${pxToRem(25)} ${pxToRem(30)} ${pxToRem(25)}`,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
};

const walletsLogo: CSSProperties = {
	backgroundImage: `url(${walletsLogoImage})`,
	width: pxToRem(275),
	height: pxToRem(82),
	position: 'relative',
	padding: `${pxToRem(25)}`,
	display: 'flex',
	flexDirection: 'column'
};

const trashIcon: CSSProperties = {
	position: 'absolute',
	top: pxToRem(5),
	right: pxToRem(5),
	backgroundColor: 'transparent',
	padding: 0,
	boxShadow: 'none',
	'&:hover': {
		backgroundColor: 'transparent',
		opacity: 0.7
	}
};

const rulerPriceText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5,
		color: 'rgba(255, 255, 255, 0.5)'
	}),
	fontSize: pxToRem(10),
	paddingTop: pxToRem(12)
};

const rulerWalletText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#ffffff'
	}),
	fontSize: pxToRem(15)
};

const rulerNumberText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5,
		color: '#ffffff'
	}),
	fontSize: pxToRem(20)
};

const paymentTemplateContainer: CSSProperties = {
	paddingLeft: pxToRem(25)
};

const TemplateButtonsWrapper: CSSProperties = {
	padding: `${pxToRem(10)} 0 0 0`,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	overflow: 'auto'
};

const addFabButton: CreateCSSProperties = {
	width: pxToRem(50),
	height: pxToRem(50),
	backgroundColor: (props: any) => (props.isDarkMode ? '#303331' : '#caf1dd'),
	boxShadow: 'none',
	minWidth: pxToRem(50)
};

const paymentTemplateButton: CreateCSSProperties = {
	backgroundColor: 'transparent',
	color: (props: any) => (props.isDarkMode ? '#ffffff' : '#00b559'),
	borderRadius: pxToRem(100),
	border: (props: any) => (props.isDarkMode ? `solid ${pxToRem(2)} #303331` : `solid ${pxToRem(2)} #f3f3f3`),
	padding: `${pxToRem(10)} ${pxToRem(20)} ${pxToRem(10)} ${pxToRem(25)}`,
	marginLeft: pxToRem(10),
	fontWeight: 'bold',
	minWidth: 'fit-content',
	'&:hover': {
		backgroundColor: 'rgba(0, 0, 0, 0.2)'
	}
	// '& .MuiButton-label> span': {
	// 	whiteSpace: 'nowrap'
	// }
};

const paymentTemplateText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5,
		color: 'rgba(24, 28, 25, 0.5)'
	}),
	fontSize: pxToRem(10)
};

const footer: CSSProperties = {
	marginTop: 'auto',
	padding: `${pxToRem(20)} ${pxToRem(20)} 0 ${pxToRem(20)}`,
	'& button': {
		fontWeight: 'bold'
	}
};

const buttonWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	paddingBottom: pxToRem(15),
	'& button:first-child': {
		marginRight: pxToRem(15)
	}
};

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: '#181c19',
	opacity: 0.5,
	padding: `${pxToRem(10)} ${pxToRem(10)} 0 ${pxToRem(10)}`
};

const walletTransferButton: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#303331' : '#caf1dd')
};

export const styles = createStyles({
	walletTransferButton,
	walletsLogoContainer,
	walletsLogo,
	rulerWalletText,
	rulerPriceText,
	rulerNumberText,
	trashIcon,
	paymentTemplateContainer,
	TemplateButtonsWrapper,
	paymentTemplateButton,
	addFabButton,
	paymentTemplateText,
	footer,
	buttonWrapper,
	dialogContentText
});
