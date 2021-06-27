import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, fontSmoothing } from 'styles';

const text = (inheritStyles: boolean = false): CreateCSSProperties => ({
	...font({}, inheritStyles),
	fontStretch: (props: any) => props.fontStretch,
	fontStyle: (props: any) => props.fontStyle,
	fontVariant: (props: any) => props.fontVariant,
	fontWeight: (props: any) => props.fontWeight,
	fontSize: (props: any) => props.fontSize,
	lineHeight: (props: any) => props.lineHeight,
	fontFamily: (props: any) => props.fontFamily,
	letterSpacing: (props: any) => props.letterSpacing,
	color: (props: any) =>
		props.color
			? props.active === false || props.active === undefined
				? props.color
				: '#fff'
			: props.isDarkMode && props.black === undefined
			? '#fff'
			: props.isDarkMode && props.black
			? 'rgba(255, 255, 255, 0.5)'
			: undefined,
	whiteSpace: (props: any) => (props.nowrap ? 'nowrap' : 'normal'),
	textDecoration: 'none',
	...fontSmoothing('antialiased'),
	textOverflow: 'ellipsis',
	overflow: 'hidden'
});

const paragraph: CSSProperties = {
	marginBottom: '1rem'
};

export const styles = (inheritStyles: boolean = false) =>
	createStyles({
		text: text(inheritStyles),
		paragraph
	});
