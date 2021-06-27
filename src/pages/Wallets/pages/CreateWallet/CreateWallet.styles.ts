import {
	CREATE_WALLET_IMAGE_INITIAL_HEIGHT,
	CREATE_WALLET_IMAGE_INITIAL_POSITION_RIGHT,
	CREATE_WALLET_IMAGE_INITIAL_WIDTH,
	CREATE_WALLET_PAGE_INITIAL_HEIGHT,
	CREATE_WALLET_PAGE_INITIAL_WIDTH
} from './CreateWalletDescription.variables';
import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, percentage, pxToRem } from 'styles';

const page: CSSProperties = {
	height: '100%'
};

const walletItemList: CSSProperties = {
	paddingTop: pxToRem(30)
};

const listItem: CreateCSSProperties = {
	borderRadius: pxToRem(15),
	marginBottom: pxToRem(15),
	border: (props: any) => (props.isDarkMode ? `solid ${pxToRem(2)} rgba(255, 255, 255, 0.1)` : `solid ${pxToRem(2)} #f3f3f3`),
	padding: pxToRem(20),
	'& .MuiListItemIcon-root': {
		minWidth: pxToRem(30)
	},
	'& .MuiListItemText-primary': {
		...font({
			fontWeight: 'bold',
			lineHeight: 1.67,
			color: '#181c19'
		}),
		fontSize: pxToRem(15),
		textAlign: 'center',
		marginLeft: pxToRem(-30)
	},
	'&.active': {
		borderColor: '#00b559'
	},
	'&:hover': {
		borderColor: '#00b559'
	}
};

const nextButton: CSSProperties = {
	marginTop: 'auto',
	fontWeight: 'bold'
};

const descriptionContent: CSSProperties = {
	position: 'relative'
};

const descriptionImageWrapper: CSSProperties = {
	zIndex: -1,
	position: 'absolute',
	whiteSpace: 'nowrap',
	overflow: 'visible',
	right: percentage(CREATE_WALLET_IMAGE_INITIAL_POSITION_RIGHT / CREATE_WALLET_PAGE_INITIAL_WIDTH),
	top: 0,
	width: percentage(CREATE_WALLET_IMAGE_INITIAL_WIDTH / CREATE_WALLET_PAGE_INITIAL_WIDTH),
	height: `${(CREATE_WALLET_IMAGE_INITIAL_HEIGHT / CREATE_WALLET_PAGE_INITIAL_HEIGHT) * 100}vh`
};

const descriptionImage: CSSProperties = {
	position: 'absolute',
	bottom: 0,
	right: 0,
	width: '100%',
	height: '100%',
	maxWidth: '100%',
	maxHeight: '100%',
	userSelect: 'none',
	userDrag: 'none'
};

const description: CreateCSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: 'rgba(0, 0, 0, 0.5)'
	}),
	fontSize: pxToRem(15),
	padding: `0 ${pxToRem(20)} ${pxToRem(15)} ${pxToRem(20)}`
};

const footer: CSSProperties = {
	marginTop: 'auto',
	padding: `${pxToRem(20)} ${pxToRem(20)} 0 ${pxToRem(20)}`
};

const wordWrapper: CreateCSSProperties = {
	display: 'flex',
	flexFlow: 'wrap',
	padding: (props: any) => `${pxToRem(5)} ${pxToRem(10)} ${props.isShowError ? 0 : pxToRem(15)} ${pxToRem(20)}`
};

const wordText: CreateCSSProperties = {
	margin: `${pxToRem(10)} ${pxToRem(10)} 0 0`,
	borderRadius: pxToRem(100),
	padding: `${pxToRem(8)} ${pxToRem(20)} ${pxToRem(7)} ${pxToRem(20)}`,
	border: (props: any) => (props.isDarkMode ? `solid ${pxToRem(2)} rgba(255, 255, 255, 0.1)` : `solid ${pxToRem(2)} #f3f3f3`)
};

const unsetWordText: CreateCSSProperties = {
	margin: `${pxToRem(10)} ${pxToRem(10)} 0 0`,
	borderRadius: pxToRem(100),
	padding: `${pxToRem(8)} ${pxToRem(20)} ${pxToRem(7)} ${pxToRem(20)}`,
	border: (props: any) => (props.isDarkMode ? `dashed ${pxToRem(2)} rgba(255, 255, 255, 0.1)` : `dashed ${pxToRem(2)} #f3f3f3`),
	'& span': {
		color: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff')
	}
};

const wordButtonWrapper: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#242725' : '#f3f3f3')
};

const wordButton: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff'),
	width: 'fit-content',
	lineHeight: 1.67,
	'& .MuiButton-label': {
		minHeight: 'unset'
	},
	'&:hover': {
		backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#ffffff') // 'rgba(0, 0, 0, 0.2)'
	}
};

const wordNumber: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67
	}),
	color: 'rgba(24, 28, 25, 0.5)',
	fontSize: pxToRem(15),
	marginRight: pxToRem(5)
};
const wordName: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	}),
	fontSize: pxToRem(15)
};

const copyButton: CSSProperties = {
	color: '#00b559',
	fontWeight: 'bold',
	backgroundColor: 'transparent',
	borderRadius: pxToRem(15),
	width: 'fit-content',
	paddingTop: pxToRem(10),
	paddingBottom: pxToRem(10),
	margin: `${pxToRem(5)} auto 0 auto`,
	'&:hover': {
		backgroundColor: 'rgba(0, 0, 0, 0.2)'
	}
};

const errorWrapper: CSSProperties = {
	width: '100%',
	padding: `${pxToRem(10)} 0`,
	textAlign: 'center',
	'& span': {
		color: '#f46c63'
	}
};

const errorText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5
	}),
	fontSize: pxToRem(10)
};

const walletTypeText: CreateCSSProperties = {
	'& > .MuiListItemText-primary': {
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
	}
};

export const styles = createStyles({
	walletTypeText,
	page,
	walletItemList,
	listItem,
	footer,
	nextButton,
	descriptionContent,
	descriptionImageWrapper,
	descriptionImage,
	description,
	wordWrapper,
	wordButtonWrapper,
	wordButton,
	wordText,
	unsetWordText,
	wordNumber,
	wordName,
	copyButton,
	errorWrapper,
	errorText
});
