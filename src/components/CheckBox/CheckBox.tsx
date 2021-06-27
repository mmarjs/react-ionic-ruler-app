import { FormControlLabel, Checkbox as MuiCheckbox, makeStyles } from '@material-ui/core';
import { ICheckBoxProps } from './CheckBox.types';
import { Icon } from 'components';
import { styles } from './CheckBox.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';

const useStyles = makeStyles(styles);

export const Checkbox: React.FunctionComponent<ICheckBoxProps> = ({ checked, label = '', onValueChange }) => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ checked, isDarkMode: isDarkMode });

	return (
		<FormControlLabel
			className={classes.root}
			control={
				<MuiCheckbox
					classes={{ root: classes.checkBox, checked: isDarkMode ? classes.checkedDark : classes.checked }}
					checkedIcon={<Icon iconName="save" />}
					icon={<Icon iconName="save-blank" />}
					onChange={onValueChange}
					checked={checked}
				/>
			}
			label={label}
			labelPlacement="end"
		/>
	);
};
