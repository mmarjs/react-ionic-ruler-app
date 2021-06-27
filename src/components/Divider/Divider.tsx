import { IDividerProps } from './Divider.types';
import { makeStyles } from '@material-ui/core';
import { styles } from './Divider.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
const useStyles = makeStyles(styles);

export const Divider: React.FunctionComponent<IDividerProps> = () => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });

	return <div className={classes.divider} />;
};
