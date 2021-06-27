import { IntlShape } from 'react-intl';

export interface INotificationsState {
	newsNotify: boolean;
	reportNotify: boolean;
	newAreaNotify: boolean;
	vehicleNotify: boolean;
	bikeNotify: boolean;
	carNotify: boolean;
	scooterNotify: boolean;
}

export interface INotificationsProps {
	intl: IntlShape;
}
