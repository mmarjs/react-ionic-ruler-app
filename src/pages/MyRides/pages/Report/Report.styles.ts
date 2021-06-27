import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { percentage, pxToRem } from 'styles';

const reportContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	height: `calc(100vh - ${pxToRem(145)})`
};

const reportContent: CSSProperties = {
	overflow: 'auto',
	paddingTop: pxToRem(15),
	flex: 1
};

const footer: CSSProperties = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'flex-end'
};

const backButton: CSSProperties = {
	position: 'absolute',
	top: pxToRem(-90),
	right: 0,
	maxHeight: pxToRem(50),
	// '&:hover': {
	// 	backgroundColor: '#ffffff'
	// },
	borderRadius: percentage(0.5)
	// backgroundColor: '#ffffff'
};

const fileInput: CSSProperties = {
	display: 'none'
};

const sendButton: CSSProperties = {
	maxHeight: pxToRem(50),
	marginLeft: pxToRem(10),
	'&:hover': {
		color: '#ffffff',
		backgroundColor: '#00b559'
	},
	borderRadius: pxToRem(15),
	backgroundColor: '#00b559',
	'&.Mui-disabled': {
		backgroundColor: '#caf1dd',
		color: '#ffffff'
	}
};

const messageInput: CreateCSSProperties = {
	width: percentage(1),
	backgroundColor: (props: any) => (props.isDarkMode ? '#242725' : '#f3f3f3'),
	borderRadius: pxToRem(15),
	'&.MuiInputBase-multiline': {
		padding: `${pxToRem(10)} 0 ${pxToRem(10)} ${pxToRem(15)}`
	},
	'&>.MuiInputBase-inputMultiline': {
		padding: `${pxToRem(2)} 0 ${pxToRem(3)} ${pxToRem(5)}`
	},
	'&>.MuiInputAdornment-positionStart': {
		marginRight: 0
	},
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(24, 28, 25, 0.5)')
};

const closeIcon: CSSProperties = {
	position: 'absolute',
	right: pxToRem(0),
	top: pxToRem(0),
	padding: 0,
	boxShadow: 'none',
	color: '#ffffff',
	backgroundColor: 'transparent',
	'&:hover': {
		color: '#ffffff',
		backgroundColor: 'transparent'
	}
};

const sentImagesWrapper: CSSProperties = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'row-reverse',
	flexWrap: 'wrap',
	borderRadius: 15,
	overflow: 'hidden',
	marginBottom: pxToRem(40)
};

const supportMsgWrapper: CSSProperties = {
	// minWidth: pxToRem(130),
	position: 'relative',
	padding: `${pxToRem(15)} ${pxToRem(20)}`,
	backgroundColor: '#f8ca06',
	borderRadius: `${pxToRem(15)} ${pxToRem(15)} ${pxToRem(15)} 0`,
	width: 'fit-content',
	wordWrap: 'break-word',
	alignSelf: 'flex-start',
	marginBottom: pxToRem(40)
};

const sentImageWrapper: CSSProperties = {
	width: pxToRem(100),
	height: pxToRem(100),
	marginLeft: pxToRem(1),
	marginBottom: pxToRem(1)
};

const nonSentImageWrapper: CSSProperties = {
	width: pxToRem(100),
	height: pxToRem(100),
	position: 'relative'
};

const image: CSSProperties = {
	width: percentage(1),
	height: percentage(1),
	objectFit: 'cover'
};

const nonSentImagesWrapper: CreateCSSProperties = {
	position: 'absolute',
	top: (props: any) => (props.rowsNum ? -100 * props.rowsNum : 0),
	left: 0,
	right: 60,
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	backgroundColor: '#f3f3f3',
	borderRadius: 15,
	overflow: 'hidden'
};

const timeTextWrapper: CSSProperties = {
	position: 'absolute',
	bottom: -20,
	left: 20
};

const sentMsgWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row-reverse',
	flexWrap: 'wrap',
	marginBottom: pxToRem(40)
};

const msgWrapper: CSSProperties = {
	position: 'relative',
	padding: `${pxToRem(15)} ${pxToRem(20)}`,
	borderRadius: `${pxToRem(15)} ${pxToRem(15)} 0 ${pxToRem(15)}`,
	wordWrap: 'break-word',
	width: 'fit-content',
	backgroundColor: '#f3f3f3',
	minWidth: pxToRem(110)
};

const msgText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.67,
	// color: '#181c19',
	fontSize: pxToRem(15)
};

const attachIcon: CSSProperties = {
	'&>.MuiInputAdornment-positionStart': {
		display: 'none'
	}
};

const writerTextWrapper: CSSProperties = {
	position: 'absolute',
	bottom: -20,
	right: 20
};

const smallText: CreateCSSProperties = {
	fontWeight: 600,
	lineHeight: 1.5,
	fontSize: pxToRem(10)
	// color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(24, 28, 25, 0.5)')
};

const imagesNumText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 2,
	fontSize: pxToRem(10),
	color: 'rgba(24, 28, 25, 0.5)'
};

const imagesNumTextWrapper: CSSProperties = {
	minWidth: pxToRem(44),
	position: 'absolute',
	bottom: pxToRem(10),
	right: pxToRem(10),
	backgroundColor: 'rgba(255, 255, 255, 0.6)',
	borderRadius: pxToRem(20),
	textAlign: 'center'
};

const attach: CreateCSSProperties = {
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.54)')
};
export const styles = createStyles({
	attach,
	imagesNumTextWrapper,
	imagesNumText,
	attachIcon,
	msgText,
	sentMsgWrapper,
	image,
	messageInput,
	fileInput,
	reportContainer,
	footer,
	sendButton,
	backButton,
	reportContent,
	closeIcon,
	sentImagesWrapper,
	sentImageWrapper,
	nonSentImagesWrapper,
	nonSentImageWrapper,
	supportMsgWrapper,
	timeTextWrapper,
	writerTextWrapper,
	smallText,
	msgWrapper
});
