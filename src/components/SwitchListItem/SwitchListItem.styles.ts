import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

const li: CreateCSSProperties = {
	alignItems: (props: any) => (props.hasIcon ? 'center' : 'flex-start'),
	padding: `${pxToRem(10)} 0`
};

const switchLabel: CreateCSSProperties = {
	'& span': {
		...font({
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.67,
			letterSpacing: 'normal'
		}),
		fontSize: pxToRem(15),
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
		opacity: (props: any) => (props.disabled ? 0.5 : 1)
	},
	margin: 0
};

const iconContainer: CSSProperties = {
	minWidth: pxToRem(40)
};

const image: CSSProperties = {
	marginRight: 'auto',
	padding: pxToRem(5),
	boxSizing: 'content-box'
};
export const styles = createStyles({
	li,
	switchLabel,
	iconContainer,
	image
});
