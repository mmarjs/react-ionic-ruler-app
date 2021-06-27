import { ButtonProps } from '@material-ui/core';
import { IIconProps } from 'components/Icon';

export type ColoredButtonProps = Omit<IButtonProps, 'colorType'>;

export type ButtonColorType = 'default' | 'black' | 'green' | 'lightGreen';

export interface IButtonProps extends Omit<ButtonProps, 'disableElevation' | 'size' | 'variant' | 'startIcon' | 'endIcon' | 'classes'> {
	className?: string;
	colorType?: ButtonColorType;
	href?: string;
	iconName?: IIconProps['iconName'];
	iconPosition?: 'left' | 'right';
	iconProps?: IIconProps;
	compact?: boolean;
	textColor?: string;
	backgroundColor?: string;
	hoveredTextColor?: string;
	hoveredBackgroundColor?: string;
	pressedTextColor?: string;
	pressedBackgroundColor?: string;
	disabledTextColor?: string;
	disabledBackgroundColor?: string;
}
