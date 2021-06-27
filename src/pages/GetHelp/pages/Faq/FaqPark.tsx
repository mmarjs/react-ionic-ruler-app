import { Box, makeStyles } from '@material-ui/core';
import { Footer, Page, Text } from 'components';
import { styles } from './Faq.styles';
import clsx from 'clsx';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqPark: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="The trip is finished. How do I park?" titleSize="medium">
			<Box className={classes.container}>
				<Text variant="h6" className={clsx(classes.text, classes.content)}>
					Always make sure that you park the scooter outside pedestrian way Do not park in locations that are not permitted, which include,
					but are not limited to:
					<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
						<span className={classes.faqLi}>•</span>
						<span>The middle of bike or pedestrian pathways</span>
					</div>
					<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
						<span className={classes.faqLi}>•</span>
						<span>Hospital entrances</span>
					</div>
					<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
						<span className={classes.faqLi}>•</span>
						<span>Fire stations</span>
					</div>
					<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
						<span className={classes.faqLi}>•</span>
						<span>Inside gated communities</span>
					</div>
					<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
						<span className={classes.faqLi}>•</span>
						<span>Wheelchair ramps</span>
					</div>
					<div className={clsx(classes.text, classes.content, classes.faqContentItem)}>
						<span className={classes.faqLi}>•</span>
						<span>Any place where parking is not allowed by law </span>
					</div>
				</Text>
			</Box>
			<Footer leftIcon="support" leftText="Ruler Support" rightIcon="ride-history" rightText="Nov 24" />
		</Page>
	);
};
