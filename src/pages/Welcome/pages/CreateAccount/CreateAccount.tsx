import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, PasswordInput, Text, TextField } from 'components';
import { styles } from './CreateAccount.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { validateEmail, validatePassword } from 'utils';
import React from 'react';

const useStyles = makeStyles(styles);

export const CreateAccount: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [state, setState] = React.useState({
		email: '',
		emailValid: true,
		password: '',
		passwordValid: true
	});

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();

		if (event.target.name === 'email') {
			setState(prevState => ({ ...prevState, [event.target.name]: event.target.value, emailValid: validateEmail(event.target.value) }));
		} else {
			setState(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
				passwordValid: validatePassword(event.target.value)
			}));
		}
	};

	return (
		<Page title={formatMessage({ id: 'welcome.create_account.title' })} titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					label={formatMessage({ id: 'welcome.login.email_address' })}
					name="email"
					error={!state.emailValid}
					helperText={!state.emailValid ? formatMessage({ id: 'welcome.create_account.email_helper_text' }) : ''}
					value={state.email}
					onValueChange={handleStateChange}
				/>
				<PasswordInput
					label={formatMessage({ id: 'welcome.create_account.password' })}
					name="password"
					error={!state.passwordValid}
					helperText={!state.passwordValid ? formatMessage({ id: 'welcome.create_account.password_helper_text' }) : ''}
					value={state.password}
					onValueChange={handleStateChange}
				/>

				<Box className={classes.footer}>
					<GreenButton
						compact
						iconName="submit-report"
						disabled={!state.email || !state.password || !state.emailValid || !state.passwordValid}
						onClick={(): void => history.push('/welcome/login')}
					>
						{formatMessage({ id: 'button.send' })}
					</GreenButton>
					<Text className={classes.createAccountText} black>
						{formatMessage({ id: 'welcome.create_password.text' })}
					</Text>
				</Box>
			</Box>
		</Page>
	);
};
