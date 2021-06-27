import { Box, makeStyles } from '@material-ui/core';
import { Footer, Page, Text } from 'components';
import { styles } from './Faq.styles';
import clsx from 'clsx';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqFinding: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="Finding a bike or vehicle" titleSize="medium">
			<Box className={classes.container}>
				<Text variant="h6" className={clsx(classes.text, classes.content)}>
					To find a bike or vehicle, simply open the Ruler app and you would see all available vehicles/bikes near you. Visit the respective
					place and that’s it. You are all set to star your ride.
				</Text>
			</Box>
			<Footer leftIcon="support" leftText="Ruler Support" rightIcon="ride-history" rightText="Nov 24" />
		</Page>
	);
};
