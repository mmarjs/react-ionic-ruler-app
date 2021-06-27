import { ButtonProps } from '@material-ui/core';

export interface IDateTimePickerProps {
	// hourIndex: number;
	// minIndex: number;
	// handleRequestClose: () => void;
	// handleDatePickerChange: (hour: number, min: number) => void;
	open: boolean;
	defaultHour?: number;
	defaultMinute?: number;
	onChange?: (hour: number, minute: number) => void;
	onHourChange?: (hour: number) => void;
	onMinuteChange?: (minute: number) => void;
	onSet?: () => void;
	onDismiss?: () => void;
}
