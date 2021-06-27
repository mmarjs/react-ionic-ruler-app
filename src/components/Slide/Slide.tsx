import { Box, makeStyles } from '@material-ui/core';
import { ISlideProps } from './Slide.types';
import { IonSlide } from '@ionic/react';
import { Text, Title } from 'components/Text';
import { styles } from './Slide.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyle = makeStyles(styles);

export const Slide: React.FunctionComponent<ISlideProps> = props => {
	const { formatMessage } = useIntl();
	const { slide } = props;

	const isDarkMode = useDarkMode();
	const classes = useStyle({ imageStyle: slide.style, index: props.slide.index });

	return (
		<IonSlide className={classes.slide}>
			<Box style={slide.style} className={classes.imageContainer}>
				<img src={isDarkMode ? slide.imageDark : slide.imageLight} alt={slide.title} />
			</Box>
			<div className={classes.slideContent}>
				<Title className={classes.title}>{formatMessage({ id: slide.title })}</Title>
				<Text className={classes.description}>{formatMessage({ id: slide.description })}</Text>
			</div>
		</IonSlide>
	);
};
