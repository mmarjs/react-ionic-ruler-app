import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const addFundsWrapper: CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	paddingTop: pxToRem(15)
};

const TemplateButtonsWrapper: CSSProperties = {
	padding: `${pxToRem(10)} 0 ${pxToRem(35)} 0`,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	'& button': {
		...font({
			fontWeight: 600,
			lineHeight: 1.5,
			color: '#00b559'
		}),
		fontSize: pxToRem(10),
		width: 'fit-content',
		backgroundColor: 'transparent',
		borderRadius: pxToRem(200),
		padding: `${pxToRem(8)} ${pxToRem(15)} ${pxToRem(7)} ${pxToRem(15)}`,
		border: `solid ${pxToRem(2)} #f3f3f3`,
		marginRight: pxToRem(10),
		'& .MuiButton-label': {
			minHeight: 'unset'
		},
		'&.active': {
			backgroundColor: 'transparent !important',
			color: '#00b559',
			borderColor: '#00b559'
		},
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.2)',
			color: '#00b559'
		}
	}
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
	fontSize: pxToRem(10)
};

const textCenter: CSSProperties = {
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

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: '#181c19',
	opacity: 0.5,
	padding: `${pxToRem(10)} ${pxToRem(10)} 0 ${pxToRem(10)}`
};

const currencySymbol: CreateCSSProperties = {
	'&.MuiInputAdornment-root > p': {
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
	}
};

export const styles = createStyles({
	currencySymbol,
	addFundsWrapper,
	TemplateButtonsWrapper,
	walletType,
	insertAmount,
	selectItem,
	helperText,
	rulerPriceBonusButtonGroup,
	cardInputWrapper,
	cardCredentialWrapper,
	footer,
	textCenter,
	dialogContentText
});
