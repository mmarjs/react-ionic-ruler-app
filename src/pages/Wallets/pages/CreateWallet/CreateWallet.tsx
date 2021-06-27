import { GreenButton, Icon, Page } from 'components';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { createWalletTypes } from '../../Wallets.data';
import { styles } from './CreateWallet.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const CreateWallet: React.FunctionComponent = () => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const { formatMessage } = useIntl();
	const [selectedWallet, setSelectedWallet] = React.useState('');
	const history = useHistory();

	return (
		<Page title={formatMessage({ id: 'wallets.create_wallet.title' })} titleSize="medium">
			<List className={classes.walletItemList}>
				{createWalletTypes.map((createWalletType, index) => (
					<ListItem
						key={index}
						className={clsx(
							{ [classes.listItem]: true },
							{ active: selectedWallet === formatMessage({ id: createWalletType.buttonText }) }
						)}
						button
						onClick={(): void => setSelectedWallet(formatMessage({ id: createWalletType.buttonText }))}
					>
						<ListItemIcon>
							<Icon iconName={createWalletType.iconName} colorType="black" primaryColor={isDarkMode ? '#fff' : 'rgb(24, 28, 25)'} />
						</ListItemIcon>
						<ListItemText primary={formatMessage({ id: createWalletType.buttonText })} className={classes.walletTypeText} />
					</ListItem>
				))}
			</List>
			<GreenButton
				className={classes.nextButton}
				disabled={!selectedWallet}
				onClick={(): void => history.push('/wallets/create-wallet-description', { newWallet: selectedWallet })}
			>
				{formatMessage({ id: 'button.next' })}
			</GreenButton>
		</Page>
	);
};
