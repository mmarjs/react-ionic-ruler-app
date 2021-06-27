import { DEFAULT_ICON_BUTTON_SIZE } from './IconButton.variables';
import { GoBackIconButtonProps, IIconButtonProps, SocialIconButtonProps } from './IconButton.types';
import { IIconProps, Icon } from 'components';
import { IconButton as MuiIconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { styles } from './IconButton.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const IconButton: React.FunctionComponent<IIconButtonProps> = ({
	href,
	iconName,
	colorType,
	iconProps,
	size,
	width = size,
	height = size,
	noShadow,
	outlined,
	className,
	label,
	black,
	...restProps
}) => {
	if (!(iconName || iconProps)) {
		console.warn('`IconButton` requires `iconName` or `iconProps` to be specified.');
	}
	const isDarkMode = useDarkMode();

	const classes = useStyles({
		width,
		height,
		iconWidth: iconProps?.width,
		iconHeight: iconProps?.height,
		noShadow,
		outlined,
		label,
		isDarkMode: isDarkMode,
		black
	});

	iconProps = Object.assign({}, { iconName, colorType }, iconProps) as IIconProps;

	// TODO: Add `href` property.
	return (
		<MuiIconButton size="medium" className={clsx(classes.iconButton, className)} {...restProps}>
			<Icon {...iconProps} />
			{label && <Typography className={classes.iconLabel}>{label}</Typography>}
		</MuiIconButton>
	);
};

IconButton.defaultProps = {
	size: DEFAULT_ICON_BUTTON_SIZE
};

export const SocialIconButton: React.FunctionComponent<SocialIconButtonProps> = props => <IconButton noShadow outlined {...props} />;

export const GoBackIconButton: React.FunctionComponent<GoBackIconButtonProps> = props => (
	<IconButton
		iconProps={{
			iconName: 'back'
		}}
		{...props}
	/>
);

GoBackIconButton.defaultProps = {
	noShadow: true
};
