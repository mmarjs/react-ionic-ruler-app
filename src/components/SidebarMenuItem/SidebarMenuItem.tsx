import { Box, Typography, makeStyles } from '@material-ui/core';
import { ISidebarMenuItemProps } from './SidebarMenuItem.types';
import { styles } from './SidebarMenuItem.styles';
import { useHistory } from 'react-router-dom';
import React from 'react';
const useStyles = makeStyles(styles);

export const SidebarMenuItem: React.FunctionComponent<ISidebarMenuItemProps> = ({ href, image, title, children, onClick, className }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Box
			className={classes.provider}
			onClick={(e: React.MouseEvent<HTMLElement>): void => {
				href && history.push(href);
				onClick && onClick(e);
			}}
		>
			<Box className={classes.li}>
				{image}
				<Typography className={className} variant="h6">
					{title}
				</Typography>
			</Box>
			<Box className={classes.text}>{children}</Box>
		</Box>
	);
};
