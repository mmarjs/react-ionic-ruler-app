import { Divider, Page, Styling, SwitchListItem, Text } from 'components';
import { INotificationsProps, INotificationsState } from './Notifications.types';
import { List } from '@material-ui/core';
import { injectIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from './Notifications.styles';
import React from 'react';
const useStyles = makeStyles(styles);

class NotificationsPage extends React.Component<INotificationsProps, INotificationsState> {
	state = {
		newsNotify: true,
		reportNotify: true,
		newAreaNotify: true,
		vehicleNotify: true,
		bikeNotify: false,
		carNotify: false,
		scooterNotify: false
	};

	private handleNewsNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ newsNotify: checked });

	private handleReportNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ reportNotify: checked });

	private handleNewAreaNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ newAreaNotify: checked });

	private handleVehicleNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		this.setState({ vehicleNotify: checked });

		if (checked) {
			this.setState({ bikeNotify: false, carNotify: false, scooterNotify: false });
		}
	};

	private handleBikeNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ bikeNotify: checked });

	private handleCarNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ carNotify: checked });

	private handleScooterNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ scooterNotify: checked });

	render() {
		const { intl } = this.props;
		const { formatMessage } = intl;

		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title={formatMessage({ id: 'settings.notifications.title' })} titleSize="large">
						<List className={classes.providersList}>
							<SwitchListItem
								title={formatMessage({ id: 'settings.notifications.discounts_and_news' })}
								checked={this.state.newsNotify}
								onChange={this.handleNewsNotifyChange}
							/>
							<Divider />
							<SwitchListItem
								title={formatMessage({ id: 'settings.notifications.new_report_reply' })}
								checked={this.state.reportNotify}
								onChange={this.handleReportNotifyChange}
							/>
							<Divider />
							<SwitchListItem
								title={formatMessage({ id: 'settings.notifications.new_area' })}
								checked={this.state.newAreaNotify}
								onChange={this.handleNewAreaNotifyChange}
							/>
							<div className={classes.textWrapper}>
								<Text className={classes.sectionBreaker}>{formatMessage({ id: 'settings.notifications.vehicle_notifications' })}</Text>
							</div>
							<SwitchListItem
								title={formatMessage({ id: 'settings.notifications.vehicle_near_you' })}
								name="vehicleNotify"
								checked={this.state.vehicleNotify}
								onChange={this.handleVehicleNotifyChange}
							/>
							<Divider />
							<SwitchListItem
								title={formatMessage({ id: 'settings.notifications.bike_near_you' })}
								checked={this.state.bikeNotify}
								onChange={this.handleBikeNotifyChange}
								disabled={this.state.vehicleNotify}
							/>
							<Divider />
							<SwitchListItem
								title={formatMessage({ id: 'settings.notifications.car_near_you' })}
								onChange={this.handleCarNotifyChange}
								checked={this.state.carNotify}
								disabled={this.state.vehicleNotify}
							/>
							<Divider />
							<SwitchListItem
								title={formatMessage({ id: 'settings.notifications.scooter_near_you' })}
								onChange={this.handleScooterNotifyChange}
								checked={this.state.scooterNotify}
								disabled={this.state.vehicleNotify}
							/>
						</List>
					</Page>
				)}
			</Styling>
		);
	}
}

export const Notifications = injectIntl(NotificationsPage);
