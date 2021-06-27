import { BlackButton, BlackIcon, Dialog, Page, TextField } from 'components';
import { FormattedMessage, useIntl } from 'react-intl';
import { List, ListItem, ListItemIcon, ListItemText, Typography, makeStyles } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { menuList } from './Settings.data';
import { styles } from './Settings.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { validateEmail } from 'utils';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Settings: React.FunctionComponent = () => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const history = useHistory();
	const [logout, setLogout] = React.useState(false);
	const [deleteAccount, setDeleteAccount] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const [emailValid, setEmailValid] = React.useState(true);
	const { formatMessage } = useIntl();

	const handleLogoutClickOpen = (): void => {
		setLogout(true);
	};

	const handleLogoutClose = (): void => {
		setLogout(false);
	};

	const handleDeleteAccountOpen = (): void => {
		setDeleteAccount(true);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(event.target.value);
		setEmailValid(validateEmail(event.target.value));
	};

	const handleDeleteAccountClose = (): void => {
		setDeleteAccount(false);
	};

	const handleSendEmail = (event: React.MouseEvent<HTMLElement>): void => {
		setDeleteAccount(false);
		history.push('/welcome');
		localStorage.removeItem('authToken');
	};

	const handleLogoutOk = (event: React.MouseEvent<HTMLElement>): void => {
		setLogout(false);
		history.push('/welcome');
		localStorage.removeItem('authToken');
	};

	return (
		<Page title={formatMessage({ id: 'settings.title' })} titleSize="large" noHorizontalContentPadding>
			<List className={classes.list}>
				{menuList.map((item, index) =>
					item.href ? (
						<ListItem
							key={index}
							button
							className={clsx(classes.listItem, index === menuList.length - 1 && classes.last)}
							component={RouterLink}
							to={item.href}
						>
							<ListItemIcon className={classes.icon}>
								<BlackIcon iconName={item.iconName} />
							</ListItemIcon>
							<ListItemText primary={<FormattedMessage id={item.title} />} classes={{ primary: classes.text }} />
						</ListItem>
					) : (
						<ListItem
							key={index}
							button
							onClick={item.title === 'settings.menu.log_out' ? handleLogoutClickOpen : handleDeleteAccountOpen}
							className={clsx(classes.listItem, index === menuList.length - 1 && classes.last)}
						>
							<ListItemIcon className={classes.icon}>
								<BlackIcon iconName={item.iconName} />
							</ListItemIcon>
							<ListItemText primary={<FormattedMessage id={item.title} />} classes={{ primary: classes.text }} />
						</ListItem>
					)
				)}
			</List>
			<Dialog
				title={formatMessage({ id: 'settings.logout_dialog.title' })}
				open={logout}
				hasClose
				illustrationName="question"
				onClose={handleLogoutClose}
				aria-labelledby="form-dialog-title"
			>
				<Typography className={classes.dialogContentText}>{formatMessage({ id: 'settings.logout_dialog.description' })}</Typography>
				<BlackButton onClick={handleLogoutOk} className={classes.notRecommendedButton}>
					{formatMessage({ id: 'settings.logout_dialog.logout' })}
				</BlackButton>
			</Dialog>
			<Dialog
				title={formatMessage({ id: 'settings.delete_account_dialog.title' })}
				open={deleteAccount}
				hasClose
				illustrationName="question"
				onClose={handleDeleteAccountClose}
			>
				<Typography className={classes.dialogContentText}>{formatMessage({ id: 'settings.delete_account_dialog.description' })}</Typography>
				<TextField
					label={formatMessage({ id: 'welcome.login.email_address' })}
					name="email"
					error={!emailValid}
					helperText={!emailValid ? formatMessage({ id: 'welcome.create_account.email_helper_text' }) : ''}
					value={email}
					onValueChange={handleEmailChange}
				/>
				<BlackButton onClick={handleSendEmail} disabled={!email || !emailValid} className={classes.notRecommendedButton}>
					{formatMessage({ id: 'settings.delete_account_dialog.send' })}
				</BlackButton>
			</Dialog>
		</Page>
	);
};
