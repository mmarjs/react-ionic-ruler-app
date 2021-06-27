import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { percentage, pxToRem } from 'styles';

const qrCodeWrapper: CSSProperties = {
	display: 'flex',
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center'
};

const shareButton: CSSProperties = {
	marginTop: 'auto',
	fontWeight: 'bold'
};

const shareImageAspectRatioBox: CSSProperties = {
	height: 0,
	width: percentage(0.59),
	paddingTop: percentage(0.59),
	position: 'relative'
};

const shareImageAspectRatioBoxInside: CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	width: '100%',
	height: '100%'
};

const shareImage: CSSProperties = {
	width: percentage(1),
	height: percentage(1),
	objectFit: 'cover',
	borderRadius: pxToRem(10),
	overflow: 'hidden'
};
export const styles = createStyles({
	shareImageAspectRatioBox,
	shareImageAspectRatioBoxInside,
	qrCodeWrapper,
	shareButton,
	shareImage
});
