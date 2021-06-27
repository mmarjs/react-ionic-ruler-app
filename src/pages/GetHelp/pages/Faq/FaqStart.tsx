import { Box, makeStyles } from '@material-ui/core';
import { Footer, Page, Text } from 'components';
import { styles } from './Faq.styles';
import clsx from 'clsx';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqStart: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="I have unlocked the scooter. How can I start the ride?" titleSize="medium">
			<Box className={classes.container}>
				<Text variant="h6" className={clsx(classes.text, classes.content)}>
					To start your scooter ride, place one foot firmly on the baseboard and use your other foot to push off against the ground a few
					times. Once you’ve gained some speed, press on the throttle near your right thumb to accelerate. Familiarize yourself with the
					throttle and squeeze the hand brake to slow down when needed.
				</Text>
			</Box>
			<Footer leftIcon="support" leftText="Ruler Support" rightIcon="ride-history" rightText="Nov 24" />
		</Page>
	);
};
