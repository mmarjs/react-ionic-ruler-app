import { CSSProperties } from '@material-ui/styles';
import { Theme, createStyles } from '@material-ui/core/styles';
import { pxToRem } from 'styles';

const root = (theme: Theme): CSSProperties => ({
	width: pxToRem(52),
	height: pxToRem(31),
	padding: 0,
	marginTop: pxToRem(-1)
});

const switchBase = (theme: Theme): CSSProperties => ({
	padding: pxToRem(1),
	'&$checked': {
		transform: 'translateX(20px)',
		color: theme.palette.common.white,
		'& + $track': {
			backgroundColor: '#00b559',
			opacity: 1,
			border: 'none'
		}
	},
	'&$focusVisible $thumb': {
		color: '#00b559',
		border: '6px solid #fff'
	},
	'&$disabled': {
		color: '#ffffff'
	}
});

const thumb: CSSProperties = {
	width: pxToRem(29),
	height: pxToRem(28)
	// boxShadow: '0 3px 8px 0 rgba(0, 0, 0, 0.15), 0 3px 1px 0 rgba(0, 0, 0, 0.06)'
};

const track: CSSProperties = {
	borderRadius: pxToRem(31 / 2),
	border: 'none',
	backgroundColor: 'rgba(120, 120, 128, 0.16)',
	opacity: 1,
	transition: 'none'
};

export const styles = (theme: Theme) =>
	createStyles({
		root: root(theme),
		switchBase: switchBase(theme),
		thumb,
		track,
		// `checked` and `focusVisible` are required to be an empty object.
		checked: {},
		disabled: {},
		focusVisible: {}
	});
