import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, PasswordInput, TextField } from 'components';
import { styles } from './Login.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { validateEmail, validatePassword } from 'utils';
import React from 'react';
const useStyles = makeStyles(styles);

export const Login: React.FunctionComponent = () => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
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

	const handleLoginButtonClick = (): void => {
		localStorage.setItem('authToken', '1');
		history.push('/home');
	};

	return (
		<Page
			title={formatMessage({ id: 'welcome.login.title' })}
			titleSize="medium"
			headerLink={formatMessage({ id: 'welcome.login.text.forgot_password' })}
			headerLinkProps={{ href: '/welcome/forgot-password' }}
		>
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
					label={formatMessage({ id: 'welcome.login.password' })}
					name="password"
					error={!state.passwordValid}
					helperText={!state.passwordValid ? formatMessage({ id: 'welcome.create_account.password_helper_text' }) : ''}
					value={state.password}
					onValueChange={handleStateChange}
				/>
				<GreenButton
					compact
					className={classes.logInBtn}
					iconName="log-in"
					disabled={!state.email || !state.password || !state.emailValid || !state.passwordValid}
					onClick={handleLoginButtonClick}
				>
					{formatMessage({ id: 'button.login' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
