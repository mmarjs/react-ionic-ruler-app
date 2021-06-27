import { Box, makeStyles } from '@material-ui/core';
import { Button, GreenButton, Page, Text } from 'components';
import { ICreateWalletProps } from './CreateWallet.types';
import { createWalletWords } from '../../Wallets.data';
import { styles } from './CreateWallet.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
const copy = require('clipboard-copy');
const useStyles = makeStyles(styles);

export const CreateWalletStore: React.FunctionComponent<ICreateWalletProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const { formatMessage } = useIntl();
	const history = useHistory();
	const params: any = props.location.state;
	const newWallet = params && params.newWallet ? params.newWallet : '';

	const handleCopyClick = (): void => {
		const wordsOrder = createWalletWords.join(',');
		copy(wordsOrder);
	};

	return (
		<Page title={formatMessage({ id: 'wallets.create_wallet.title' })} titleSize="medium" noHorizontalContentPadding>
			<Text className={classes.description} black>
				{formatMessage({ id: 'wallets.create_wallet.store.description' })}
			</Text>
			<Box className={classes.wordWrapper}>
				{createWalletWords.map((createWalletWord, index) => (
					<Box key={index} className={classes.wordText}>
						<Text className={classes.wordNumber} black>
							{index + 1}.
						</Text>
						<Text className={classes.wordName}>{createWalletWord.toLowerCase()}</Text>
					</Box>
				))}
			</Box>
			<Button className={classes.copyButton} iconName="copy" compact fullWidth={false} onClick={handleCopyClick}>
				{formatMessage({ id: 'wallets.create_wallet.store.copy' })}
			</Button>
			<Box className={classes.footer}>
				<GreenButton
					className={classes.nextButton}
					onClick={(): void => history.push('/wallets/create-wallet-place', { newWallet: newWallet })}
				>
					{formatMessage({ id: 'button.next' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
