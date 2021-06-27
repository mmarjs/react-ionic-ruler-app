import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const sheetContainer: CSSProperties = {
	'& .react-swipeable-view-container': {
		borderTopLeftRadius: pxToRem(15),
		borderTopRightRadius: pxToRem(15),
		boxShadow: 'none !important'
	}
};

const sheetWrapper: CreateCSSProperties = {
	backgroundColor: (props: any) =>
		props.darkMode ? (props.isDarkMode ? '#4E4C43' : 'rgba(24, 28, 25, 0.5)') : props.isDarkMode ? '#181c19' : undefined,
	padding: (props: any) => (props.darkMode ? `${pxToRem(10)} 0 0 0` : `${pxToRem(15)} ${pxToRem(20)} ${pxToRem(5)} ${pxToRem(25)}`)
};

const outsideWrapper: CreateCSSProperties = {
	position: 'absolute',
	top: pxToRem(-10),
	left: pxToRem(16),
	backgroundColor: (props: any) => (props.isDarkMode ? '#505652' : 'rgba(255, 255, 255, 0.6)'),
	width: `calc(100% - ${pxToRem(32)})`,
	minHeight: pxToRem(10),
	borderTopLeftRadius: pxToRem(15),
	borderTopRightRadius: pxToRem(15)
};

const closeButton: CSSProperties = {
	position: 'absolute',
	top: pxToRem(-60),
	right: pxToRem(20)
};

const topWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

const blackBar: CreateCSSProperties = {
	width: pxToRem(37),
	height: pxToRem(4),
	borderRadius: pxToRem(5),
	background: (props: any) => (props.darkMode || props.isDarkMode ? '#ffffff' : '#181c19')
};

const sheetTitle: CreateCSSProperties = {
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(20),
	fontWeight: 'bold',
	lineHeight: 1.5,
	color: (props: any) => (props.darkMode || props.isDarkMode ? '#ffffff' : '#181c19'),
	padding: (props: any) => (props.darkMode ? `${pxToRem(31)} 0 ${pxToRem(10)} 0` : `${pxToRem(10)} 0 ${pxToRem(5)} 0`)
};

const sheetDescription: CreateCSSProperties = {
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(15),
	fontWeight: 600,
	lineHeight: 1.67,
	color: (props: any) => (props.darkMode || props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5)'),
	maxWidth: (props: any) => (props.darkMode ? `${pxToRem(230)}` : undefined),
	textAlign: 'center'
};

const findMeButton: CreateCSSProperties = {
	position: 'absolute',
	top: (props: any) => (props.hasCloseButton ? `${pxToRem(-120)}` : `${pxToRem(-60)}`),
	right: pxToRem(20)
};

export const styles = createStyles({
	findMeButton,
	sheetContainer,
	sheetWrapper,
	blackBar,
	sheetTitle,
	sheetDescription,
	topWrapper,
	outsideWrapper,
	closeButton
});
