import { IIconProps, Icon } from 'components';
import { ILinkProps, LinkColorType } from './Link.types';
import { getColorFromColorType } from './getColorFromColorType';
import { makeStyles } from '@material-ui/core';
import { styles } from './Link.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Link: React.FunctionComponent<ILinkProps> = ({ href, iconProps, iconName, colorType, onClick, className, children }) => {
	iconProps = Object.assign({}, { iconName, colorType }, iconProps) as IIconProps;
	const isDarkMode = useDarkMode();
	const { linkColor, hoveredLinkColor, pressedLinkColor } = getColorFromColorType(iconProps.colorType as LinkColorType, isDarkMode);
	const classes = useStyles({
		linkColor,
		hoveredLinkColor,
		pressedLinkColor,
		isDarkMode: isDarkMode
	});

	// if (onClick) {
	// 	onClick = e => {
	// 		e.preventDefault();

	// 		return onClick?.(e);
	// 	};
	// }

	return (
		<a className={clsx(classes.link, className)} href={href} {...(onClick && { onClick: onClick })}>
			{iconProps.iconName && <Icon className={classes.linkIcon} primaryColor="currentColor" {...iconProps} />}
			<span>{children}</span>
		</a>
	);
};

Link.defaultProps = {
	colorType: 'default'
};
