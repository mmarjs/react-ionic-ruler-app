import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const li: CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	margin: `${pxToRem(27)} 0 0 0`,
	'& h6': {
		width: '100%',
		marginLeft: pxToRem(10),
		color: '#181c19',
		fontWeight: 600,
		fontSize: pxToRem(15)
	},
	'& img': {
		width: pxToRem(30),
		height: pxToRem(30)
	}
};

const faqFooter: CSSProperties = {
	display: 'flex',
	marginBottom: pxToRem(23),
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};

export const styles = createStyles({
	li,
	faqFooter
});
