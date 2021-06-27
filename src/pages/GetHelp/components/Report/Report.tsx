import { BlackIcon } from 'components';
import { ICON_BLACK_COLOR_TYPE_PRIMARY_COLOR } from 'components/Icon';
import { IReportProps } from './Report.types';
import { Typography, makeStyles } from '@material-ui/core';
import { styles } from './Report.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';

const useStyles = makeStyles(styles);

export const Report: React.FunctionComponent<IReportProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ ...props, isDarkMode: isDarkMode });

	return (
		<div className={classes.reportContainer}>
			<div className={classes.reportHeaderWrapper}>
				<div className={classes.reportTitleWrapper}>
					<span>
						<span />
					</span>
					<div>
						<Typography className={classes.content} variant="h6">
							{props.title}
						</Typography>
						<Typography className={classes.content}>{props.date}</Typography>
					</div>
				</div>
				<div className={classes.reportIconWrapper}>
					<BlackIcon
						iconName="notification"
						{...(props.type === 'new' && { secondaryColor: ICON_BLACK_COLOR_TYPE_PRIMARY_COLOR, black: true })}
					/>
					{props.type === 'new' && <div className={classes.reportBadge} />}
				</div>
			</div>
			<div className={classes.reportDataWrapper}>
				<div>
					<div>
						<Typography className={classes.reportDataText} variant="h6">
							Report
						</Typography>
						<Typography className={classes.reportDataText}>{props.data.reportId}</Typography>
					</div>
					<div>
						<Typography className={classes.reportDataText} variant="h6">
							Was left
						</Typography>
						<Typography className={classes.reportDataText}>{props.data.wasLeft}</Typography>
					</div>
				</div>
				<div>
					<div>
						<Typography className={classes.reportDataText} variant="h6">
							Issue
						</Typography>
						<Typography className={classes.reportDataText}>{props.data.issue}</Typography>
					</div>
					<div>
						<Typography className={classes.reportDataText} variant="h6">
							Type of vehicle
						</Typography>
						<Typography className={classes.reportDataText}>{props.data.vehicleType}</Typography>
					</div>
				</div>
				<div>
					<div>
						<Typography className={classes.reportDataText} variant="h6">
							Location of vehicle
						</Typography>
						<Typography className={classes.reportDataText}>{props.data.location}</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};
