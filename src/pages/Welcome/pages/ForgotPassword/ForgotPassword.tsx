import { Box, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page, Text, TextField } from 'components';
import { styles } from './ForgotPassword.styles';
import { useIntl } from 'react-intl';
import { validateEmail } from 'utils';
import React from 'react';
const useStyles = makeStyles(styles);

export const ForgotPassword: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [email, setEmail] = React.useState('');
	const [showDialog, setShowDialog] = React.useState<boolean>(false);
	const [emailValid, setEmailValid] = React.useState(true);

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(event.target.value);
		setEmailValid(validateEmail(event.target.value));
	};

	const handleSendClick = (): void => {
		setShowDialog(true);
	};

	const handleDialogClose = () => {
		setShowDialog(false);
	};

	return (
		<Page title={formatMessage({ id: 'welcome.forgot_password.title' })} titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					label={formatMessage({ id: 'welcome.login.email_address' })}
					name="email"
					error={!emailValid}
					helperText={!emailValid ? formatMessage({ id: 'welcome.create_account.email_helper_text' }) : ''}
					value={email}
					onValueChange={handleEmailChange}
				/>
				<Box className={classes.footer}>
					<GreenButton compact iconName="submit-report" disabled={!email || !emailValid} onClick={handleSendClick}>
						{formatMessage({ id: 'button.send' })}
					</GreenButton>
					{/* <Text className={classes.forgotPasswordText} black>
						{formatMessage({ id: 'welcome.forgot_password.text' })}
					</Text> */}
				</Box>
			</Box>
			<Dialog
				open={showDialog}
				hasClose
				illustrationName="sent"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'wallets.receive.dialog.title' })}
			>
				<Text className={classes.dialogContentText} black>
					{formatMessage({ id: 'welcome.forgot_password.text' })}
				</Text>
			</Dialog>
		</Page>
	);
};
