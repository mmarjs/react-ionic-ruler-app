import { Box, makeStyles } from '@material-ui/core';
import { GoBackIconButton, GreenButton, IconButton, LightGreenButton, Page, Text } from 'components';
import { IRulerWalletProps } from './RulerWallet.types';
import { RulerWalletHistory } from '../../components';
import { rulerWalletHistory } from '../../Wallets.data';
import { styles } from './RulerWallet.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import bgImage from '../../images/green-bg.svg';
const useStyles = makeStyles(styles);
const copy = require('clipboard-copy');

export const RulerWallet: React.FunctionComponent<IRulerWalletProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const history = useHistory();
	const walletAddress = 'dsfsdfsdfsdfsdfsd';
	const [amount, setAmount] = React.useState('');
	const { formatMessage } = useIntl();

	React.useEffect(() => {
		const params: any = props.location.state;
		const amount = params && params.amount ? params.amount : '';

		if (amount) setAmount(amount);
	}, [props.location.state]);

	const handleCopyClick = (): void => copy(walletAddress);

	const handleSendClick = (): void => {
		history.push('/wallets/send');
	};

	const handleReceiveClick = (): void => {
		history.push('/wallets/receive');
	};

	const handleQrClick = (): void => {
		history.push('/wallets/qr-code', { walletAddress });
	};

	return (
		<Page fullPage noHorizontalContentPadding>
			<Box className={classes.content}>
				<Box className={classes.container}>
					<Box className={classes.headerWrapper}>
						<Box className={classes.imageWrapper}>
							<img alt="description" src={bgImage} className={classes.image} />
						</Box>
						<GoBackIconButton className={classes.goBackIcon} onClick={(): void => history.goBack()} />
						<Box className={classes.titleWrapper}>
							<Text className={classes.titleText}>{formatMessage({ id: 'wallets.ruler_wallet.title' })}</Text>
							<IconButton iconProps={{ iconName: 'qr', color: '#00b559' }} onClick={handleQrClick} black noShadow />
						</Box>
						<Box className={classes.headerContent}>
							<Text className={classes.headerHelperText} color="rgba(255, 255, 255, 0.5)">
								{formatMessage({ id: 'wallets.ruler_wallet.balance' })}
							</Text>
							<Text className={classes.amountText}>€ {amount}</Text>
							<Text className={classes.headerHelperText} color="rgba(255, 255, 255, 0.5)">
								{formatMessage({ id: 'wallets.ruler_wallet.wallet_address' })}
							</Text>
							<Box className={classes.addressWrapper}>
								<Text className={classes.addressText}>{walletAddress}</Text>
								<IconButton className={classes.copyButton} iconProps={{ iconName: 'copy', color: '#ffffff' }} onClick={handleCopyClick} />
							</Box>
						</Box>
					</Box>
					<Box className={classes.historyWrapper}>
						{rulerWalletHistory.map((item, index) => (
							<Box key={index} className={classes.historyRowWrapper}>
								<Text className={classes.dateText} black>
									{item.date}
								</Text>
								{item.data.map((row, rowIndex) => (
									<RulerWalletHistory key={rowIndex} {...row} />
								))}
							</Box>
						))}
					</Box>
				</Box>
				<Box className={classes.footer}>
					{isDarkMode ? (
						<GreenButton iconName="submit-report" compact onClick={handleSendClick}>
							{formatMessage({ id: 'button.send' })}
						</GreenButton>
					) : (
						<LightGreenButton iconName="submit-report" compact onClick={handleSendClick}>
							{formatMessage({ id: 'button.send' })}
						</LightGreenButton>
					)}
					{isDarkMode ? (
						<GreenButton iconName="receive" compact onClick={handleReceiveClick}>
							{formatMessage({ id: 'button.receive' })}
						</GreenButton>
					) : (
						<LightGreenButton iconName="receive" compact onClick={handleReceiveClick}>
							{formatMessage({ id: 'button.receive' })}
						</LightGreenButton>
					)}
				</Box>
			</Box>
		</Page>
	);
};
