import { Box, Paper, makeStyles } from '@material-ui/core';
import { Footer, Image, Page, Text } from 'components';
import { INewsDetailProps } from './NewsDetail.types';
import { sampleNews } from './NewsDetail.data';
import { styles } from './NewsDetail.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

export const NewsDetail: React.FunctionComponent<INewsDetailProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const { formatMessage } = useIntl();

	return (
		<Page className={classes.detailContainer} headerLink={formatMessage({ id: 'news-detail.text.open_in_browser' })}>
			<Paper elevation={0} className={classes.detailContainer}>
				<Image src={sampleNews.imageUrl} alt="vehicleImage" className={classes.vehicleImage} rounded fullWidth />
				<Box className={classes.title}>
					<Text className={classes.titleTxt}>{sampleNews.title}</Text>
				</Box>
				<Text className={classes.descriptionText}>{sampleNews.description}</Text>
			</Paper>
			<Footer leftIcon="instagram" leftText={sampleNews.socialName} rightIcon="ride-history" rightText={sampleNews.timeHistory} />
		</Page>
	);
};
