export interface IReportProps {
	title?: string;
	type?: string;
	date?: string;
	data: {
		reportId?: string;
		wasLeft?: string;
		issue?: string;
		vehicleType?: string;
		location?: string;
	};
}
