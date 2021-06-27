import { Divider, Page } from 'components';
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { styles } from './SafetyRegulations.styles';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

const items = [
	{
		title: 'get_help.regulations.menu.bike',
		href: '/get-help/regulations-bike'
	},
	{
		title: 'get_help.regulations.menu.car',
		href: '/get-help/regulations-car'
	},
	{
		title: 'get_help.regulations.menu.scooter',
		href: '/get-help/regulations-scooter'
	}
];

export const SafetyRegulations: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();

	return (
		<Page title="Safety regulations" titleSize="medium">
			<List className={classes.list}>
				{items.map((item, index) => (
					<div key={index}>
						<ListItem className={classes.listItem} component={RouterLink} to={item.href}>
							<ListItemText primary={formatMessage({ id: item.title })} classes={{ primary: classes.text }} />
						</ListItem>
						<Divider />
					</div>
				))}
			</List>
		</Page>
	);
};
