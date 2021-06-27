import { AppContext } from 'providers/State';
import { Button, Text } from 'components';
import { IRulerButtonProps } from './RulerButton.types';
import { makeStyles } from '@material-ui/core';
import { styles } from './RulerButton.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const RulerButton: React.FunctionComponent<IRulerButtonProps> = props => {
	const {
		state: {
			settings: { isDarkMode }
		}
	} = React.useContext(AppContext);
	const classes = useStyles({ active: props.active, isDarkMode: isDarkMode });

	return (
		<Button className={classes.button} onClick={(): void => props.onRulerButtonClick(props.price)}>
			<Text className={classes.priceText}>{`€ ${props.price}`}</Text>
			<Text className={classes.percentText} color="#00b559" active={props.active}>
				{props.bonus}
			</Text>
		</Button>
	);
};
