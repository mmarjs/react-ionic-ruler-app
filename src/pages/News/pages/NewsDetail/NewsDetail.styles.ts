import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const vehicleImage: CSSProperties = {
	marginBottom: pxToRem(20)
};

const title: CSSProperties = {
	marginBottom: pxToRem(15)
};

const titleTxt: CSSProperties = {
	...font({
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.4,
		letterSpacing: 'normal',
		color: '#181c19'
	}),
	fontSize: pxToRem(25)
};

const descriptionText: CSSProperties = {
	...font({
		fontFamily: 'Montserrat',
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal',
		color: '#181c19'
	}),
	opacity: 0.5,
	fontSize: pxToRem(15)
};

const detailContainer: CreateCSSProperties = {
	flex: 1,
	background: (props: any) => (props.isDarkMode ? '#181c19' : '#fff')
};

export const styles = createStyles({
	vehicleImage,
	title,
	titleTxt,
	descriptionText,
	detailContainer
});
