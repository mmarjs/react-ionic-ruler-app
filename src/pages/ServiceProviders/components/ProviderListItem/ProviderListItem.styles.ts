import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const providerListItem: CSSProperties = {
	padding: `${pxToRem(10)} ${pxToRem(20)}`
};

const iconContainer: CSSProperties = {
	alignSelf: 'start'
};

const providerIconContainer: CSSProperties = {
	minWidth: pxToRem(40)
};

const providerIcon: CSSProperties = {
	marginRight: 'auto',
	padding: pxToRem(5),
	boxSizing: 'content-box'
};

const providerTextContainer: CSSProperties = {
	marginTop: 0,
	marginBottom: 0
};

const providerText: CreateCSSProperties = {
	marginBottom: pxToRem(5),
	...font({
		fontSize: 20,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};

const providerSubtext: CreateCSSProperties = {
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5')
};

const goToIcon: CSSProperties = {
	marginLeft: 'auto'
};
export const styles = createStyles({
	iconContainer,
	providerListItem,
	providerIconContainer,
	providerIcon,
	providerTextContainer,
	providerText,
	providerSubtext,
	goToIcon
});
