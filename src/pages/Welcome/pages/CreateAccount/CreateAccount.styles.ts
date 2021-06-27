import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const innerContent: CSSProperties = {
	paddingTop: pxToRem(13),
	textAlign: 'left',
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const footer: CSSProperties = {
	marginTop: 'auto',
	display: 'flex',
	flexDirection: 'column',
	'&> span': {
		padding: `${pxToRem(7)} 0 ${pxToRem(8)} 0`
	}
};

const createAccountText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	textAlign: 'center'
};

export const styles = createStyles({
	footer,
	innerContent,
	createAccountText
});
