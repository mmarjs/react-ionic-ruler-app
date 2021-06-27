import { CSSFontProperties } from 'types';
import { CSSProperties } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, DEFAULT_FONT_SIZE, DEFAULT_TEXT_COLOR } from './variables';
import { initial, responsiveFontSize } from './functions';
import supports from 'css-supports';

export const fontSmoothing = (
	fontSmoothing: CSSProperties['MozOsxFontSmoothing'] | CSSProperties['WebkitFontSmoothing']
): CSSProperties => ({
	MozOsxFontSmoothing: fontSmoothing,
	WebkitFontSmoothing: fontSmoothing
});

export function dropShadow(shadow: string): CSSProperties {
	const boxShadow = shadow;
	const dropShadow = `drop-shadow(${shadow})`;

	return supports('filter', dropShadow) ? { filter: dropShadow } : { boxShadow };
}

export const font = (
	{ fontStretch, fontStyle, fontVariant, fontWeight, fontSize, lineHeight, fontFamily, letterSpacing, color }: CSSFontProperties = {},
	inherit: boolean = false
): CSSFontProperties => ({
	fontStretch: initial(fontStretch, inherit ? 'inherit' : 'normal'),
	fontStyle: initial(fontStyle, inherit ? 'inherit' : 'normal'),
	fontVariant: initial(fontVariant, inherit ? 'inherit' : 'normal'),
	fontWeight: initial(fontWeight, inherit ? 'inherit' : 'normal'),
	fontSize: responsiveFontSize(initial(fontSize, inherit ? 'inherit' : DEFAULT_FONT_SIZE)!),
	lineHeight: initial(lineHeight, inherit ? 'inherit' : 'normal'),
	fontFamily: initial(fontFamily, inherit ? 'inherit' : DEFAULT_FONT_FAMILY),
	letterSpacing: initial(letterSpacing, inherit ? 'inherit' : 'normal'),
	color: initial(color, inherit ? 'inherit' : DEFAULT_TEXT_COLOR)
});
