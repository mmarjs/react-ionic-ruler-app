import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, Text } from 'components';
import { ICreateWalletProps } from './CreateWallet.types';
import { styles } from './CreateWallet.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import descriptionImageForDark from '../../images/create-wallet-dark.svg';
import descriptionImageForLight from '../../images/create-wallet-light.svg';
const useStyles = makeStyles(styles);

export const CreateWalletDescription: React.FunctionComponent<ICreateWalletProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const { formatMessage } = useIntl();
	const history = useHistory();
	const params: any = props.location.state;
	const newWallet = params && params.newWallet ? params.newWallet : '';

	return (
		<Page
			title={formatMessage({ id: 'wallets.create_wallet.title' })}
			className={classes.page}
			titleSize="medium"
			noHorizontalContentPadding
		>
			<Text className={classes.description} black>
				{formatMessage({ id: 'wallets.create_wallet.description' })}
			</Text>
			<Box className={classes.descriptionContent}>
				<Box className={classes.descriptionImageWrapper}>
					<img
						alt="description"
						src={isDarkMode ? descriptionImageForDark : descriptionImageForLight}
						className={classes.descriptionImage}
					/>
				</Box>
			</Box>
			<Box className={classes.footer}>
				<GreenButton
					className={classes.nextButton}
					onClick={(): void => history.push('/wallets/create-wallet-store', { newWallet: newWallet })}
				>
					{formatMessage({ id: 'button.next' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
