import { Box, InputAdornment, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, IconButton, Page, Text, TextField } from 'components';
import { ISendProps } from './Send.types';
import { RulerButton } from '../../components';
import { rulerPriceBonusData } from '../../Wallets.data';
import { styles } from './Send.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { validateNumber } from 'utils';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const Send: React.FunctionComponent<ISendProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const { formatMessage } = useIntl();
	const history = useHistory();
	const location = useLocation();
	const [showDialog, setShowDialog] = React.useState<boolean>(false);
	const [amount, setAmount] = React.useState<string>('');
	const [numberValid, setNumberValid] = React.useState(true);
	const [walletAddress, setWalletAddress] = React.useState<string>('');
	React.useEffect(() => {
		const params: any = props.location.state;
		const code = params && params.code ? params.code : '';

		if (code) setWalletAddress(code);
	}, [props.location.state]);
	const handleRulerButtonClick = (amount: string): void => setAmount(amount);

	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const amount = event.target.value;

		if (amount.includes(' ')) {
			const trimAmount = amount.replace(/\s/g, '');
			setAmount(trimAmount);
			setNumberValid(validateNumber(trimAmount));
		} else {
			setAmount(amount);
			setNumberValid(validateNumber(amount));
		}
	};

	const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>): void => setWalletAddress(event.target.value);

	const handleQrClick = (): void => {
		history.push('/home', { from: location.pathname });
	};

	const handleSendClick = (): void => {
		setShowDialog(true);
	};

	const handleDialogClose = (): void => {
		setShowDialog(false);
	};

	return (
		<Page title={formatMessage({ id: 'wallets.send.title' })} titleSize="medium">
			<Box className={classes.addFundsWrapper}>
				<TextField
					name="walletAddress"
					label={formatMessage({ id: 'wallets.send.send_to' })}
					inputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton iconName="qr" onClick={handleQrClick} />
							</InputAdornment>
						)
					}}
					value={walletAddress}
					onValueChange={handleWalletAddressChange}
				/>
				<Text className={clsx(classes.helperText, classes.textCenter)} black>
					{formatMessage({ id: 'wallets.add_funds.helper_text.ruler_bonus' })}
				</Text>
				<Box className={classes.rulerPriceBonusButtonGroup}>
					{rulerPriceBonusData.map((data, index) => (
						<RulerButton
							key={index}
							price={data.rulerPrice}
							bonus={data.rulerBonus}
							active={data.rulerPrice === amount}
							onRulerButtonClick={handleRulerButtonClick}
						/>
					))}
				</Box>
				<TextField
					name="insertAmount"
					error={!numberValid}
					helperText={!numberValid ? formatMessage({ id: 'wallets.number_helper_text' }) : ''}
					className={classes.insertAmount}
					label={formatMessage({ id: 'wallets.add_funds.helper_text.amount_description' })}
					inputProps={{
						startAdornment: (
							<InputAdornment position="start" className={classes.currencySymbol}>
								€
							</InputAdornment>
						)
					}}
					value={amount}
					onValueChange={handleAmountChange}
				/>
			</Box>
			<GreenButton iconName="submit-report" compact disabled={!amount || !walletAddress || !numberValid} onClick={handleSendClick}>
				{formatMessage({ id: 'button.send' })}
			</GreenButton>
			<Dialog
				open={showDialog}
				hasClose
				illustrationName="superman"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'wallets.send.dialog.title' })}
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'wallets.send.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};
