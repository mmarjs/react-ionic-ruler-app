import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const addFundsWrapper: CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	paddingTop: pxToRem(22)
};

const walletType: CSSProperties = {
	marginBottom: pxToRem(20)
};

const insertAmount: CSSProperties = {
	marginBottom: pxToRem(35)
};

const selectItem: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	}),
	fontSize: pxToRem(15)
};

const rulerPriceBonusButtonGroup: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: `${pxToRem(10)} 0 ${pxToRem(25)} 0`
};

const helperText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5,
		color: 'rgba(24, 28, 25, 0.5)'
	}),
	fontSize: pxToRem(10),
	textAlign: 'center'
};

const cardInputWrapper: CSSProperties = {
	paddingTop: pxToRem(25),
	flex: 1,
	'& .MuiTextField-root': {
		marginBottom: pxToRem(35)
	}
};

const cardCredentialWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	'& .MuiTextField-root:first-child': {
		marginRight: pxToRem(17.5)
	},
	'& .MuiTextField-root:last-child': {
		marginLeft: pxToRem(17.5)
	}
};

const footer: CSSProperties = {
	'& button': {
		fontWeight: 'bold',
		marginTop: pxToRem(30)
	}
};

const currencySymbol: CreateCSSProperties = {
	'&.MuiInputAdornment-root > p': {
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
	}
};
export const styles = createStyles({
	currencySymbol,
	addFundsWrapper,
	walletType,
	insertAmount,
	selectItem,
	helperText,
	rulerPriceBonusButtonGroup,
	cardInputWrapper,
	cardCredentialWrapper,
	footer
});
