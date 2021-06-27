import { BlackButton, GreenButton, LightGreenButton } from 'components';
import { IDateTimePickerProps } from './DateTimePicker.types';
import { IonBackdrop, IonPickerColumn } from '@ionic/react';
import { PickerColumnOption } from '@ionic/core';
import { Platform } from 'types';
import { Stack } from '@fluentui/react';
import { makeStyles } from '@material-ui/core';
import { styles } from './DateTimePicker.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const DateTimePicker: React.FunctionComponent<IDateTimePickerProps> = ({
	open,
	defaultHour,
	defaultMinute,
	onSet,
	onChange,
	onHourChange,
	onMinuteChange,
	onDismiss
}) => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });

	const hourPickerRef = React.useRef<HTMLIonPickerColumnElement>(null);
	const minutePickerRef = React.useRef<HTMLIonPickerColumnElement>(null);

	const hourOptions: PickerColumnOption[] = [];
	const minuteOptions: PickerColumnOption[] = [];

	for (let i = 0; i < 24; i++) {
		hourOptions.push({
			text: i.toString(),
			value: i.toString()
		});
	}

	for (let i = 0; i < 60; i++) {
		minuteOptions.push({
			text: i.toString().padStart(2, '0'),
			value: i.toString().padStart(2, '0')
		});
	}

	const handleSet = () => {
		const currentHour = hourPickerRef.current?.col.selectedIndex;
		const currentMinute = minutePickerRef.current?.col.selectedIndex;

		if (typeof currentHour === 'number' && typeof currentMinute === 'number') {
			console.log(`Set current hour to ${currentHour}`);
			console.log(`Set current minute to ${currentMinute}`);

			onSet?.();
			onChange?.(currentHour, currentMinute);
			onHourChange?.(currentHour);
			onMinuteChange?.(currentMinute);
		}

		return 0;
	};

	return !open ? null : (
		<div className={classes.picker}>
			<IonBackdrop className={classes.backdrop} onIonBackdropTap={onDismiss} visible={open} />
			<div className={classes.pickerWrapper}>
				<div className={classes.blackBar} />
				<div className={classes.pickerColumns}>
					<div className={clsx(classes.pickerHighlight, classes.pickerAboveHighlight)} />
					<IonPickerColumn
						{...{ mode: Platform.iOS }}
						ref={hourPickerRef}
						className={classes.pickerColumn}
						col={{
							name: 'Hours',
							options: hourOptions,
							selectedIndex: defaultHour
						}}
					/>
					<IonPickerColumn
						{...{ mode: Platform.iOS }}
						ref={minutePickerRef}
						className={classes.pickerColumn}
						col={{
							name: 'Minutes',
							options: minuteOptions,
							selectedIndex: defaultMinute
						}}
					/>
					<div className={clsx(classes.pickerHighlight, classes.pickerBelowHighlight)} />
				</div>
				<Stack horizontal tokens={{ childrenGap: 15 }}>
					{isDarkMode ? (
						<BlackButton onClick={onDismiss}>Cancel</BlackButton>
					) : (
						<LightGreenButton onClick={onDismiss}>Cancel</LightGreenButton>
					)}

					<GreenButton onClick={handleSet}>Set time</GreenButton>
				</Stack>
			</div>
		</div>
	);
};
