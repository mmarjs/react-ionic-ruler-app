import { Box, makeStyles } from '@material-ui/core';
import { Footer, Page, Text } from 'components';
import { styles } from './Faq.styles';
import clsx from 'clsx';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqPause: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="How do I pause a trip?" titleSize="medium">
			<Box className={classes.container}>
				<Text variant="h6" className={clsx(classes.text, classes.content)}>
					In case you want to ensure that no one else cannot use your vehicle while you are taking a small stop in the ride, you can simply
					pause your ride. It is important to note that you will continue to be charged per minute while your ride is paused.
					<br />
					<br />
					In order to stop being charged for your ride, you will need to tap “End Ride”. However, this will release the vehicle for others
					to use.
					<br />
					<br />
					Please do not forget to end your ride when you are finished! You will continue to be charged if you do not end the ride.
				</Text>
			</Box>
			<Footer leftIcon="support" leftText="Ruler Support" rightIcon="ride-history" rightText="Nov 24" />
		</Page>
	);
};
