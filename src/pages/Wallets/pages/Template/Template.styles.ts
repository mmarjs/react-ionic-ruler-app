import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const templateWrapper: CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	paddingTop: pxToRem(22)
};

const textField: CSSProperties = {
	marginBottom: pxToRem(32)
};

const selectItem: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	}),
	fontSize: pxToRem(15)
};

const saveButton: CSSProperties = {
	fontWeight: 'bold'
};

const currencySymbol: CreateCSSProperties = {
	'&.MuiInputAdornment-root > p': {
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
	}
};
export const styles = createStyles({
	currencySymbol,
	templateWrapper,
	textField,
	selectItem,
	saveButton
});
