import { BUTTON_LIGHT_GREEN_COLOR_TYPE_BACKGROUND_COLOR } from 'components/Button/Button.variables';
import { ColoredIconProps, CommonIcon, IIconProps } from './Icon.types';
import { DEFAULT_ICON_SIZE } from './Icon.variables';
import { ReactSVG } from 'react-svg';
import { getColorFromColorType } from './getColorFromColorType';
import { makeStyles } from '@material-ui/core';
import { styles } from './Icon.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Icon: React.FunctionComponent<IIconProps> = React.memo(
	({
		iconName,
		colorType,
		className,
		size,
		width = size,
		height = size,
		rotate,
		color,
		fillColor,
		strokeColor,
		primaryColor,
		primaryFillColor,
		primaryStrokeColor,
		secondaryColor,
		secondaryFillColor,
		secondaryStrokeColor,
		black
	}) => {
		const isDarkMode = useDarkMode();

		iconName = iconName.trim().toLowerCase();

		if (iconName === CommonIcon.Forward) {
			iconName = CommonIcon.Back;
			rotate = (rotate || 0) + 180;
		} else if (iconName === CommonIcon.DamagedVehicle && primaryColor === secondaryColor) {
			// This is an unsightly fix for the tires of the damaged car
			secondaryColor = BUTTON_LIGHT_GREEN_COLOR_TYPE_BACKGROUND_COLOR;
		}

		let tempPrimaryColor = primaryColor;

		if (!primaryColor || primaryColor === 'black') tempPrimaryColor = getColorFromColorType(colorType!, 'primary', isDarkMode, black);
		const tempSecondaryColor = secondaryColor ?? getColorFromColorType(colorType!, 'secondary', isDarkMode, black);

		const classes = useStyles({
			width,
			height,
			rotate,
			color,
			fillColor,
			strokeColor,
			primaryColor: tempPrimaryColor,
			primaryFillColor,
			primaryStrokeColor,
			secondaryColor: tempSecondaryColor,
			secondaryFillColor,
			secondaryStrokeColor
		});
		const [iconPath, setIconPath] = React.useState<string>('');

		React.useEffect(() => {
			import(`./icons/${iconName}-icon.svg`)
				.then(({ default: iconPath }) => {
					if (iconPath) {
						setIconPath(iconPath);
					}
				})
				.catch(() => console.warn(`No icon with the name \`${iconName}\` (\`${iconName}-icon.svg\`) was found.`));
		}, [iconName]);

		return <ReactSVG wrapper="div" className={clsx(classes.icon, className)} src={iconPath} />;
	}
);

Icon.defaultProps = {
	size: DEFAULT_ICON_SIZE,
	colorType: 'default'
};

export const BlackIcon: React.FunctionComponent<ColoredIconProps> = props => <Icon colorType="black" {...props} />;

export const GreenIcon: React.FunctionComponent<ColoredIconProps> = props => <Icon colorType="green" {...props} />;

export const WhiteIcon: React.FunctionComponent<ColoredIconProps> = props => <Icon colorType="white" {...props} />;
