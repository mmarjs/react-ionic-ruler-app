import { Box, makeStyles } from '@material-ui/core';
import { IMyRideProps } from './MyRide.types';
import { Icon, IconButton, Rating, Text } from 'components';
import { styles } from './MyRide.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const MyRide: React.FunctionComponent<IMyRideProps> = props => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [value, setValue] = React.useState<number | null>(4);
	const isDarkMode = useDarkMode();

	return (
		<Box className={classes.historyContainer}>
			<Box className={classes.historyContent}>
				<Box className={classes.progressWrapper}>
					{[0, 1, 2, 3, 4, 5].map(index => {
						return <Box key={index} className={index === 0 || index === 5 ? classes.startAndEndPoint : classes.midPoint} />;
					})}
				</Box>
				<Box className={classes.historyWrapper}>
					<Box className={classes.startPointWrapper}>
						<Box>
							<Text className={classes.largeText} block color="#181c19">
								{formatMessage({ id: props.startPosition })}
							</Text>
							<Text className={classes.smallText} block color="#181c19">
								{formatMessage({ id: props.startTime })}
							</Text>
						</Box>
						<Box className={classes.iconWrapper}>
							<Icon iconName={props.type} colorType="black" black />
							<Box className={classes.iconDecorator} />
						</Box>
					</Box>
					<Box className={clsx(classes.startPointWrapper, classes.endPoint)}>
						<Text className={classes.largeText} color="#181c19">
							{formatMessage({ id: props.endPosition })}
						</Text>
						<Text className={classes.amountText} block color="#181c19">
							{formatMessage({ id: props.totalAmount })}
						</Text>
					</Box>
					<Box className={classes.startPointWrapper}>
						<Text className={classes.smallText} block color="#181c19">
							{formatMessage({ id: props.travelTime })}
						</Text>
						<Text className={classes.smallText} block color="#181c19">
							{formatMessage({ id: 'my_rides.text.total_amount' })}
						</Text>
					</Box>
				</Box>
			</Box>
			<Box className={classes.historyFooter}>
				<Box>
					<IconButton
						className={classes.reportIconButton}
						iconProps={{ iconName: 'report', primaryColor: 'black', secondaryColor: isDarkMode ? 'black' : 'red' }}
						onClick={props.onReportIconButtonClick}
						black
					/>
					<Text className={classes.largeText} color="#181c19">
						{formatMessage({ id: 'my_rides.text.report_trip' })}
					</Text>
				</Box>

				<Rating
					value={value}
					className={classes.rating}
					onValueChange={(event: React.ChangeEvent<{}>, newValue: number | null): void => {
						setValue(newValue);
					}}
					emptyIconName="rate"
					iconName="full-rate"
				/>
			</Box>
		</Box>
	);
};
