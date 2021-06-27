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

const dialogContentText: CreateCSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	opacity: 0.5,
	padding: `${pxToRem(10)} ${pxToRem(10)} ${pxToRem(5)} ${pxToRem(10)}`
};

export const styles = createStyles({
	innerContent,
	saveBtn,
	dialogContentText
});
