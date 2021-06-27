import { BottomSheet, Button, Dialog, Icon, IconButton, Text } from 'components';
import { Box, makeStyles } from '@material-ui/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { IAddDriverLicencePhotoProps } from './AddDriverLicencePhoto.types';
import { IonImg } from '@ionic/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './AddDriverLicencePhoto.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useIntl } from 'react-intl';
import BackdropFilter from 'react-backdrop-filter';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

const { Camera } = Plugins;

export const AddDriverLicencePhoto: React.FunctionComponent<IAddDriverLicencePhotoProps> = ({ handleDialogCloseButtonClick }) => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const [photo, setPhoto] = React.useState('');
	const [frontPhoto, setFrontPhoto] = React.useState('');
	const [backPhoto, setBackPhoto] = React.useState('');
	const [side, setSide] = React.useState();
	const [photos, setPhotos] = React.useState<string[]>([]);
	const [isSubmitSuccessModal, setSubmitSuccessModal] = React.useState(false);
	const [showTakePhoto, setShowTakePhoto] = React.useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = React.useState(-1);
	const { formatMessage } = useIntl();

	React.useEffect(() => {
		defineCustomElements(window);
	}, []);

	const takePhoto = async () => {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera
		});
		const imageUrl = image.webPath ?? '';
		setPhoto(imageUrl);
		setPhotos(prevPhotos => [...prevPhotos, imageUrl]);
	};

	const handlePhotoClick = (index: number): void => {
		setSelectedImageIndex(index);
		setPhoto(photos[index]);
	};

	const savePhoto = (type: 'front' | 'back', selectedImageIndex: number): void => {
		setShowTakePhoto(false);

		if (type === 'front') {
			setFrontPhoto(photos[selectedImageIndex]);
		} else {
			setBackPhoto(photos[selectedImageIndex]);
		}
	};

	const removePhoto = (type: 'front' | 'back'): void => {
		if (type === 'front') setFrontPhoto('');
		else setBackPhoto('');
	};

	const submit = (): void => setSubmitSuccessModal(true);

	const handleDialogClose = (): void => {
		handleDialogCloseButtonClick(frontPhoto);
		setSubmitSuccessModal(false);
		setFrontPhoto('');
		setBackPhoto('');
	};

	const handleTakePhotoClick = (type: 'front' | 'back'): void => {
		setShowTakePhoto(true);

		if (type === 'front') setSide('front');
		else setSide('back');
	};

	const handleBottomSheetChange = (isOpen: boolean): void => {
		setShowTakePhoto(isOpen);
	};

	const handleRevertClick = (): void => {
		setSelectedImageIndex(-1);
	};

	const handleFlashLightClick = (): void => {};

	return (
		<Box className={classes.AddDriverLicenceContainer}>
			<Box className={classes.buttonContainer}>
				<Box className={classes.cardBox}>
					<Box className={classes.photoAspectRatioBox}>
						<Box className={classes.photoAspectRatioBoxInside}>
							{frontPhoto ? (
								<Box className={classes.cardImageContainer}>
									<IonImg className={classes.cardImage} src={frontPhoto} />
									<Box className={classes.imageCover}>
										<Icon iconName="well-done-checked" color="#ffffff" />
										<Text className={classes.cardText} color="#ffffff">
											{formatMessage({ id: 'driver_licence.front_side' })}
										</Text>
									</Box>
									<IconButton className={classes.closeIcon} onClick={() => removePhoto('front')} iconName="close" />
								</Box>
							) : (
								<Box className={classes.cardButton} onClick={() => handleTakePhotoClick('front')}>
									<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
									<Text className={classes.cardText}>{formatMessage({ id: 'driver_licence.front_side' })}</Text>
								</Box>
							)}
						</Box>
					</Box>
					<Text className={classes.descriptionText}>{formatMessage({ id: 'driver_licence.driver.photograph' })}</Text>
				</Box>
				<Box className={classes.cardBox}>
					<Box className={classes.photoAspectRatioBox}>
						<Box className={classes.photoAspectRatioBoxInside}>
							{backPhoto ? (
								<Box className={classes.cardImageContainer}>
									<IonImg className={classes.cardImage} src={backPhoto} />
									<Box className={classes.imageCover}>
										<Icon iconName="well-done-checked" color="#ffffff" />
										<Text className={classes.cardText} color="#ffffff">
											{formatMessage({ id: 'driver_licence.back_side' })}
										</Text>
									</Box>
									<IconButton className={classes.closeIcon} onClick={() => removePhoto('back')} iconName="close" />
								</Box>
							) : (
								<Box className={classes.cardButton} onClick={() => handleTakePhotoClick('back')}>
									<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
									<Text className={classes.cardText}>{formatMessage({ id: 'driver_licence.back_side' })}</Text>
								</Box>
							)}
						</Box>
					</Box>
					<Text className={classes.descriptionText}>{formatMessage({ id: 'driver_licence.vehicle.info' })}s</Text>
				</Box>
			</Box>
			<Box className={classes.footer}>
				<Button
					fullWidth
					iconName="submit-report"
					compact
					className={classes.submitButton}
					disabled={!frontPhoto || !backPhoto}
					onClick={submit}
				>
					{formatMessage({ id: 'driver_licence.submit_for_validation' })}
				</Button>
				<Text className={classes.descriptionText}>{formatMessage({ id: 'driver_licence.submit.description' })}</Text>
			</Box>
			<Dialog
				title={formatMessage({ id: 'driver_licence.submit_success.dialog.title' })}
				open={isSubmitSuccessModal}
				hasClose
				illustrationName="sent"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'driver_licence.submit_success.dialog.description' })}</Text>
			</Dialog>
			<BottomSheet
				title={formatMessage({ id: side === 'front' ? 'driver_licence.front_side' : 'driver_licence.back_side' })}
				description={formatMessage({ id: 'driver_licence.driver.photograph' })}
				open={showTakePhoto}
				darkMode
				onBottomSheetChange={handleBottomSheetChange}
			>
				<Box className={classes.driverLicencePhotoContainer}>
					<Box className={classes.driverLicencePhotoAspectRatioBox}>
						<Box className={classes.photoAspectRatioBoxInside}>
							{photo && (
								<Box className={classes.cardImageContainer}>
									<IonImg className={classes.cardImage} src={photo} />
								</Box>
							)}
						</Box>
					</Box>
				</Box>
				<Box className={classes.footerContainer}>
					<BackdropFilter filter={`blur(${isDarkMode ? '0px' : '4px'})`}>
						<Box className={classes.imageGallery}>
							<Box className={classes.imageGalleryInside}>
								{photos.length > 0 &&
									photos.map((photo, index) => {
										return (
											<IonImg
												className={clsx({ [classes.takenImage]: true }, { [classes.takenImageActive]: index === selectedImageIndex })}
												key={index}
												src={photo}
												onClick={(): void => handlePhotoClick(index)}
											/>
										);
									})}
							</Box>
						</Box>
						<Box className={classes.iconButtonGroup}>
							<IconButton
								iconProps={{
									iconName: selectedImageIndex < 0 ? 'gallery' : 'trash',
									color: isDarkMode ? '#fff' : '#181c19'
								}}
								className={classes.leftRightIconButton}
							/>
							<IconButton
								iconProps={{
									iconName: selectedImageIndex < 0 ? 'photo' : 'save-photo',
									color: selectedImageIndex < 0 ? (isDarkMode ? '#fff' : '#181c19') : '#ffffff'
								}}
								className={clsx({ [classes.midIconButton]: true }, { [classes.midIconButtonActive]: selectedImageIndex >= 0 })}
								onClick={() => (selectedImageIndex < 0 ? takePhoto() : savePhoto(side, selectedImageIndex))}
							/>
							<IconButton
								iconProps={{
									iconName: selectedImageIndex < 0 ? 'flashlight' : 'revert',
									color: isDarkMode ? '#fff' : '#181c19'
								}}
								className={classes.leftRightIconButton}
								onClick={(): void => (selectedImageIndex >= 0 ? handleRevertClick() : handleFlashLightClick())}
							/>
						</Box>
					</BackdropFilter>
				</Box>
			</BottomSheet>
		</Box>
	);
};
