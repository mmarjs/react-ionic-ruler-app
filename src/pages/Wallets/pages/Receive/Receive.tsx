import { Box, InputAdornment, makeStyles } from '@material-ui/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { Dialog, GreenButton, IconButton, Page, Text, TextField } from 'components';
import { IReceiveProps } from './Receive.types';
import { IonImg } from '@ionic/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './Receive.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { validateNumber } from 'utils';
import React from 'react';
// const QRCode = require('qrcode-react');
import { QRCode } from 'react-qr-svg';

const useStyles = makeStyles(styles);
const { Camera } = Plugins;

export const Receive: React.FunctionComponent<IReceiveProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const history = useHistory();
	const location = useLocation();
	const { formatMessage } = useIntl();
	const [showDialog, setShowDialog] = React.useState<boolean>(false);
	const [from, setFrom] = React.useState<string>('');
	const [numberValid, setNumberValid] = React.useState(true);
	const [photo, setPhoto] = React.useState('');
	const [amount, setAmount] = React.useState<string>('');
	React.useEffect(() => {
		const params: any = props.location.state;
		const code = params && params.code ? params.code : '';

		if (code) {
			setFrom(code);
			setPhoto('');
		}
	}, [props.location.state]);
	React.useEffect(() => {
		defineCustomElements(window);
	}, []);

	const handleReceiveClick = (): void => {
		setShowDialog(true);
	};

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

	const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setFrom(event.target.value);
		setPhoto('');
	};

	const handleQrClick = (): void => {
		history.push('/home', { from: location.pathname });
	};

	const handleDialogClose = () => {
		setShowDialog(false);
	};

	const takePhoto = async () => {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri,
			source: CameraSource.Photos
		});
		const imageUrl = image.webPath ?? '';
		setPhoto(imageUrl);
		setFrom('');
	};

	return (
		<Page title={formatMessage({ id: 'wallets.receive.title' })} titleSize="medium">
			<Box className={classes.container}>
				<Box className={classes.formWrapper}>
					<TextField
						name="from"
						className={classes.textField}
						label={formatMessage({ id: 'wallets.receive.receive_from' })}
						inputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton iconName="qr" onClick={handleQrClick} />
								</InputAdornment>
							)
						}}
						value={from}
						onValueChange={handleFromChange}
					/>
					<TextField
						name="amount"
						error={!numberValid}
						helperText={!numberValid ? formatMessage({ id: 'wallets.number_helper_text' }) : ''}
						className={classes.textField}
						label={formatMessage({ id: 'wallets.receive.request_amount' })}
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
					<GreenButton iconName="receive" compact disabled={(!from && !photo) || !amount || !numberValid} onClick={handleReceiveClick}>
						{formatMessage({ id: 'button.receive' })}
					</GreenButton>
				</Box>
				<Box className={classes.qrCodeWrapper}>
					<Text className={classes.qrText}>{formatMessage({ id: 'wallets.receive.share_qr_code' })}</Text>
					{photo && (
						<Box className={classes.shareImageAspectRatioBox}>
							<Box className={classes.shareImageAspectRatioBoxInside}>
								<IonImg className={classes.shareImage} src={photo} />
							</Box>
						</Box>
					)}
					{from && <QRCode value={from} style={{ width: '40%' }} />}
				</Box>
				{/* <Box className={classes.footer}> */}
				<GreenButton iconName="share" compact onClick={() => takePhoto()}>
					{formatMessage({ id: 'button.share' })}
				</GreenButton>
				{/* </Box> */}
			</Box>
			<Dialog
				open={showDialog}
				hasClose
				illustrationName="sent"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'wallets.receive.dialog.title' })}
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'wallets.receive.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};
