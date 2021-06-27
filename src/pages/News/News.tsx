import { List, makeStyles } from '@material-ui/core';
import { NewsItem } from './components';
import { Page } from 'components';
import { newsData } from './News.data';
import { styles } from './News.styles';
import { useIntl } from 'react-intl';
import React from 'react';
const useStyles = makeStyles(styles);

export const News: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();

	return (
		<Page title={formatMessage({ id: 'news.title' })} titleSize="large" noHorizontalContentPadding>
			<List className={classes.articleList}>
				{newsData.map((newsData, index) => (
					<NewsItem key={index} {...newsData} />
				))}
			</List>
		</Page>
	);
};
