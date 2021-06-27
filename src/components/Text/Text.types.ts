import { CSSFontProperties } from 'types';
import { TypographyProps } from '@material-ui/core';

export type TextStyles = Omit<ITextProps, 'textStyles'>;

export interface ITextProps extends CSSFontProperties, Omit<TypographyProps, 'color'> {
	className?: string;
	component?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string;
	block?: boolean;
	inline?: boolean;
	textStyles?: TextStyles;
	inheritStyles?: boolean;
	black?: boolean;
	active?: boolean;
}

export type TitleProps = Omit<ITextProps, 'block'>;

export type ParagraphProps = Omit<ITextProps, 'component' | 'block'>;
