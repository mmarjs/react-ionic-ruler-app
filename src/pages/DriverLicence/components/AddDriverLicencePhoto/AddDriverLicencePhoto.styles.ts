import { CSSProperties, createStyles, CreateCSSProperties } from '@material-ui/styles';
import { pxToRem } from 'styles';

const description: CSSProperties = {
	fontSize: pxToRem(15),
	color: 'rgba(24, 28, 25, 0.5)',
	fontWeight: 600,
	lineHeight: 1.67
};

const buttonContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: `${pxToRem(25)} ${pxToRem(5)}`,
	'&> div:first-child': {
		marginRight: pxToRem(15)
	}
};

const photoAspectRatioBox: CSSProperties = {
	height: 0,
	width: '100%',
	paddingTop: 'calc(240 / 155 * 100%)',
	position: 'relative'
};

const driverLicencePhotoAspectRatioBox: CSSProperties = {
	height: 0,
	width: '100%',
	paddingTop: 'calc(155 / 240 * 100%)',
	position: 'relative'
};

const photoAspectRatioBoxInside: CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%'
};

const cardBox: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'center',
	width: `calc(50% - ${pxToRem(7.5)})`,
	maxWidth: pxToRem(375),
	'&> span': {
		paddingTop: pxToRem(12)
	}
};

const cardButton: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	backgroundColor: 'transparent',
	backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='%2300B559FF' stroke-width='4' stroke-dasharray='7%2c 13' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
	borderRadius: pxToRem(15),
	'&:hover': {
		cursor: 'pointer'
	}
};

const cardText: CSSProperties = {
	color: '#181c19',
	maxWidth: pxToRem(60),
	paddingTop: pxToRem(10),
	fontSize: pxToRem(15),
	lineHeight: 1.67,
	fontWeight: 'bold',
	textAlign: 'center'
};

const descriptionText: CreateCSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5) !important' : 'rgba(24, 28, 25, 0.5) !important'),
	textAlign: 'center'
};

const submitButton: CreateCSSProperties = {
	borderRadius: pxToRem(15),
	height: pxToRem(50),
	textTransform: 'none',
	fontWeight: 'bold',
	backgroundColor: '#00b559',
	color: '#ffffff',
	marginTop: pxToRem(20),
	'&.Mui-disabled': {
		backgroundColor: (props: any) => (props.isDarkMode ? '#303331' : '#caf1dd'),
		color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : '#ffffff')
	},
	'&:hover': {
		backgroundColor: 'rgba(0, 181, 89, 0.8)'
	}
};

const footer: CSSProperties = {
	marginTop: 'auto',
	display: 'flex',
	flexDirection: 'column',
	'&> span': {
		padding: `${pxToRem(7)} 0 ${pxToRem(8)} 0`
	}
};

const cardImage: CSSProperties = {
	width: '100%',
	height: '100%',
	objectFit: 'cover'
};

const imageCover: CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	borderRadius: pxToRem(15),
	backgroundColor: 'rgba(0, 181, 89, 0.8)',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	alignItems: 'center'
};

const cardImageContainer: CSSProperties = {
	width: '100%',
	height: '100%',
	borderRadius: pxToRem(15),
	overflow: 'hidden'
};

const closeIcon: CSSProperties = {
	position: 'absolute',
	right: pxToRem(10),
	top: pxToRem(10),
	padding: 0,
	boxShadow: 'none',
	color: '#ffffff',
	backgroundColor: 'transparent'
};

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	padding: `${pxToRem(15)} 0 0 0`
};

const driverLicencePhotoContainer: CSSProperties = {
	padding: `${pxToRem(30)} ${pxToRem(25)} ${pxToRem(30)} ${pxToRem(25)}`,
	maxWidth: pxToRem(375),
	margin: '0 auto'
};

const footerContainer: CreateCSSProperties = {
	borderTopLeftRadius: pxToRem(15),
	borderTopRightRadius: pxToRem(15),
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c1980' : 'rgba(255, 255, 255, 0.85)')
};

const imageGallery: CSSProperties = {
	padding: `${pxToRem(30)} 0 0 ${pxToRem(30)}`,
	overflow: 'auto'
};

const imageGalleryInside: CSSProperties = {
	minHeight: pxToRem(50),
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap'
};

const iconButtonGroup: CSSProperties = {
	padding: `${pxToRem(25)} ${pxToRem(60)} ${pxToRem(30)} ${pxToRem(60)}`,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const midIconButton: CreateCSSProperties = {
	borderRadius: pxToRem(20),
	backgroundColor: (props: any) => (props.isDarkMode ? '$33000000' : '#ffffff'),
	padding: pxToRem(20)
};

const midIconButtonActive: CSSProperties = {
	backgroundColor: '#00b559',
	boxShadow: `0 ${pxToRem(10)} ${pxToRem(40)} 0 rgba(0, 181, 89, 0.3)`,
	'&:hover': {
		backgroundColor: 'rgb(0, 171, 85)'
	}
};

const takenImage: CSSProperties = {
	width: pxToRem(50),
	height: pxToRem(50),
	marginRight: pxToRem(15),
	objectFit: 'cover',
	minWidth: pxToRem(50),
	borderRadius: pxToRem(15),
	overflow: 'hidden'
};

const takenImageActive: CSSProperties = {
	border: `solid ${pxToRem(2)} #00b559`
};

const leftRightIconButton: CreateCSSProperties = {
	borderRadius: pxToRem(15),
	backgroundColor: (props: any) => (props.isDarkMode ? '$33000000' : '#ffffff'),
	padding: pxToRem(10),
	boxShadow: 'none',
	'&:hover': {
		boxShadow: `0 ${pxToRem(10)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.07)`
	}
};

const AddDriverLicenceContainer: CSSProperties = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column'
};
export const styles = createStyles({
	description,
	footer,
	buttonContainer,
	photoAspectRatioBox,
	cardBox,
	cardButton,
	descriptionText,
	submitButton,
	cardText,
	cardImage,
	cardImageContainer,
	imageCover,
	closeIcon,
	dialogContentText,
	photoAspectRatioBoxInside,
	driverLicencePhotoContainer,
	driverLicencePhotoAspectRatioBox,
	footerContainer,
	imageGallery,
	iconButtonGroup,
	midIconButton,
	midIconButtonActive,
	leftRightIconButton,
	takenImage,
	takenImageActive,
	imageGalleryInside,
	AddDriverLicenceContainer
});
