import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const innerContent: CSSProperties = {
	paddingTop: pxToRem(13),
	textAlign: 'left',
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const saveBtn: CSSProperties = {
	marginTop: 'auto',
	marginBottom: pxToRem(20)
};

const smallText: CreateCSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 25, 0.5)'),
	textAlign: 'center',
	padding: `${pxToRem(7)} 0 0 0`
};

export const styles = createStyles({
	saveBtn,
	innerContent,
	smallText
});
