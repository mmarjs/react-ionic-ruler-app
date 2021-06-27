import { Box, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page, Text, TextField } from 'components';
import { styles } from './ChangeEmail.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useIntl } from 'react-intl';
import { validateEmail } from 'utils';
import React from 'react';
const useStyles = makeStyles(styles);

export const ChangeEmail: React.FunctionComponent = () => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const [email, setEmail] = React.useState('');
	const [emailValid, setEmailValid] = React.useState(true);
	const [showChangeDialog, setShowChangeDialog] = React.useState(false);
	const [showRequestDialog, setShowRequestDialog] = React.useState(false);
	const [confirmation, setConfirmation] = React.useState(false);
	const { formatMessage } = useIntl();

	const handleButtonClick = (): void => {
		setEmail('');

		if (confirmation) {
			setShowChangeDialog(true);
		} else {
			setShowRequestDialog(true);
		}
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setEmail(event.target.value);
		setEmailValid(validateEmail(event.target.value));
	};

	const handleRequestDialogClose = (): void => {
		setShowRequestDialog(false);
		setConfirmation(true);
	};

	return (
		<Page title={formatMessage({ id: 'settings.change_email.title' })} titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					error={!emailValid}
					helperText={!emailValid ? formatMessage({ id: 'welcome.create_account.email_helper_text' }) : ''}
					label={
						confirmation
							? formatMessage({ id: 'settings.change_email.enter_new_email' })
							: formatMessage({ id: 'settings.change_email.enter_current_email' })
					}
					name="email"
					value={email}
					onChange={handleEmailChange}
				/>
				<GreenButton
					compact
					className={classes.saveBtn}
					iconName={confirmation ? 'well-done-checked' : 'submit-report'}
					onClick={handleButtonClick}
					disabled={!email || !emailValid}
				>
					{confirmation ? formatMessage({ id: 'button.save_changes' }) : formatMessage({ id: 'button.send' })}
				</GreenButton>
				{!confirmation && (
					<Text className={classes.confirmationText}>{formatMessage({ id: 'settings.change_email.confirmation_description' })}</Text>
				)}
			</Box>
			<Dialog
				open={showChangeDialog}
				hasClose
				illustrationName="delete"
				onClose={(): void => setShowChangeDialog(false)}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'settings.change_email.change_dialog.title' })}
			>
				<Typography className={classes.dialogContentText}>
					{formatMessage({ id: 'settings.change_email.change_dialog.description' })}
				</Typography>
			</Dialog>
			<Dialog
				open={showRequestDialog}
				hasClose
				illustrationName="sent"
				onClose={handleRequestDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'settings.change_email.request_dialog.title' })}
			>
				<Typography className={classes.dialogContentText}>
					{formatMessage({ id: 'settings.change_email.request_dialog.description' })}
				</Typography>
			</Dialog>
		</Page>
	);
};
