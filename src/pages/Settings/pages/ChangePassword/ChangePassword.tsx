import { AppContext } from 'providers/State';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page, PasswordInput, Styling } from 'components';
import { IChangePasswordProps, IChangePasswordState } from './ChangePassword.types';
import { injectIntl } from 'react-intl';
import { styles } from './ChangePassword.styles';
import { validatePassword } from 'utils';
import React from 'react';
const useStyles = makeStyles(styles);

class ChangePasswordPage extends React.Component<IChangePasswordProps, IChangePasswordState> {
	static contextType = AppContext;

	constructor(props: IChangePasswordProps) {
		super(props);
		this.state = {
			oldPassword: '',
			oldPasswordValid: true,
			newPassword: '',
			newPasswordValid: true,
			confirmedPassword: '',
			newPasswordMatch: true,
			showDialog: false
		};
	}

	handleSaveClick = (): void => {
		this.setState({
			oldPassword: '',
			oldPasswordValid: true,
			newPassword: '',
			newPasswordValid: true,
			confirmedPassword: '',
			newPasswordMatch: true,
			showDialog: false
		});
		this.setState({ showDialog: true });
	};

	handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();

		if (event.target.name === 'oldPassword') {
			this.setState(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
				oldPasswordValid: validatePassword(event.target.value)
			}));
		} else if (event.target.name === 'newPassword') {
			this.setState(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
				newPasswordValid: validatePassword(event.target.value)
			}));
		} else {
			this.setState(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
				newPasswordMatch: event.target.value === this.state.newPassword
			}));
		}
	};

	render() {
		const { intl } = this.props;
		const { formatMessage } = intl;
		const oldPassword = this.state.oldPassword;
		const oldPasswordValid = this.state.oldPasswordValid;
		const newPassword = this.state.newPassword;
		const newPasswordValid = this.state.newPasswordValid;
		const confirmedPassword = this.state.confirmedPassword;
		const newPasswordMatch = this.state.newPasswordMatch;

		return (
			<Styling useStyles={useStyles} props={{ isDarkMode: this.context.state.settings.isDarkMode }}>
				{classes => (
					<Page title={formatMessage({ id: 'settings.change_password.title' })} titleSize="medium">
						<Box className={classes.innerContent}>
							<PasswordInput
								label={formatMessage({ id: 'settings.change_password.enter_the_current_password' })}
								name="oldPassword"
								error={!this.state.oldPasswordValid}
								helperText={!this.state.oldPasswordValid ? formatMessage({ id: 'welcome.create_account.password_helper_text' }) : ''}
								value={this.state.oldPassword}
								onValueChange={this.handleStateChange}
							/>
							<PasswordInput
								label={formatMessage({ id: 'settings.change_password.enter_a_new_password' })}
								name="newPassword"
								error={!this.state.newPasswordValid}
								helperText={!this.state.newPasswordValid ? formatMessage({ id: 'welcome.create_account.password_helper_text' }) : ''}
								value={this.state.newPassword}
								onValueChange={this.handleStateChange}
							/>
							<PasswordInput
								label={formatMessage({ id: 'settings.change_password.repeat_new_password' })}
								name="confirmedPassword"
								error={!this.state.newPasswordMatch}
								helperText={
									!this.state.newPasswordMatch ? formatMessage({ id: 'settings.change_password.repeat_new_password_helper_text' }) : ''
								}
								value={this.state.confirmedPassword}
								onValueChange={this.handleStateChange}
							/>
							<GreenButton
								compact
								className={classes.saveBtn}
								iconName="well-done-checked"
								onClick={this.handleSaveClick}
								disabled={!oldPassword || !oldPasswordValid || !newPassword || !newPasswordValid || !confirmedPassword || !newPasswordMatch}
							>
								{formatMessage({ id: 'button.save_changes' })}
							</GreenButton>
						</Box>
						<Dialog
							open={this.state.showDialog}
							hasClose
							illustrationName="delete"
							onClose={() => this.setState({ showDialog: false })}
							aria-labelledby="form-dialog-title"
							title={formatMessage({ id: 'settings.change_password.dialog.title' })}
						>
							<Typography className={classes.dialogContentText}>
								{formatMessage({ id: 'settings.change_password.dialog.description' })}
							</Typography>
						</Dialog>
					</Page>
				)}
			</Styling>
		);
	}
}

export const ChangePassword = injectIntl(ChangePasswordPage);
