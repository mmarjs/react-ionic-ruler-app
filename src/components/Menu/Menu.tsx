import { Box, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, SwipeableDrawer, makeStyles } from '@material-ui/core';
import { IMenuProps } from './Menu.types';
import { Icon, IconButton } from 'components';
import { IntlShape, useIntl } from 'react-intl';
import { menuItems } from './Menu.data';
import { styles } from './Menu.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
const useStyles = makeStyles(styles);

export const Menu: React.FunctionComponent<IMenuProps> = ({ open, onOpen, onClose, menuItemClick }) => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const { formatMessage }: IntlShape = useIntl();

	const renderMenuList = (): JSX.Element => (
		<Box className={classes.menu} role="presentation" onClick={onClose} onKeyDown={onClose}>
			<List className={classes.list}>
				{menuItems.map((item, index) => (
					<ListItem key={item.text} button className={classes.listItem} onClick={(): void => menuItemClick(item.href)}>
						{/* ListItemIcon classname doesn't work??? */}
						<ListItemIcon className={classes.listItemIcon}>
							<Icon {...item.iconProps} />
						</ListItemIcon>

						<ListItemText
							primaryTypographyProps={{ className: classes.listItemTextPrimary }}
							primary={formatMessage({ id: item.text })}
							className={classes.listItemText}
						/>

						{index === 0 && (
							<ListItemSecondaryAction>
								<IconButton iconName="notification" colorType="black" />
							</ListItemSecondaryAction>
						)}
					</ListItem>
				))}
			</List>
			{/* {!loggedIn && (
				<Box className={classes.footer}>
					<GreenButton iconName="create-account" compact onClick={(): void => history.push('/welcome/create-account')}>
						{formatMessage({ id: 'welcome.button.create_account' })}
					</GreenButton>
				</Box>
			)} */}
		</Box>
	);

	return (
		<SwipeableDrawer
			anchor="left"
			open={open}
			onOpen={onOpen}
			onClose={onClose}
			PaperProps={{
				className: classes.menuPaper
			}}
		>
			{renderMenuList()}
		</SwipeableDrawer>
	);
};
