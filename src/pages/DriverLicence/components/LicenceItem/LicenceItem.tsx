import { Box, makeStyles } from '@material-ui/core';
import { ILicenceItemProps } from './LicenceItem.types';
import { IconButton, Image } from 'components';
import { styles } from './LicenceItem.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';

const useStyles = makeStyles(styles);

export const LicenceItem: React.FunctionComponent<ILicenceItemProps> = ({ imageSrc, handleRemoveClick }) => {
	const isDarkMode = useDarkMode();
	const classes = useStyles();

	return (
		<Box className={classes.content}>
			<Image className={classes.image} src={imageSrc} />
			<IconButton iconProps={{ iconName: 'trash', colorType: isDarkMode ? 'white' : 'green' }} onClick={handleRemoveClick} />
		</Box>
	);
};
