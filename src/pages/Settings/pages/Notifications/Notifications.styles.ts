import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const providersList: CSSProperties = {
	marginTop: pxToRem(6),
	padding: '0px'
};

const innerContent: CSSProperties = {
	textAlign: 'left'
};

const sectionBreaker: CSSProperties = {
	color: 'rgba(24, 28, 25, 0.5)',
	fontWeight: 600,
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(10),
	lineHeight: 1.5
};

const textWrapper: CSSProperties = {
	paddingTop: pxToRem(20),
	paddingBottom: pxToRem(11)
};

export const styles = createStyles({
	providersList,
	sectionBreaker,
	innerContent,
	textWrapper
});
