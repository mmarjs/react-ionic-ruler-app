import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

const pageBody: CreateCSSProperties = {
	zIndex: 0,
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	minHeight: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#fff')
};

const backgroundContainer: CreateCSSProperties = {
	zIndex: -9999,
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	background: (props: any) => props.background,
	backgroundColor: (props: any) => props.backgroundColor
};

const fullPage: CreateCSSProperties = {
	zIndex: 0,
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	overflow: 'hidden',
	backgroundColor: (props: any) => (props.isDarkMode ? '#181c19' : '#fff')
};

const fullPageBody: CSSProperties = {
	zIndex: 0,
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	minHeight: '100%'
};

const pageHeader: CSSProperties = {
	flexBasis: 'auto',
	flexGrow: 0,
	flexShrink: 0,
	padding: `calc(${pxToRem(20)} + var(--ion-safe-area-top, 0)) ${pxToRem(10)} ${pxToRem(10)}`
};

const pageHeaderInner: CSSProperties = {
	paddingLeft: pxToRem(10),
	paddingRight: pxToRem(10)
};

const pageContent: CreateCSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	flexBasis: 'auto',
	flexGrow: 1,
	flexShrink: 0,
	padding: (props: any) =>
		`${props.hasPageHeader ? 0 : pxToRem(20)} ${props.noHorizontalContentPadding ? 0 : pxToRem(20)} calc(${pxToRem(
			20
		)} + var(--ion-safe-area-bottom, 0))`
};

const pageTitle: CreateCSSProperties = {
	...font({
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		letterSpacing: 'normal',
		color: '#181c19'
	}),
	fontSize: (props: any) => (props.titleSize === 'large' ? pxToRem(32) : pxToRem(25)),
	lineHeight: (props: any) => (props.titleSize === 'large' ? 1.5 : 1.4),
	marginTop: pxToRem(10)
};

const toolbarWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingRight: pxToRem(10)
};

const headerLink: CreateCSSProperties = {
	alignSelf: 'flex-end',
	display: 'block',
	padding: (props: any) => (props.headerLinkIsString ? pxToRem(10) : 0)
};

export const styles = createStyles({
	pageTitle,
	pageBody,
	backgroundContainer,
	fullPage,
	fullPageBody,
	pageHeader,
	pageHeaderInner,
	pageContent,
	toolbarWrapper,
	headerLink
});
