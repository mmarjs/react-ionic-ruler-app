import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import {
	WELCOME_PAGE_BACKGROUND_INITIAL_HEIGHT,
	WELCOME_PAGE_BACKGROUND_INITIAL_POSITION_RIGHT,
	WELCOME_PAGE_BACKGROUND_INITIAL_POSITION_TOP,
	WELCOME_PAGE_BACKGROUND_INITIAL_WIDTH,
	WELCOME_PAGE_CONTENT_INITIAL_HEIGHT,
	WELCOME_PAGE_CONTENT_INITIAL_PADDING_BOTTOM,
	WELCOME_PAGE_CONTENT_INITIAL_WIDTH,
	WELCOME_PAGE_CONTENT_MAX_WIDTH,
	WELCOME_PAGE_INITIAL_HEIGHT,
	WELCOME_PAGE_INITIAL_WIDTH
} from './Welcome.variables';
import { font, percentage, pxToRem } from 'styles';

const page = {
	zIndex: 0
};

const background: CSSProperties = {
	position: 'absolute',
	bottom: 0
};

const backgroundContainer: CSSProperties = {
	zIndex: -1,
	position: 'absolute',
	whiteSpace: 'nowrap',
	overflow: 'visible',
	right: percentage(WELCOME_PAGE_BACKGROUND_INITIAL_POSITION_RIGHT / WELCOME_PAGE_INITIAL_WIDTH),
	top: percentage(WELCOME_PAGE_BACKGROUND_INITIAL_POSITION_TOP / WELCOME_PAGE_INITIAL_HEIGHT),
	width: percentage(WELCOME_PAGE_BACKGROUND_INITIAL_WIDTH / WELCOME_PAGE_INITIAL_WIDTH),
	height: percentage(WELCOME_PAGE_BACKGROUND_INITIAL_HEIGHT / WELCOME_PAGE_INITIAL_HEIGHT)
};

const image: CSSProperties = {
	width: 'auto',
	height: 'auto',
	maxWidth: '100%',
	maxHeight: '100%',
	userSelect: 'none',
	userDrag: 'none',
	imageRendering: 'optimizeQuality' as any
};

const content: CSSProperties = {
	zIndex: 1,
	position: 'absolute',
	bottom: 0,
	left: '50%',
	transform: 'translateX(-50%)',
	textAlign: 'center',
	width: percentage(WELCOME_PAGE_CONTENT_INITIAL_WIDTH / WELCOME_PAGE_INITIAL_WIDTH),
	height: percentage(WELCOME_PAGE_CONTENT_INITIAL_HEIGHT / WELCOME_PAGE_INITIAL_HEIGHT),
	maxWidth: WELCOME_PAGE_CONTENT_MAX_WIDTH,
	paddingBottom: WELCOME_PAGE_CONTENT_INITIAL_PADDING_BOTTOM,
	boxSizing: 'border-box'
};

const welcomeText: CreateCSSProperties = {
	maxWidth: pxToRem(159),
	margin: '0 auto',
	textAlign: 'center',
	marginBottom: pxToRem(15),
	...font({
		fontSize: 32,
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};

const signInWithSocialsText: CreateCSSProperties = {
	marginBottom: pxToRem(20),
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? '#fff' : 'rgba(24, 28, 25, 0.5)'),
	opacity: (props: any) => (props.isDarkMode ? 0.5 : 1)
};

const alreadyHaveAnAccountText: CreateCSSProperties = {
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? '#fff' : 'rgba(24, 28, 25, 0.5)')
};

const notRecommendedButton: CreateCSSProperties = {
	fontWeight: 'bold',
	backgroundColor: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	'& span': {
		color: (props: any) => (props.isDarkMode ? '#181c19' : '#fff')
	}
};
export const styles = createStyles({
	notRecommendedButton,
	alreadyHaveAnAccountText,
	signInWithSocialsText,
	welcomeText,
	background,
	backgroundContainer,
	page,
	image,
	content
});
