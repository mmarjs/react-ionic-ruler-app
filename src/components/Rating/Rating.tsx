import { IRatingProps } from './Rating.types';
import { Icon } from 'components';
import { Rating as MuiRating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Rating.styles';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const Rating: React.FunctionComponent<IRatingProps> = ({ className, emptyIconName, iconName, value, onValueChange, ...rest }) => {
	const classes = useStyles();

	return (
		<MuiRating
			name="customized-empty"
			classes={{ root: clsx(classes.ratingRoot, className) }}
			value={value}
			onChange={onValueChange}
			emptyIcon={<Icon iconName={emptyIconName} />}
			icon={<Icon iconName={iconName} />}
			{...rest}
		/>
	);
};
