import { GreenIcon, Image, Switch } from 'components';
import { ISwitchListItemProps } from './SwitchListItem.types';
import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { styles } from './SwitchListItem.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';

const useStyles = makeStyles(styles);

export const SwitchListItem: React.FunctionComponent<ISwitchListItemProps> = ({
	title,
	checked,
	disabled,
	onChange,
	name,
	iconName,
	imageUrl
}) => {
	const isDarkMode = useDarkMode();
	const hasIcon = iconName || imageUrl;
	const classes = useStyles({ disabled, hasIcon, isDarkMode: isDarkMode });

	return (
		<ListItem className={classes.li}>
			{(iconName || imageUrl) && (
				<ListItemIcon className={classes.iconContainer}>
					{iconName && <GreenIcon iconName={iconName} />}
					{imageUrl && <Image src={imageUrl} className={classes.image} width={20} height={20} alt={name} />}
				</ListItemIcon>
			)}

			<ListItemText className={classes.switchLabel}>{title}</ListItemText>
			<Switch checked={checked} onChange={onChange} name={name} disabled={disabled} />
		</ListItem>
	);
};
