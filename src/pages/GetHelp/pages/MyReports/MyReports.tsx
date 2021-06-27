import { IReportProps } from './MyReports.types';
import { Page } from 'components';
import { Report } from '../../components';
import { makeStyles } from '@material-ui/core';
import { styles } from './MyReports.styles';

import React from 'react';

const useStyles = makeStyles(styles);
const data: IReportProps[] = [
	{
		title: 'New message',
		type: 'new',
		date: 'Nov 24, 15:30',
		data: {
			reportId: '#1804',
			wasLeft: '10:56, 23.07.20',
			issue: 'Damaged vehicle',
			vehicleType: 'Bike',
			location: 'Na Hřebenkách 2, 150 00 Praha 5'
		}
	},
	{
		title: 'Under review',
		type: 'review',
		date: 'Nov 24, 15:30',
		data: {
			reportId: '#1804',
			wasLeft: '10:56, 23.07.20',
			issue: 'Badly parked',
			vehicleType: 'Scooter',
			location: 'Na Hřebenkách 2, 150 00 Praha 5'
		}
	},
	{
		title: 'Issue resloved',
		type: 'resolved',
		date: 'Nov 24, 15:30',
		data: {
			reportId: '#1804',
			wasLeft: '10:56, 23.07.20',
			issue: 'Damaged vehicle',
			vehicleType: 'Bike',
			location: 'Na Hřebenkách 2, 150 00 Praha 5'
		}
	}
];

export const MyReports: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="My reports" titleSize="medium">
			<div className={classes.myReportContainer}>
				{data.map((report, index) => (
					<Report key={index} {...report} />
				))}
			</div>
		</Page>
	);
};
