import { Box, makeStyles } from '@material-ui/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { GreenButton, Page } from 'components';
import { IQrCodeProps } from './QrCode.types';
import { IonImg } from '@ionic/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './QrCode.styles';
import { useIntl } from 'react-intl';
import React from 'react';
// const QRCode = require('qrcode-react');
import { QRCode } from 'react-qr-svg';
const useStyles = makeStyles(styles);
const { Camera } = Plugins;

export const QrCode: React.FunctionComponent<IQrCodeProps> = props => {
	const classes = useStyles();
	const [photo, setPhoto] = React.useState('');
	const params: any = props.location.state;
	const walletAddress = params?.walletAddress ? params.walletAddress : '';
	const { formatMessage } = useIntl();
	React.useEffect(() => {
		defineCustomElements(window);
	}, []);

	const takePhoto = async () => {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri,
			source: CameraSource.Photos
		});
		const imageUrl = image.webPath ?? '';
		setPhoto(imageUrl);
	};

	return (
		<Page title={formatMessage({ id: 'wallets.qr_code.title' })} titleSize="medium">
			<Box className={classes.qrCodeWrapper}>
				{photo ? (
					<Box className={classes.shareImageAspectRatioBox}>
						<Box className={classes.shareImageAspectRatioBoxInside}>
							<IonImg className={classes.shareImage} src={photo} />
						</Box>
					</Box>
				) : (
					<QRCode value={walletAddress} style={{ width: '59%' }} />
				)}
			</Box>
			<GreenButton className={classes.shareButton} iconName="share" compact onClick={() => takePhoto()}>
				{formatMessage({ id: 'button.share' })}
			</GreenButton>
		</Page>
	);
};
