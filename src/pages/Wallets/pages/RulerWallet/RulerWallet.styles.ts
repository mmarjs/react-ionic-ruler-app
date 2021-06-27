import { CSSProperties } from '@material-ui/styles';
import {
	RULER_WALLET_IMAGE_INITIAL_HEIGHT,
	RULER_WALLET_IMAGE_INITIAL_POSITION_RIGHT,
	RULER_WALLET_IMAGE_INITIAL_WIDTH,
	RULER_WALLET_IMAGE_ORIGIN_WIDTH,
	RULER_WALLET_PAGE_INITIAL_WIDTH
} from './RulerWallet.variables';
import { createStyles } from '@material-ui/core';
import { font, percentage, pxToRem } from 'styles';

const goBackIcon: CSSProperties = {
	backgroundColor: '#00b559',
	color: '#ffffff',
	margin: `${pxToRem(20)} 0 0 ${pxToRem(10)}`,
	'&:hover': {
		backgroundColor: 'rgb(0, 171, 85)'
	}
};

const content: CSSProperties = {
	position: 'absolute',
	top: 0,
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column'
};

const container: CSSProperties = {
	overflow: 'auto'
};

const headerWrapper: CSSProperties = {
	position: 'relative',
	backgroundColor: '#00b559',
	width: '100%',
	height: pxToRem(RULER_WALLET_IMAGE_INITIAL_HEIGHT),
	overflow: 'hidden',
	borderBottomLeftRadius: pxToRem(40),
	borderBottomRightRadius: pxToRem(40)
};

const titleWrapper: CSSProperties = {
	padding: `0 ${pxToRem(20)} ${pxToRem(17)} ${pxToRem(20)}`,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const titleText: CSSProperties = {
	...font({
		fontWeight: 'bold',
		lineHeight: 1.4,
		color: '#ffffff'
	}),
	fontSize: pxToRem(25),
	zIndex: 1
};

const headerContent: CSSProperties = {
	padding: `0 ${pxToRem(20)} ${pxToRem(35)} ${pxToRem(20)}`,
	display: 'flex',
	flexDirection: 'column'
};

const headerHelperText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5
		// color: 'rgba(255, 255, 255, 0.5)'
	}),
	fontSize: pxToRem(10),
	zIndex: 1
};

const imageWrapper: CSSProperties = {
	position: 'absolute',
	whiteSpace: 'nowrap',
	overflow: 'visible',
	right: percentage(RULER_WALLET_IMAGE_INITIAL_POSITION_RIGHT / RULER_WALLET_PAGE_INITIAL_WIDTH),
	top: 0,
	width: percentage(RULER_WALLET_IMAGE_INITIAL_WIDTH / RULER_WALLET_PAGE_INITIAL_WIDTH),
	height: pxToRem(RULER_WALLET_IMAGE_INITIAL_HEIGHT),
	minHeight: pxToRem(RULER_WALLET_IMAGE_INITIAL_HEIGHT)
};

const image: CSSProperties = {
	position: 'absolute',
	bottom: 0,
	right: 0,
	width: '100%',
	height: '100%',
	maxWidth: '100%',
	maxHeight: `100%`,
	minWidth: pxToRem(RULER_WALLET_IMAGE_ORIGIN_WIDTH),
	userSelect: 'none',
	userDrag: 'none'
};

const amountText: CSSProperties = {
	...font({
		fontWeight: 'bold',
		lineHeight: 1.5,
		color: 'rgb(255, 255, 255)'
	}),
	fontSize: pxToRem(32),
	paddingBottom: pxToRem(20),
	zIndex: 1
};

const addressWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingTop: pxToRem(5)
};

const addressText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: 'rgb(255, 255, 255)'
	}),
	fontSize: pxToRem(15),
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	zIndex: 1
};

const copyButton: CSSProperties = {
	padding: 0,
	boxShadow: 'none',
	backgroundColor: 'transparent',
	'&:hover': {
		backgroundColor: 'transparent'
	}
};

const historyWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column'
};

const historyRowWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	padding: `${pxToRem(25)} ${pxToRem(30)} ${pxToRem(15)} ${pxToRem(20)}`
};

const footer: CSSProperties = {
	padding: pxToRem(20),
	display: 'flex',
	flexDirection: 'row',
	marginTop: 'auto',
	'& button': {
		fontWeight: 'bold',
		'&:first-child': {
			marginRight: pxToRem(7.5)
		},
		'&:last-child': {
			marginLeft: pxToRem(7.5)
		}
	}
};

const dateText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5,
		color: 'rgba(24, 28, 25, 0.5)'
	}),
	fontSize: pxToRem(10)
};

export const styles = createStyles({
	content,
	container,
	headerWrapper,
	goBackIcon,
	titleWrapper,
	titleText,
	image,
	imageWrapper,
	headerContent,
	headerHelperText,
	amountText,
	addressWrapper,
	addressText,
	copyButton,
	historyWrapper,
	historyRowWrapper,
	dateText,
	footer
});
