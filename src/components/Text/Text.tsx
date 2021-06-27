import { ITextProps, ParagraphProps, TextStyles, TitleProps } from './Text.types';
import { Typography, makeStyles } from '@material-ui/core';
import { styles } from './Text.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
import clsx from 'clsx';

export const createTextStyles = (textStyles: TextStyles): TextStyles => textStyles;

export const Title: React.FunctionComponent<TitleProps> = props => {
	const isDarkMode = useDarkMode();

	return <Text block {...props} color={isDarkMode ? '#fff' : '#181c19'} />;
};

Title.defaultProps = {
	component: 'h1',
	fontSize: 32,
	fontWeight: 'bold',
	fontStretch: 'normal',
	lineHeight: 1.5,
	letterSpacing: 'normal'
};

export const Paragraph: React.FunctionComponent<ParagraphProps> = props => <Text component="p" block {...props} />;

export const Text: React.FunctionComponent<ITextProps> = React.memo(({ textStyles, ...restProps }) => {
	const props = { ...textStyles, ...restProps };
	const {
		active,
		black,
		component,
		block,
		inline,
		align,
		display = block ? (inline ? ('inline-block' as 'block') : 'block') : inline ? 'inline' : undefined,
		gutterBottom,
		noWrap,
		paragraph,
		variant,
		variantMapping,
		fontStretch,
		fontStyle,
		fontVariant,
		fontWeight,
		fontSize,
		lineHeight,
		fontFamily,
		letterSpacing,
		color,
		inheritStyles,
		className,
		children
	} = props;

	const isDarkMode = useDarkMode();
	const _makeStyles = React.useCallback(() => makeStyles(styles(inheritStyles)), [inheritStyles]);
	const useStyles = _makeStyles();

	const classes = useStyles({
		fontStretch,
		fontStyle,
		fontVariant,
		fontWeight,
		fontSize,
		lineHeight,
		fontFamily,
		letterSpacing,
		isDarkMode: isDarkMode,
		color,
		black,
		active
	});

	const isParagraph = component === 'p' || paragraph;

	return (
		<Typography
			component={component as any}
			align={align}
			display={display}
			gutterBottom={gutterBottom}
			noWrap={noWrap}
			paragraph={paragraph}
			variant={variant}
			variantMapping={variantMapping}
			className={clsx(
				classes.text,
				{
					[classes.paragraph]: isParagraph
				},
				className
			)}
		>
			{children}
		</Typography>
	);
});

Text.defaultProps = {
	component: 'span'
};
