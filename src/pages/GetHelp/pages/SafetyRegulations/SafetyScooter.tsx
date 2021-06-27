import { ISafetyRegulationsProps } from './SafetyRegulations.types';
import { Page, Text } from 'components';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { styles } from './SafetyRegulations.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';

const useStyles = makeStyles(styles);

export const SafetyScooter: React.FunctionComponent<ISafetyRegulationsProps> = props => {
	const isDarkMode = useDarkMode();
	const [title, setTitle] = React.useState('');
	const classes = useStyles({ isDarkMode: isDarkMode });
	React.useEffect(() => {
		const url: string = props.match.url;

		if (url.includes('regulations-scooter')) setTitle('Scooter');
		else if (url.includes('regulations-car')) setTitle('Car');
		else setTitle('Bike');
	}, [props.match.url]);

	return (
		<Page title={title} titleSize="medium">
			<Text className={classes.subTitle}>Your safety is important to us</Text>
			<Paper elevation={0} className={classes.container}>
				<Typography className={classes.content}>
					Always follow the following rules while you are looking to ride via scooter.
					<br />
					<br />
					1. Do a pre-ride check: Accelerator, Brake and Handle
					<br />
					2. Always follow helmet laws
					<br />
					3. Park properly at the designated Parking sites.
					<br />
					4. Apply brakes to slow down or stop
					<br />
					5. Take care of road obstructions
					<br />
					6. Always follow traffic rules
					<br />
					7. Do not use your phone while riding
				</Typography>
			</Paper>
		</Page>
	);
};
