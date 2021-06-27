import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const paymentMethodItemContainer: CSSProperties = {
	padding: `${pxToRem(20)} 0 ${pxToRem(15)}`
	// maxWidth: pxToRem(325),
	// margin: '0 auto'
};

const paymentMethodItem: CreateCSSProperties = {
	borderRadius: pxToRem(15),
	backgroundColor: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	position: 'relative',
	padding: `${pxToRem(25)} ${pxToRem(30)}`,
	display: 'flex',
	flexDirection: 'column',
	'& span': {
		color: (props: any) => (props.isDarkMode ? '#181c19' : '#fff')
	}
};

const trashIcon: CSSProperties = {
	position: 'absolute',
	top: pxToRem(10),
	right: pxToRem(10),
	backgroundColor: 'transparent',
	padding: 0,
	boxShadow: 'none',
	'&:hover': {
		backgroundColor: 'transparent',
		opacity: 0.7
	}
};

const cardNumberText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.33,
		letterSpacing: pxToRem(6.3)
		// color: 'rgba(255, 255, 255, 0.5)'
	}),
	fontSize: pxToRem(15),
	paddingTop: pxToRem(12),
	textAlign: 'left'
};

const cardTypeText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#ffffff'
	}),
	fontSize: pxToRem(15)
};

const cardNumberTextWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};
export const styles = createStyles({
	cardNumberTextWrapper,
	paymentMethodItemContainer,
	paymentMethodItem,
	cardTypeText,
	cardNumberText,
	trashIcon
});
