import { CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

const button: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.active ? '#00b559' : 'transparent'),
	position: 'relative',
	width: pxToRem(100),
	height: pxToRem(70),
	borderRadius: pxToRem(15),
	marginRight: pxToRem(18),
	border: (props: any) => `solid ${pxToRem(2)} ${props.active ? '#00b559' : props.isDarkMode ? '#303331' : '#f3f3f3'}`,
	'&:hover': {
		backgroundColor: (props: any) => (props.active ? 'rgb(0, 171, 85)' : 'rgba(0, 0, 0, 0.2)')
	}
};

const priceText: CreateCSSProperties = {
	...font({
		fontWeight: 'bold',
		lineHeight: 1.67
	}),
	color: (props: any) => (props.active ? '#ffffff' : '#181c19'),
	fontSize: pxToRem(15)
};

const percentText: CreateCSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5
	}),
	color: (props: any) => (props.active ? '#ffffff' : '#00b559'),
	borderRadius: pxToRem(15),
	padding: `0 ${pxToRem(4)} 0 ${pxToRem(5)}`,
	backgroundColor: (props: any) => (props.active ? 'rgba(202, 241, 221, 0.2)' : 'transparent'),
	position: 'absolute',
	top: pxToRem(6),
	right: pxToRem(6),
	fontSize: pxToRem(10)
};

export const styles = createStyles({
	button,
	priceText,
	percentText
});
