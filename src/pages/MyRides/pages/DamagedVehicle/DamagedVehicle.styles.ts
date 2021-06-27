import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const buttonGroupWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'rgba(255, 255, 255, 0.05)',
	margin: `${pxToRem(15)} 0 ${pxToRem(30)} 0`,
	borderRadius: pxToRem(15)
};

const button: CreateCSSProperties = {
	padding: `${pxToRem(4)} 0`,
	'& .MuiButton-label > span': {
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	'& .MuiButton-label:after': {
		content: '""',
		width: 0,
		height: 0,
		flex: 'unset'
	},
	'&:active': {
		backgroundColor: (props: any) => (props.isDarkMode ? '#00b559' : '#f8ca06')
	},
	'&:hover': {
		backgroundColor: (props: any) => (props.isDarkMode ? '#00b559' : '#f8ca06')
	}
};

const activeBackground: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#00b559' : '#f8ca06')
};

const inActiveBackground: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#242725' : '#ffffff')
};

const iconNameText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	fontSize: pxToRem(10)
};

const footer: CSSProperties = {
	marginTop: 'auto'
};
const addPhotosButton: CreateCSSProperties = {
	marginBottom: pxToRem(15)
};

const damagedVehicleContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const imageGallery: CSSProperties = {
	padding: `${pxToRem(5)} 0 0 0`,
	overflow: 'auto'
};

const imageGalleryInside: CSSProperties = {
	minHeight: pxToRem(50),
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap'
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

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	fontColor: '#181c19',
	opacity: 0.5,
	padding: `${pxToRem(15)} 0 0 0`
};
export const styles = createStyles({
	buttonGroupWrapper,
	button,
	iconNameText,
	activeBackground,
	inActiveBackground,
	footer,
	addPhotosButton,
	damagedVehicleContainer,
	imageGallery,
	imageGalleryInside,
	takenImage,
	dialogContentText
});
