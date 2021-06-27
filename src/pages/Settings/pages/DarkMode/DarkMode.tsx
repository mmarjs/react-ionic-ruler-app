import { AppContext } from 'providers/State';
import { Box, Button, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import { DateTimePicker, Divider, Icon, Page, Styling, SwitchListItem, Text } from 'components';
import { IDarkModeProps, IDarkModeState } from './DarkMode.types';
import { injectIntl } from 'react-intl';
import { styles } from './DarkMode.styles';
import React from 'react';

const useStyles = makeStyles(styles);

class DarkModePage extends React.Component<IDarkModeProps, IDarkModeState> {
	state = {
		automaticallyDarkMode: false,
		dontUseDarkMode: false,
		scheduledDarkMode: false,
		startTimeHour: 22,
		startTimeMin: 0,
		endTimeHour: 7,
		endTimeMin: 0,
		pickerIsOpen: false,
		pickerItem: '',
		disabledSchedule: false
	};

	static contextType = AppContext;

	componentDidMount() {
		this.setState({ dontUseDarkMode: this.context.state.settings.isDarkMode });

		if (this.context.state.settings.isDarkMode) {
			this.setState({ scheduledDarkMode: false, disabledSchedule: true });
		}
	}

	private handleAutomaticallyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		if (checked) {
			this.setState({ dontUseDarkMode: false, disabledSchedule: false });
		}
		this.setState({ automaticallyDarkMode: checked });
		this.context.dispatch({
			type: 'UPDATE_SETTINGS',
			payload: { isDarkMode: checked }
		});
	};

	private handleDontUseChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		if (checked) {
			this.setState({ automaticallyDarkMode: false, scheduledDarkMode: false, disabledSchedule: true });
		} else {
			this.setState({ scheduledDarkMode: false, disabledSchedule: false });
		}
		this.setState({ dontUseDarkMode: checked });
		this.context.dispatch({
			type: 'UPDATE_SETTINGS',
			payload: { isDarkMode: checked }
		});
	};

	private handleScheduledChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		this.setState({ scheduledDarkMode: checked });
	};

	private handleDatePickerChange = (hour: number, min: number): void => {
		if (this.state.pickerItem === 'start') this.setState({ startTimeHour: hour, startTimeMin: min });
		else if (this.state.pickerItem === 'end') this.setState({ endTimeHour: hour, endTimeMin: min });
		this.setState({ pickerIsOpen: false, pickerItem: '' });
	};

	private handleClosePicker = () => {
		this.setState({ pickerIsOpen: false, pickerItem: '' });
	};

	private handleFirstPickerClick = () => {
		this.setState({ pickerIsOpen: true, pickerItem: 'start' });
	};

	private handleEndPickerClick = () => {
		this.setState({ pickerIsOpen: true, pickerItem: 'end' });
	};

	render() {
		const { intl } = this.props;
		const { formatMessage } = intl;

		return (
			<Styling useStyles={useStyles} props={{ isDarkMode: this.context.state.settings.isDarkMode }}>
				{classes => (
					<Page title={formatMessage({ id: 'settings.dark_mode.title' })} titleSize="medium">
						<List className={classes.providersList}>
							<SwitchListItem
								title={formatMessage({ id: 'settings.dark_mode.automatically' })}
								name="automaticallyDarkMode"
								checked={this.state.automaticallyDarkMode}
								onChange={this.handleAutomaticallyChange}
							/>
							<Divider />
							<SwitchListItem
								title={formatMessage({ id: 'settings.dark_mode.manually_enable_till_tomorrow' })}
								name="dontUseDarkMode"
								checked={this.state.dontUseDarkMode}
								onChange={this.handleDontUseChange}
							/>
							<div className={classes.textWrapper}>
								<Text className={classes.subText} black>
									{formatMessage({ id: 'settings.dark_mode.set_by_time' })}
								</Text>
							</div>
							<SwitchListItem
								title={formatMessage({ id: 'settings.dark_mode.scheduled' })}
								name="scheduledDarkMode"
								checked={this.state.scheduledDarkMode}
								onChange={this.handleScheduledChange}
								disabled={this.state.disabledSchedule}
							/>

							{this.state.scheduledDarkMode && (
								<Box>
									<Divider />
									<ListItem className={classes.li}>
										<ListItemText className={classes.itemText} classes={{ primary: classes.primaryText }}>
											{formatMessage({ id: 'settings.dark_mode.start' })}
										</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton} onClick={this.handleFirstPickerClick}>
												<Text className={classes.dateText} black>{`${
													this.state.startTimeHour
												}:${this.state.startTimeMin.toString().padStart(2, '0')}`}</Text>
												<Icon
													iconName="forward"
													colorType="black"
													primaryColor={this.context.state.settings.isDarkMode ? 'rgb(255, 255, 255, 0.5)' : 'rgb(24, 28, 25, 0.5)'}
												/>
											</Button>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider />
									<ListItem className={classes.li}>
										<ListItemText className={classes.itemText} classes={{ primary: classes.primaryText }}>
											{formatMessage({ id: 'settings.dark_mode.ending' })}
										</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton} onClick={this.handleEndPickerClick}>
												<Text className={classes.dateText} black>{`${this.state.endTimeHour}:${this.state.endTimeMin
													.toString()
													.padStart(2, '0')}`}</Text>
												<Icon
													iconName="forward"
													colorType="black"
													primaryColor={this.context.state.settings.isDarkMode ? 'rgb(255, 255, 255, 0.5)' : 'rgb(24, 28, 25, 0.5)'}
												/>
											</Button>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider />
								</Box>
							)}
						</List>
						<DateTimePicker open={this.state.pickerIsOpen} onChange={this.handleDatePickerChange} onDismiss={this.handleClosePicker} />
					</Page>
				)}
			</Styling>
		);
	}
}

export const DarkMode = injectIntl(DarkModePage);
