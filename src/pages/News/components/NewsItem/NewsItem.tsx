import { Box, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { INewsItemProps } from './NewsItem.types';
import { Image, Text } from 'components';
import { Link as RouterLink } from 'react-router-dom';
import { styles } from './NewsItem.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
const useStyles = makeStyles(styles);

export const NewsItem: React.FunctionComponent<INewsItemProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });

	return (
		<ListItem className={classes.articleListItem} button component={RouterLink} to={`/news/${props.socialName}`}>
			<Image className={classes.imageBox} src={props.imageUrl} alt={props.altName} rounded width={70} />
			<ListItemText>
				<Text className={classes.articleDescription}>
					<Box className={classes.platformText}>{props.socialName}</Box>
					<Box className={classes.articleTime}>{props.timeHistory}</Box>
				</Text>
				<Text className={classes.articleTitle} block>
					{props.title}
				</Text>
				<Text className={classes.articleContent} block>
					{props.description}
				</Text>
			</ListItemText>
		</ListItem>
	);
};
