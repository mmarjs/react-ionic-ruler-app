import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const link: CreateCSSProperties = {
	display: 'inline-flex',
	alignItems: 'center',
	cursor: 'pointer',
	textDecoration: 'none',
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal'
	}),
	color: (props: any) => props.linkColor,
	'&:hover': {
		color: (props: any) => props.hoveredLinkColor
	},
	'&:active': {
		color: (props: any) => props.pressedLinkColor
	}
};

const linkIcon: CSSProperties = {
	marginRight: pxToRem(5)
};

export const styles = createStyles({
	link,
	linkIcon
});
