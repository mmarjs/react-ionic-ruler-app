import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const paymentMethodItemList: CSSProperties = {
	paddingTop: pxToRem(30)
};

const listItem: CreateCSSProperties = {
	borderRadius: pxToRem(15),
	marginBottom: pxToRem(15),
	border: (props: any) => (props.isDarkMode ? `solid ${pxToRem(2)} rgba(255, 255, 255, 0.1)` : `solid ${pxToRem(2)} #f3f3f3`),
	padding: pxToRem(20),
	'& .MuiListItemIcon-root': {
		minWidth: pxToRem(30)
	},
	'& .MuiListItemText-primary': {
		...font({
			fontWeight: 'bold',
			lineHeight: 1.67,
			color: '#181c19'
		}),
		fontSize: pxToRem(15),
		textAlign: 'center',
		marginLeft: pxToRem(-30)
	},
	'&.active': {
		borderColor: '#00b559'
	},
	'&:hover': {
		borderColor: '#00b559'
	}
};

const addPaymentMethodButton: CSSProperties = {
	marginTop: 'auto',
	fontWeight: 'bold'
};

const footer: CSSProperties = {
	'& button': {
		fontWeight: 'bold',
		marginTop: pxToRem(30)
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

const cardInputWrapper: CSSProperties = {
	paddingTop: pxToRem(25),
	flex: 1,
	'& .MuiTextField-root': {
		marginBottom: pxToRem(35)
	}
};
const paymentMethodTypeText: CreateCSSProperties = {
	'& > .MuiListItemText-primary': {
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
	}
};
export const styles = createStyles({
	paymentMethodTypeText,
	paymentMethodItemList,
	listItem,
	addPaymentMethodButton,
	footer,
	cardCredentialWrapper,
	cardInputWrapper
});
