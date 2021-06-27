import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';
import isSubmitInvalidImage from './images/invalidate.svg';
import isSubmittingImage from './images/submitting.svg';
import validImage from './images/verified.svg';

const bannerBox: CreateCSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundImage: (props: any) =>
		props.state === 'progress'
			? `url(${isSubmittingImage})`
			: props.state === 'success'
			? `url(${validImage})`
			: `url(${isSubmitInvalidImage})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	height: pxToRem(110),
	width: pxToRem(325),
	margin: (props: any) =>
		props.state === 'success' ? `${pxToRem(15)} auto ${pxToRem(10)} auto` : `${pxToRem(25)} auto ${pxToRem(20)} auto`,
	'&> span': {
		whiteSpace: 'pre-line'
	}
};

const addButton: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff'),
	fontSize: pxToRem(15),
	color: '#00b559',
	fontWeight: 'bold',
	lineHeight: 1.67,
	padding: `${pxToRem(12)} 0 ${pxToRem(13)} 0`,
	textTransform: 'none',
	marginTop: pxToRem(20),
	borderRadius: pxToRem(15),
	'&:hover': {
		color: '#00b559',
		backgroundColor: (props: any) => (props.isDarkMode ? '#000' : 'rgba(0, 0, 0, 0.04)')
	}
};

const submitWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const bannerText: CreateCSSProperties = {
	fontSize: pxToRem(15),
	color: (props: any) => (props.state === 'progress' ? '#181c19' : '#ffffff'),
	fontWeight: 'bold',
	lineHeight: 1.67,
	textAlign: 'center',
	padding: `0 ${pxToRem(35)}`
};

const buttonWrapper: CSSProperties = {
	margin: `auto 0 ${pxToRem(20)} 0`
};

const submitButton: CSSProperties = {
	borderRadius: pxToRem(15),
	height: pxToRem(50),
	textTransform: 'none',
	fontWeight: 'bold',
	backgroundColor: '#00b559',
	marginTop: pxToRem(20),
	color: '#ffffff',
	'&:hover': {
		backgroundColor: 'rgba(0, 181, 89, 0.8)'
	}
};

const description: CreateCSSProperties = {
	fontSize: pxToRem(15),
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5) !important' : 'rgba(24, 28, 25, 0.5) !important'),
	fontWeight: 600,
	lineHeight: 1.67
};
export const styles = createStyles({
	bannerBox,
	addButton,
	submitWrapper,
	bannerText,
	description,
	submitButton,
	buttonWrapper
});
