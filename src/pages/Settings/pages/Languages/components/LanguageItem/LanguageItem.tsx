import { ILanguageItemProps } from './LanguageItem.types';
import { Icon } from 'components';
import { ListItem, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import { styles } from './LanguageItem.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
const useStyles = makeStyles(styles);

export const LanguageItem: React.FunctionComponent<ILanguageItemProps> = ({ title, text, selected, onClick, code }) => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode, selected });

	return (
		<ListItem
			classes={{ root: classes.provider }}
			button
			onClick={(event: React.MouseEvent<HTMLElement>): void => {
				event.preventDefault();
				onClick?.(event, code);
			}}
		>
			<ListItemText
				classes={{ root: classes.itemTextRoot, primary: classes.itemTextPrimary, secondary: classes.itemTextSecondary }}
				primary={title}
				secondary={text}
			/>
			<ListItemSecondaryAction>
				<Icon className={classes.selectedIcon} color="#00b559" iconName="well-done-checked" />
			</ListItemSecondaryAction>
		</ListItem>
	);
};
