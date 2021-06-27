import { Box, InputAdornment, makeStyles } from '@material-ui/core';
import { Button, Dialog, GreenButton, Icon, IconButton, LightGreenButton, Page, Text, TextField } from 'components';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { IDamagedVehicleProps } from './DamagedVehicle.types';
import { IonImg } from '@ionic/react';
import { damagedVehicleTypes } from './DamagedVehicle.data';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './DamagedVehicle.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);
const { Camera } = Plugins;

export const DamagedVehicle: React.FunctionComponent<IDamagedVehicleProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const { formatMessage } = useIntl();
	const history = useHistory();
	const location = useLocation();
	const [buttonLabel, setButtonLabel] = React.useState('Car');
	const [locate, setLocate] = React.useState('');
	const [code, setCode] = React.useState('');
	const [submitReportModal, setSubmitReportModal] = React.useState(false);
	const [description, setDescription] = React.useState('');
	const [photos, setPhotos] = React.useState<string[]>([]);
	const [title, setTitle] = React.useState('');
	const [imageModal, setImageModal] = React.useState(false);
	const [imageUrl, setImageUrl] = React.useState('');
	const [selectedImageIndex, setSelectedImageIndex] = React.useState(-1);

	React.useEffect(() => {
		defineCustomElements(window);
	}, []);

	React.useEffect(() => {
		const url: string = props.match.url;
		const params: any = props.location.state;
		const code = params && params.code ? params.code : '';
		const address = params && params.address ? params.address : '';

		if (code) setCode(code);

		if (address) setLocate(address);

		if (url.includes('badly-parked-vehicle')) setTitle(formatMessage({ id: 'my_rides.badly_parked_vehicle.title' }));
		else setTitle(formatMessage({ id: 'my_rides.damaged_vehicle.title' }));
	}, [props.match.url, props.location.state, formatMessage]);

	const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>): void => setLocate(event.target.value);

	const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => setCode(event.target.value);

	const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>): void => setDescription(event.target.value);

	const handleDialogClose = (): void => {
		if (submitReportModal) {
			setSubmitReportModal(false);
		} else if (imageModal) {
			setImageModal(false);
		}
	};

	const handleImageClick = (index: number) => (event: any): void => {
		setImageUrl(event.target.src);
		setSelectedImageIndex(index);
		setImageModal(true);
	};

	const handleImageDeleteClick = (index: number) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
		const temp = photos;
		temp.splice(index, 1);
		setPhotos([...temp]);
		setImageModal(false);
	};

	const takePhoto = async () => {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera
		});
		const imageUrl = image.webPath ?? '';
		setPhotos(prevPhotos => [...prevPhotos, imageUrl]);
	};

	const handleSubmitReportClick = (): void => {
		setDescription('');
		setCode('');
		setLocate('');
		setPhotos([]);
		setSubmitReportModal(true);
	};

	const handleQrClick = (): void => {
		history.push('/home', { from: location.pathname });
	};

	const handleFindMeClick = (): void => {
		history.push('/home', { from: location.pathname, findMe: true });
	};

	return (
		<Page canGoBack title={title} titleSize="medium">
			<Box className={classes.damagedVehicleContainer}>
				<Box className={classes.buttonGroupWrapper}>
					{damagedVehicleTypes.map((damagedVehicleType, index) => {
						return (
							<Button
								className={clsx(
									{ [classes.button]: true },
									{ [classes.activeBackground]: buttonLabel === formatMessage({ id: damagedVehicleType.label }) },
									{ [classes.inActiveBackground]: buttonLabel !== formatMessage({ id: damagedVehicleType.label }) }
								)}
								key={index}
								onClick={(): void => setButtonLabel(formatMessage({ id: damagedVehicleType.label }))}
							>
								<Icon
									iconName={damagedVehicleType.iconName}
									colorType="black"
									secondaryFillColor={
										isDarkMode
											? buttonLabel === formatMessage({ id: damagedVehicleType.label })
												? '#00b559'
												: '#242725'
											: 'rgb(248, 202, 6)'
									}
								/>
								<Text className={classes.iconNameText}>{formatMessage({ id: damagedVehicleType.label })}</Text>
							</Button>
						);
					})}
				</Box>
				<TextField
					name="location"
					label={formatMessage({ id: 'my_rides.damaged_vehicle.location' })}
					inputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton iconProps={{ iconName: 'find-me', secondaryColor: '#f8ca06' }} onClick={handleFindMeClick} />
							</InputAdornment>
						)
					}}
					value={locate}
					onValueChange={handleLocationChange}
				/>
				<TextField
					name="code"
					label={formatMessage({ id: 'my_rides.damaged_vehicle.code' })}
					inputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton iconProps={{ iconName: 'qr', secondaryColor: '#f8ca06' }} onClick={handleQrClick} />
							</InputAdornment>
						)
					}}
					value={code}
					onValueChange={handleCodeChange}
				/>
				<TextField
					name="description"
					label={formatMessage({ id: 'my_rides.damaged_vehicle.description' })}
					value={description}
					onValueChange={handleDescriptionChange}
				/>
				<Box className={classes.imageGallery}>
					<Box className={classes.imageGalleryInside}>
						{photos.length > 0 &&
							photos.map((photo, index) => {
								return <IonImg className={classes.takenImage} key={index} src={photo} onClick={handleImageClick(index)} />;
							})}
					</Box>
				</Box>
				<Box className={classes.footer}>
					{isDarkMode ? (
						<Button className={classes.addPhotosButton} iconName="photo" onClick={takePhoto}>
							{formatMessage({ id: 'button.add_photos' })}
						</Button>
					) : (
						<LightGreenButton className={classes.addPhotosButton} iconName="photo" onClick={takePhoto}>
							{formatMessage({ id: 'button.add_photos' })}
						</LightGreenButton>
					)}
					<GreenButton iconName="submit-report" onClick={handleSubmitReportClick} disabled={!code || !description || !location}>
						{formatMessage({ id: 'button.submit_report' })}
					</GreenButton>
				</Box>
			</Box>
			<Dialog
				title={formatMessage({ id: 'my_rides.damaged_vehicle.submit_report.dialog.title' })}
				open={submitReportModal}
				hasClose
				illustrationName="sent"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
			>
				<Text className={classes.dialogContentText}>
					{formatMessage({ id: 'my_rides.damaged_vehicle.submit_report.dialog.description' })}
				</Text>
			</Dialog>
			{imageUrl && (
				<Dialog
					onClose={handleDialogClose}
					onImageDelete={handleImageDeleteClick(selectedImageIndex)}
					aria-labelledby="form-dialog-title"
					image={imageUrl}
					open={imageModal}
				/>
			)}
		</Page>
	);
};
