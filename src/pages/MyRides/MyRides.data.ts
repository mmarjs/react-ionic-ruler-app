import { IMyRideProps } from './components/MyRide/MyRide.types';
export const myRidesHistoryData: Array<Omit<IMyRideProps, 'onReportIconButtonClick'>> = [
	{
		startPosition: 'my_rides.text.start_position',
		startTime: 'my_rides.start_time',
		endPosition: 'my_rides.text.end_position',
		travelTime: 'my_rides.text.travel_time',
		type: 'scooter',
		totalAmount: 'my_rides.total_amount'
	},
	{
		startPosition: 'my_rides.text.start_position',
		startTime: 'my_rides.start_time',
		endPosition: 'my_rides.text.end_position',
		travelTime: 'my_rides.text.travel_time',
		type: 'scooter',
		totalAmount: 'my_rides.total_amount'
	}
];
