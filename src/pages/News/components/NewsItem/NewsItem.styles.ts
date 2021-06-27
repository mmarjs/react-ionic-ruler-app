import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const articleTitle: CSSProperties = {
	display: '-webkit-box',
	boxOrient: 'vertical',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	width: pxToRem(245),
	lineClamp: 2,
	marginBottom: pxToRem(5),
	...font({
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal',
		color: '#181c19'
	}),
	fontSize: pxToRem(15)
};

const articleListItem: CSSProperties = {
	display: 'flex !important',
	flexDirection: 'row',
	padding: `${pxToRem(15)} ${pxToRem(20)}`,
	marginBottom: pxToRem(11)
};

const articleContent: CreateCSSProperties = {
	display: '-webkit-box',
	boxOrient: 'vertical',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	width: pxToRem(245),
	lineClamp: 3,
	...font({
		fontSize: 10,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5) !important' : 'rgba(24, 28, 25, 0.5) !important')
};

const imageBox: CSSProperties = {
	marginRight: pxToRem(20)
};

const articleDescription: CreateCSSProperties = {
	display: 'flex !important',
	justifyContent: 'space-between',
	flexDirection: 'row',
	marginBottom: pxToRem(5),
	...font({
		fontSize: 10,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5) !important' : 'rgba(24, 28, 25, 0.5) !important')
};

const articleTime: CSSProperties = {
	whiteSpace: 'nowrap'
};

const platformText: CSSProperties = {
	color: '#00b559'
};

export const styles = createStyles({
	imageBox,
	articleListItem,
	articleTitle,
	articleContent,
	articleDescription,
	articleTime,
	platformText
});
