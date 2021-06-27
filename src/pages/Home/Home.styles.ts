import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, percentage, pxToRem } from 'styles';
import walletsLogoImage from './images/card-img.svg';
export const mapViewer: CSSProperties = {
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
};

const reportButton: CSSProperties = {
	position: 'absolute',
	top: pxToRem(30),
	left: pxToRem(20)
};

const zonesButton: CSSProperties = {
	position: 'absolute',
	top: pxToRem(30),
	right: pxToRem(20)
};

const vehicleButtonGroup: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(80),
	left: pxToRem(20)
};

const vehicleButtonGroupWrapper: CreateCSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	borderRadius: `${pxToRem(15)} ${pxToRem(15)} 0 0`,
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : 'rgb(255, 255, 255)')
};

const findMeButton: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	right: pxToRem(20)
};

const homeButtons: CreateCSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	left: '50%',
	transform: 'translate(-50%, 0%)',
	height: pxToRem(50),
	borderRadius: pxToRem(15),
	boxShadow: `0 ${pxToRem(10)} ${pxToRem(40)} 0 rgba(0, 0, 0, 0.1)`,
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : 'rgb(255, 255, 255)'),
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const homeButtonsText: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(8),
	left: '50%',
	transform: 'translate(-50%, 0%)',
	minWidth: pxToRem(185),
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: `${pxToRem(7)} ${pxToRem(10)} 0 ${pxToRem(10)}`
};

const qrButton: CreateCSSProperties = {
	width: pxToRem(72),
	height: pxToRem(72),
	border: (props: any) => (props.isDarkMode ? `solid ${pxToRem(5)} #181c19` : `solid ${pxToRem(5)} #ffffff`),
	backgroundColor: '#00b559',
	boxShadow: 'none',
	margin: `0 ${pxToRem(6)} 0 ${pxToRem(7)}`
};

const menuButton: CSSProperties = {
	marginLeft: pxToRem(10)
};

const filterButton: CSSProperties = {
	marginRight: pxToRem(10)
};

const closeIconButton: CreateCSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	left: pxToRem(20),
	borderRadius: `0 0 ${pxToRem(15)} ${pxToRem(15)}`,
	'&:hover': {
		backgroundColor: (props: any) => (props.isDarkMode ? '#000' : '#ffffff')
	}
};

const vehicleIconButton: CreateCSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	left: pxToRem(20),
	'&:hover': {
		backgroundColor: (props: any) => (props.isDarkMode ? '#000' : '#ffffff')
	}
};

const iconButtonText: CSSProperties = {
	minWidth: pxToRem(50),
	textAlign: 'center',
	fontSize: pxToRem(10),
	color: '#181c19',
	fontWeight: 600,
	lineHeight: 1.5,
	opacity: 0.5
};

const positionVehicleText: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(8),
	left: pxToRem(20)
};

const positionLocationText: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(8),
	right: pxToRem(20)
};

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	padding: `${pxToRem(10)} 0 0 0`
};

const rateImage: CSSProperties = {
	width: percentage(1),
	height: percentage(1),
	objectFit: 'cover'
};

const rateImageWrapper: CSSProperties = {
	padding: `${pxToRem(15)} ${pxToRem(50)} 0 ${pxToRem(50)}`
};

const shareButton: CSSProperties = {
	margin: `${pxToRem(20)} 0 ${pxToRem(15)} 0 `
};

const sheetButton: CSSProperties = {
	marginBottom: pxToRem(15),
	fontWeight: 'bold'
};

const sheetText: CreateCSSProperties = {
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(15),
	fontWeight: 600,
	lineHeight: 1.67,
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	opacity: 0.5,
	padding: `0 0 ${pxToRem(20)} 0`
};
const buttonGroupWrapper: CSSProperties = {
	borderRadius: pxToRem(15),
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'rgba(255, 255, 255, 0.05)',
	margin: `${pxToRem(24)} 0 ${pxToRem(30)} 0`
};

const scanEnterButtonGroupWrapper: CreateCSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	borderRadius: pxToRem(15),
	backgroundColor: (props: any) => (props.isDarkMode ? '#3E3D36' : 'rgba(255, 255, 255, 0.5)'),
	padding: `${pxToRem(5)}`,
	width: percentage(1)
};

const button: CreateCSSProperties = {
	padding: `${pxToRem(4)} 0`,
	'& .MuiButton-label > span': {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	'&:active': {
		backgroundColor: (props: any) => (props.isDarkMode ? '#00b559' : '#f8ca06')
	},
	'&:hover': {
		backgroundColor: (props: any) => (props.isDarkMode ? '#00b559' : '#f8ca06')
	}
};

const scanEnterCodeButton: CreateCSSProperties = {
	fontSize: pxToRem(10),
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	fontWeight: 600,
	lineHeight: 1.5,
	padding: `${pxToRem(13)} 0 ${pxToRem(12)} 0`,
	borderRadius: pxToRem(10),
	'&:hover': {
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
		backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff')
	},
	'& .MuiButton-label': {
		minHeight: pxToRem(15)
	},
	'&.Mui-disabled': {
		backgroundColor: 'transparent',
		color: '#181c19'
	}
};

const activeBackground: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#00b559' : '#f8ca06')
};

const inActiveBackground: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#242725' : '#ffffff')
};

const smallText: CreateCSSProperties = {
	fontWeight: 600,
	lineHeight: 1.5,
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5)'),
	fontSize: pxToRem(10)
};

const areasList: CSSProperties = {
	padding: ` 0 0 ${pxToRem(30)} 0`
};

const filterList: CSSProperties = {
	paddingTop: pxToRem(10),
	paddingBottom: 0
};

const batteryLevelText: CSSProperties = {
	paddingTop: pxToRem(25)
};

const engineTypeText: CSSProperties = {
	paddingTop: pxToRem(35),
	paddingBottom: pxToRem(14)
};

const resetButton: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff'),
	fontSize: pxToRem(15),
	color: '#00b559',
	fontWeight: 'bold',
	lineHeight: 1.67,
	padding: `${pxToRem(12)} 0 ${pxToRem(13)} 0`,
	textTransform: 'none',
	margin: `${pxToRem(22)} 0`,
	borderRadius: pxToRem(15),
	'&:hover': {
		color: '#00b559',
		backgroundColor: (props: any) => (props.isDarkMode ? '#000' : 'rgba(0, 0, 0, 0.04)')
	}
};

const sliderContainer: CSSProperties = {
	padding: `${pxToRem(30)} 0 ${pxToRem(16)} 0`,
	'& > .MuiSlider-active': {
		boxShadow: 'none'
	},
	'& > .MuiSlider-thumb::after': {
		display: 'none'
	}
};

const railPart: CreateCSSProperties = {
	height: pxToRem(4),
	borderRadius: pxToRem(10),
	backgroundColor: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.4)')
};

const trackPart: CSSProperties = {
	height: pxToRem(4),
	borderRadius: pxToRem(10),
	backgroundColor: '#00b559'
};

const percentageTextWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
};

const QRcodePhotoContainer: CSSProperties = {
	padding: `${pxToRem(30)} ${pxToRem(60)} ${pxToRem(60)} ${pxToRem(60)}`,
	maxWidth: pxToRem(375),
	margin: '0 auto'
};

const QRcodePhotoAspectRatioBox: CSSProperties = {
	height: 0,
	width: '100%',
	paddingTop: '100%',
	position: 'relative'
};

const QRcodePhotoAspectRatioBoxInside: CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%'
};

const QRcodeImageContainer: CSSProperties = {
	width: '100%',
	height: '100%',
	borderRadius: pxToRem(15),
	overflow: 'hidden'
};

const percentageText: CreateCSSProperties = {
	fontSize: pxToRem(15),
	fontWeight: 600,
	lineHeight: 1.67,
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};

const footer: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const scanPadding: CSSProperties = {
	padding: `0 ${pxToRem(60)} ${pxToRem(85)} ${pxToRem(60)}`
};

const enterPadding: CSSProperties = {
	padding: `0 ${pxToRem(60)} ${pxToRem(31)} ${pxToRem(60)}`
};

const flashButton: CSSProperties = {
	marginLeft: pxToRem(15),
	'&:hover': {
		color: '#181c19',
		backgroundColor: 'rgba(255, 255, 255, 0.5)'
	},
	borderRadius: pxToRem(15),
	backgroundColor: 'rgba(255, 255, 255, 0.5)',
	boxShadow: `0 ${pxToRem(10)} ${pxToRem(40)} 0 rgba(0, 0, 0, 0.1)`
};

const scanEnterCodeButtonActive: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff')
};

const scanEnterCodeButtonInActive: CSSProperties = {
	backgroundColor: 'transparent'
};

const qrCodeInput: CreateCSSProperties = {
	width: percentage(1),
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff'),
	borderRadius: pxToRem(15),
	'&>.MuiInputBase-input': {
		minHeight: pxToRem(25),
		letterSpacing: pxToRem(27),
		padding: `${pxToRem(12)} ${pxToRem(35)} ${pxToRem(13)} ${pxToRem(37)}`
	},
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	color: (props: any) => (props.isDarkMode ? '#ffffff' : '#181c19')
};

const inputWrapper: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#3E3D36' : 'rgba(255, 255, 255, 0.8)'),
	borderRadius: pxToRem(15),
	maxWidth: pxToRem(255)
};
const inputWrapperSmallMarin: CSSProperties = {
	margin: `${pxToRem(7)} auto ${pxToRem(25)}`
};

const inputWrapperLargeMargin: CSSProperties = {
	margin: `${pxToRem(30)} auto ${pxToRem(25)}`
};

const wrongCodeTextWrapper: CSSProperties = {
	textAlign: 'center'
};

const wrongCodeText: CSSProperties = {
	padding: `${pxToRem(4)} 0`,
	lineHeight: 1.5,
	fontWeight: 600,
	fontSize: pxToRem(10)
	// color: '#f46c63'
};

const navControl: CSSProperties = {
	position: 'absolute',
	top: pxToRem(100),
	left: pxToRem(30)
};

const circleWithVehicleNumber: CSSProperties = {
	width: pxToRem(50),
	height: pxToRem(50),
	border: `solid ${pxToRem(2)} #000000`,
	borderRadius: percentage(0.5),
	backgroundColor: '#ffffff',
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const circleWithVehicleIcon: CreateCSSProperties = {
	borderRadius: percentage(0.5),
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff'),
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const vehicleIconInActive: CreateCSSProperties = {
	width: pxToRem(40),
	height: pxToRem(40),
	border: (props: any) => (props.isDarkMode ? `solid ${pxToRem(2)} #fff` : `solid ${pxToRem(2)} #000`)
};

const vehicleIconActive: CSSProperties = {
	width: pxToRem(52),
	height: pxToRem(52),
	border: `solid ${pxToRem(2)} #00b559`
};

const iconDecorator: CSSProperties = {
	position: 'absolute',
	top: pxToRem(-5),
	left: pxToRem(-5),
	width: pxToRem(20),
	height: pxToRem(20)
};
const markerNumberText: CSSProperties = {
	fontSize: pxToRem(15),
	fontWeight: 'bold',
	lineHeight: 1.67,
	color: '#181c19'
};

const vehicleInfo: CSSProperties = {
	padding: `${pxToRem(20)} 0 ${pxToRem(25)} 0`,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const infoWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
};

const propertyText: CreateCSSProperties = {
	marginTop: 10,
	fontSize: pxToRem(15),
	lineHeight: 1.67,
	fontWeight: 600,
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};

const descriptionText: CreateCSSProperties = {
	fontSize: pxToRem(10),
	lineHeight: 1.67,
	fontWeight: 600,
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5)')
};

const vehicleInfoFooter: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	'&> span': {
		padding: `${pxToRem(7)} 0 ${pxToRem(3)} 0`
	}
};

const paymentMethodFooter: CSSProperties = {
	marginTop: pxToRem(65),
	display: 'flex',
	flexDirection: 'column',
	'&> span': {
		padding: `${pxToRem(7)} 0 ${pxToRem(3)}`
	}
};

const swipeText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	textAlign: 'center'
};

const payButton: CSSProperties = {
	marginTop: 'auto',
	fontWeight: 'bold'
};

const walletsLogoContainer: CSSProperties = {
	padding: `${pxToRem(35)} 0 ${pxToRem(30)} 0`
};

const walletsLogo: CSSProperties = {
	margin: '0 auto',
	backgroundImage: `url(${walletsLogoImage})`,
	width: pxToRem(325),
	height: pxToRem(132),
	position: 'relative',
	padding: `${pxToRem(25)} ${pxToRem(30)}`,
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'left'
};

const wellDoneIcon: CSSProperties = {
	position: 'absolute',
	top: pxToRem(5),
	right: pxToRem(5),
	backgroundColor: 'transparent',
	padding: 0,
	boxShadow: 'none',
	'&:hover': {
		backgroundColor: 'transparent',
		opacity: 0.7
	}
};

const rulerWalletText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.67,
	color: '#ffffff',
	fontSize: pxToRem(15)
};

const rulerPriceText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(255, 255, 255, 0.5)',
	fontSize: pxToRem(10),
	paddingTop: pxToRem(12)
};

const rulerNumberText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.5,
	color: '#ffffff',
	fontSize: pxToRem(20)
};

const creditCardsTextWrapper: CreateCSSProperties = {
	textAlign: 'left',
	'& span': {
		color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5)'),
		lineHeight: 1.5,
		fontWeight: 600,
		fontSize: pxToRem(10)
	}
};

const addPaymentMethodButton: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff'),
	fontSize: pxToRem(15),
	color: '#00b559',
	fontWeight: 'bold',
	lineHeight: 1.67,
	'&:hover': {
		color: '#00b559',
		backgroundColor: (props: any) => (props.isDarkMode ? '#000' : 'rgba(0, 0, 0, 0.04)')
	}
};

const slide: CSSProperties = {
	display: 'block'
};

const scanAndReserveButtonGroupWrapper: CSSProperties = {
	display: 'flex',
	'& button:first-child': {
		marginRight: pxToRem(15)
	}
};

const iconButtonTextWrapper: CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: pxToRem(25),
	'& button': {
		padding: 0
	}
};

const vehicleDetailInfoColumn: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center',
	marginTop: pxToRem(10),
	flex: 1
};

const greenText: CSSProperties = {
	fontSize: pxToRem(15),
	// color: '#00b559',
	fontWeight: 'bold',
	lineHeight: 1.67
};

const imageWrapper: CSSProperties = {
	maxWidth: pxToRem(325),
	margin: `0 auto ${pxToRem(25)}`
};

const iconText: CSSProperties = {
	fontSize: pxToRem(15),
	color: '#181c19',
	fontWeight: 'bold',
	lineHeight: 1.67,
	marginLeft: pxToRem(10)
};

const vehicleDetailInfoRow: CSSProperties = {
	display: 'flex'
};

const iconButtonTextContainer: CSSProperties = {
	display: 'flex'
};

const notRecommendedButton: CreateCSSProperties = {
	fontWeight: 'bold',
	backgroundColor: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	'& span': {
		color: (props: any) => (props.isDarkMode ? '#181c19' : '#fff')
	}
};

const finishRidingDialogContentText: CreateCSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5)'),
	padding: `${pxToRem(10)}  0 ${pxToRem(20)} 0`,
	maxWidth: pxToRem(160),
	margin: '0 auto'
};

const totalAmountTextWrapper: CSSProperties = {
	paddingTop: pxToRem(15),
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const totalAmountText: CSSProperties = {
	fontSize: pxToRem(20),
	fontWeight: 600,
	lineHeight: 1.5,
	color: '#181c19'
};

const totalAmountNumber: CSSProperties = {
	fontSize: pxToRem(20),
	fontWeight: 'bold',
	color: '#181c19'
};

const totalAmountDecimal: CSSProperties = {
	fontSize: pxToRem(15),
	fontWeight: 'bold',
	color: '#181c19'
};

const rateRideWrapper: CSSProperties = {
	padding: `${pxToRem(40)} 0 ${pxToRem(20)} 0`,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const rateRideText: CSSProperties = {
	fontSize: pxToRem(15),
	fontWeight: 600,
	lineHeight: 1.67,
	color: '#181c19'
};

const reserveFooter: CSSProperties = {
	padding: `${pxToRem(93)} 0 ${pxToRem(25)}`
};

const paymentMethodTitleTextWrapper: CreateCSSProperties = {
	paddingTop: pxToRem(20),
	'& span': {
		fontSize: pxToRem(20),
		fontWeight: 'bold',
		lineHeight: 1.5,
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
	}
};

const finishAndScanButton: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#303331' : 'rgb(202, 241, 221)'),
	color: (props: any) => (props.isDarkMode ? '#fff' : 'rgb(0, 181, 89)')
};

export const styles = createStyles({
	finishAndScanButton,
	totalAmountDecimal,
	paymentMethodTitleTextWrapper,
	circleWithVehicleNumber,
	circleWithVehicleIcon,
	reserveFooter,
	rateRideText,
	rateRideWrapper,
	totalAmountNumber,
	totalAmountText,
	finishRidingDialogContentText,
	totalAmountTextWrapper,
	notRecommendedButton,
	iconButtonTextContainer,
	vehicleDetailInfoColumn,
	vehicleDetailInfoRow,
	iconText,
	imageWrapper,
	greenText,
	iconButtonTextWrapper,
	scanAndReserveButtonGroupWrapper,
	slide,
	paymentMethodFooter,
	creditCardsTextWrapper,
	addPaymentMethodButton,
	rulerNumberText,
	rulerPriceText,
	wellDoneIcon,
	rulerWalletText,
	walletsLogo,
	walletsLogoContainer,
	payButton,
	swipeText,
	vehicleInfoFooter,
	descriptionText,
	propertyText,
	infoWrapper,
	vehicleInfo,
	markerNumberText,
	vehicleIconInActive,
	vehicleIconActive,
	iconDecorator,
	navControl,
	inputWrapperSmallMarin,
	inputWrapperLargeMargin,
	inputWrapper,
	wrongCodeTextWrapper,
	wrongCodeText,
	qrCodeInput,
	scanPadding,
	enterPadding,
	scanEnterCodeButtonInActive,
	scanEnterCodeButtonActive,
	scanEnterCodeButton,
	scanEnterButtonGroupWrapper,
	flashButton,
	footer,
	QRcodeImageContainer,
	QRcodePhotoContainer,
	QRcodePhotoAspectRatioBox,
	QRcodePhotoAspectRatioBoxInside,
	percentageTextWrapper,
	percentageText,
	sliderContainer,
	railPart,
	trackPart,
	reportButton,
	zonesButton,
	vehicleButtonGroup,
	findMeButton,
	homeButtons,
	qrButton,
	menuButton,
	filterButton,
	vehicleButtonGroupWrapper,
	closeIconButton,
	vehicleIconButton,
	iconButtonText,
	positionVehicleText,
	positionLocationText,
	homeButtonsText,
	dialogContentText,
	rateImage,
	rateImageWrapper,
	shareButton,
	sheetButton,
	sheetText,
	areasList,
	button,
	activeBackground,
	buttonGroupWrapper,
	inActiveBackground,
	smallText,
	filterList,
	batteryLevelText,
	engineTypeText,
	resetButton
});
