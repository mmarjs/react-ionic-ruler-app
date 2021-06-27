import { IntlShape } from 'react-intl';

export interface IDarkModeState {
	disabledSchedule: boolean;
	automaticallyDarkMode: boolean;
	dontUseDarkMode: boolean;
	scheduledDarkMode: boolean;
	startTimeHour: number;
	startTimeMin: number;
	endTimeHour: number;
	endTimeMin: number;
	pickerIsOpen: boolean;
	pickerItem: string;

	[index: string]: boolean | Date | string | number;
}

export interface IDarkModeProps {
	intl: IntlShape;
}
