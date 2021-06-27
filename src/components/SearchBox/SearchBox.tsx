import { ISearchBoxProps } from './SearchBox.types';
import { Icon } from 'components';
import { InputBase, makeStyles } from '@material-ui/core';
import { styles } from './SearchBox.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({ onChange, className }) => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });

	return (
		<div className={clsx(classes.inputWrapper, className)}>
			<Icon iconName="search" className={classes.searchIcon} />
			<InputBase
				placeholder="Search…"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput
				}}
				inputProps={{ 'aria-label': 'search' }}
				onChange={onChange}
			/>
		</div>
	);
};
