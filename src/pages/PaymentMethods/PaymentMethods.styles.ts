import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const submitWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const addPaymentMethodButton: CSSProperties = {
	marginTop: 'auto',
	fontWeight: 'bold'
};

const dialogContentText: CreateCSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5)'),
	padding: `${pxToRem(15)} 0`
};

const notRecommendedButton: CreateCSSProperties = {
	fontWeight: 'bold',
	backgroundColor: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	'& span': {
		color: (props: any) => (props.isDarkMode ? '#181c19' : '#fff')
	}
};
export const styles = createStyles({
	submitWrapper,
	dialogContentText,
	notRecommendedButton,
	addPaymentMethodButton
});
