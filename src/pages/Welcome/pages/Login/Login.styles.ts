import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const innerContent: CSSProperties = {
	paddingTop: pxToRem(13),
	textAlign: 'left',
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const logInBtn: CSSProperties = {
	marginTop: 'auto',
	marginBottom: pxToRem(30)
};
export const styles = createStyles({
	logInBtn,
	innerContent
});
