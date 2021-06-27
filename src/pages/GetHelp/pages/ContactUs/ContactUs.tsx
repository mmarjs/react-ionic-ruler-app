import { Box, Paper, Typography, makeStyles } from '@material-ui/core';
import { Icon, LightGreenButton, Page } from 'components';
import { styles } from './ContactUs.styles';
import { useDarkMode } from 'hooks/UseDarkMode';

import { FormattedMessage, useIntl } from 'react-intl';
import React from 'react';
const useStyles = makeStyles(styles);
const info = {
	phoneNumber: '+123 456 789 00',
	email: 'ruleremail@gmail.com',
	address: 'Na Hrebenkach 2, 150 00 praha 5'
};

export const ContactUs: React.FunctionComponent = () => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const { formatMessage } = useIntl();

	return (
		<Page title={formatMessage({ id: 'get_help.contact_us.title' })} titleSize="medium">
			<Paper elevation={0} className={classes.container}>
				<Box className={classes.li}>
					<Icon iconName="support" color="#00b559" />
					<Typography variant="h6">{info.phoneNumber}</Typography>
				</Box>
				<Box className={classes.li}>
					<Icon iconName="invite" color="#00b559" />
					<Typography variant="h6">{info.email}</Typography>
				</Box>
				<div>
					<Typography variant="h6" className={classes.content}>
						<FormattedMessage id="get_help.contact_us.email_description" />
					</Typography>
				</div>
				<Box className={classes.li}>
					<Icon iconName="point" color="#00b559" />
					<Typography variant="h6">{info.address}</Typography>
				</Box>
				<div>
					<Typography variant="h6" className={classes.content}>
						<FormattedMessage id="get_help.contact_us.address_description" />
					</Typography>
				</div>
			</Paper>
			<div className={classes.buttonWrapper}>
				<LightGreenButton className={classes.bigButton} iconName="support" onClick={() => window.open('tel:+123 456 789 00', '_system')}>
					<FormattedMessage id="get_help.contact_us.button.contact_your_insurance" />
				</LightGreenButton>
				<LightGreenButton
					className={classes.bigButton}
					iconName="invite"
					onClick={(): Window | null => window.open('mailto:ruleremail@gmail.com', '_system')}
				>
					<FormattedMessage id="get_help.contact_us.button.contact_us_via_email" />
				</LightGreenButton>
			</div>
		</Page>
	);
};
