import { ColoredButtonProps, IButtonProps } from './Button.types';
import { IIconProps, Icon } from 'components';
import { Button as MuiButton } from '@material-ui/core';
import { getColorFromColorType } from './getColorFromColorType';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Button.styles';
import { useDarkMode } from 'hooks/UseDarkMode';

import React from 'react';

const useStyles = makeStyles(styles);

export const Button: React.FunctionComponent<IButtonProps> = ({
	colorType,
	textColor,
	backgroundColor,
	hoveredTextColor,
	hoveredBackgroundColor,
	pressedTextColor,
	pressedBackgroundColor,
	disabledTextColor = textColor,
	disabledBackgroundColor,
	href,
	iconPosition,
	iconName,
	iconProps = {},
	compact,
	children,
	className,
	...restProps
}) => {
	iconProps = Object.assign({}, iconProps, { iconName }) as IIconProps;
	const hasIcon = iconProps?.iconName;
	const isDarkMode = useDarkMode();
	const tempTextColor = textColor ?? getColorFromColorType(colorType!, 'text', isDarkMode);
	const tempBackgroundColor = backgroundColor ?? getColorFromColorType(colorType!, 'background', isDarkMode);
	const tempHoveredBackgroundColor =
		hoveredBackgroundColor ?? (getColorFromColorType(colorType!, 'hoveredBackground', isDarkMode) || tempBackgroundColor);
	const classes = useStyles({
		hasIcon,
		compact,
		textColor: tempTextColor,
		backgroundColor: tempBackgroundColor,
		hoveredTextColor: hoveredTextColor ?? getColorFromColorType(colorType!, 'text', isDarkMode),
		hoveredBackgroundColor: tempHoveredBackgroundColor,
		pressedTextColor: pressedTextColor ?? getColorFromColorType(colorType!, 'text', isDarkMode),
		pressedBackgroundColor:
			pressedBackgroundColor ?? (getColorFromColorType(colorType!, 'hoveredBackground', isDarkMode) || tempHoveredBackgroundColor),
		disabledTextColor: disabledTextColor ?? tempTextColor,
		disabledBackgroundColor:
			disabledBackgroundColor ?? (getColorFromColorType(colorType!, 'disabledBackground', isDarkMode) || tempBackgroundColor),
		isDarkMode: isDarkMode
	});

	return (
		<MuiButton
			classes={{ root: classes.button, label: classes.buttonLabel }}
			className={className}
			disableElevation
			size="medium"
			variant="contained"
			href={href}
			{...restProps}
		>
			{hasIcon && iconPosition !== 'right' && <Icon {...iconProps} />}
			<span className={classes.buttonText}>{children}</span>
			{hasIcon && iconPosition === 'right' && <Icon {...iconProps} />}
		</MuiButton>
	);
};

Button.defaultProps = {
	colorType: 'default',
	fullWidth: true
};

export const BlackButton: React.FunctionComponent<ColoredButtonProps> = props => <Button colorType="black" {...props} />;

export const GreenButton: React.FunctionComponent<ColoredButtonProps> = props => <Button colorType="green" {...props} />;

export const LightGreenButton: React.FunctionComponent<ColoredButtonProps> = props => <Button colorType="lightGreen" {...props} />;
