import { ISwitchProps } from './Switch.types';
import { Switch as MuiSwitch } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Switch.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const Switch: React.FunctionComponent<ISwitchProps> = props => {
	const classes = useStyles();

	return (
		<MuiSwitch
			focusVisibleClassName={classes.focusVisible}
			disableRipple
			classes={{
				root: classes.root,
				switchBase: classes.switchBase,
				thumb: classes.thumb,
				track: classes.track,
				checked: classes.checked,
				disabled: classes.disabled
			}}
			{...props}
		/>
	);
};
