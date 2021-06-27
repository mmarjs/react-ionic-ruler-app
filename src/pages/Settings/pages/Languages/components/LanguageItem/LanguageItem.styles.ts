import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

const selectedIcon: CreateCSSProperties = {
	width: '30px',
	height: '30px',
	display: (props: any) => (props.selected ? 'block' : 'none')
};

const provider: CSSProperties = {
	padding: `0 ${pxToRem(20)}`
};

const itemTextRoot: CSSProperties = {
	borderBottom: '1px solid rgba(24, 28, 35, 0.05)',
	margin: 0,
	padding: `${pxToRem(10)} 0`
};
const itemTextPrimary: CreateCSSProperties = {
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};
const itemTextSecondary: CreateCSSProperties = {
	...font({
		fontSize: 10,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5')
};

export const styles = createStyles({
	provider,
	selectedIcon,
	itemTextRoot,
	itemTextPrimary,
	itemTextSecondary
});
