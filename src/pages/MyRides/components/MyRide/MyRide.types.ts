export interface IMyRideProps {
	startPosition?: string;
	startTime?: string;
	endPosition?: string;
	travelTime?: string;
	type: string;
	totalAmount?: string;
	onReportIconButtonClick: () => void;
}
