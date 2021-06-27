import {
	HOW_TO_RIDE_PAGE_INITIAL_HEIGHT,
	HOW_TO_RIDE_PAGE_INITIAL_WIDTH,
	PAYMENT_METHOD_BACKGROUND_INITIAL_HEIGHT,
	PAYMENT_METHOD_BACKGROUND_INITIAL_POSITION_RIGHT,
	PAYMENT_METHOD_BACKGROUND_INITIAL_POSITION_TOP,
	PAYMENT_METHOD_BACKGROUND_INITIAL_WIDTH,
	SCAN_QR_CODE_BACKGROUND_INITIAL_HEIGHT,
	SCAN_QR_CODE_BACKGROUND_INITIAL_POSITION_RIGHT,
	SCAN_QR_CODE_BACKGROUND_INITIAL_POSITION_TOP,
	SCAN_QR_CODE_BACKGROUND_INITIAL_WIDTH,
	START_TRIP_BACKGROUND_INITIAL_HEIGHT,
	START_TRIP_BACKGROUND_INITIAL_POSITION_RIGHT,
	START_TRIP_BACKGROUND_INITIAL_POSITION_TOP,
	START_TRIP_BACKGROUND_INITIAL_WIDTH,
	TRIP_STATUS_BACKGROUND_INITIAL_HEIGHT,
	TRIP_STATUS_BACKGROUND_INITIAL_POSITION_RIGHT,
	TRIP_STATUS_BACKGROUND_INITIAL_POSITION_TOP,
	TRIP_STATUS_BACKGROUND_INITIAL_WIDTH,
	WATCH_AREAS_BACKGROUND_INITIAL_HEIGHT,
	WATCH_AREAS_BACKGROUND_INITIAL_POSITION_RIGHT,
	WATCH_AREAS_BACKGROUND_INITIAL_POSITION_TOP,
	WATCH_AREAS_BACKGROUND_INITIAL_WIDTH
} from './HowToRide.variables';
import { ISlide } from 'components';
import { percentage } from 'styles';

export const slides: Array<ISlide> = [
	{
		index: 0,
		imageLight: require('./images/scan-qr-code.svg'),
		imageDark: require('./images/scan-qr-code-dark.svg'),
		title: 'get_help.how_to_ride.scan_qr.title',
		description: 'get_help.how_to_ride.scan_qr.description',
		style: {
			right: percentage(SCAN_QR_CODE_BACKGROUND_INITIAL_POSITION_RIGHT / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			top: `${(SCAN_QR_CODE_BACKGROUND_INITIAL_POSITION_TOP / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: percentage(SCAN_QR_CODE_BACKGROUND_INITIAL_WIDTH / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			height: `${(SCAN_QR_CODE_BACKGROUND_INITIAL_HEIGHT / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	},
	{
		index: 1,
		imageLight: require('./images/payment-method.svg'),
		imageDark: require('./images/payment-method-dark.svg'),
		title: 'get_help.how_to_ride.payment_method.title',
		description: 'get_help.how_to_ride.payment_method.description',
		style: {
			right: percentage(PAYMENT_METHOD_BACKGROUND_INITIAL_POSITION_RIGHT / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			top: `${(PAYMENT_METHOD_BACKGROUND_INITIAL_POSITION_TOP / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: percentage(PAYMENT_METHOD_BACKGROUND_INITIAL_WIDTH / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			height: `${(PAYMENT_METHOD_BACKGROUND_INITIAL_HEIGHT / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	},
	{
		index: 2,
		imageLight: require('./images/start-trip.svg'),
		imageDark: require('./images/start-trip-dark.svg'),
		title: 'get_help.how_to_ride.start_trip.title',
		description: 'get_help.how_to_ride.start_trip.description',
		style: {
			right: percentage(START_TRIP_BACKGROUND_INITIAL_POSITION_RIGHT / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			top: `${(START_TRIP_BACKGROUND_INITIAL_POSITION_TOP / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: percentage(START_TRIP_BACKGROUND_INITIAL_WIDTH / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			height: `${(START_TRIP_BACKGROUND_INITIAL_HEIGHT / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	},
	{
		index: 3,
		imageLight: require('./images/watch-areas.svg'),
		imageDark: require('./images/watch-areas-dark.svg'),
		title: 'get_help.how_to_ride.watch_areas.title',
		description: 'get_help.how_to_ride.watch_areas.description',
		style: {
			right: percentage(WATCH_AREAS_BACKGROUND_INITIAL_POSITION_RIGHT / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			top: `${(WATCH_AREAS_BACKGROUND_INITIAL_POSITION_TOP / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: percentage(WATCH_AREAS_BACKGROUND_INITIAL_WIDTH / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			height: `${(WATCH_AREAS_BACKGROUND_INITIAL_HEIGHT / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	},
	{
		index: 4,
		imageLight: require('./images/trip-status.svg'),
		imageDark: require('./images/trip-status-dark.svg'),
		title: 'get_help.how_to_ride.trip_status.title',
		description: 'get_help.how_to_ride.trip_status.description',
		style: {
			right: percentage(TRIP_STATUS_BACKGROUND_INITIAL_POSITION_RIGHT / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			top: `${(TRIP_STATUS_BACKGROUND_INITIAL_POSITION_TOP / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: percentage(TRIP_STATUS_BACKGROUND_INITIAL_WIDTH / HOW_TO_RIDE_PAGE_INITIAL_WIDTH),
			height: `${(TRIP_STATUS_BACKGROUND_INITIAL_HEIGHT / HOW_TO_RIDE_PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	}
];
