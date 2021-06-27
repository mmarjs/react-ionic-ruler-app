import { CSSProperties, createStyles } from '@material-ui/styles';

const li: CSSProperties = {
	display: 'flex',
	'& h6': {
		width: '100%',
		marginLeft: '10px'
	},
	'& img': {
		width: '30px',
		height: '30px'
	}
};

const text: CSSProperties = {
	paddingLeft: '40px'
};

const provider: CSSProperties = {
	marginBottom: '20px'
};

export const styles = createStyles({
	li,
	provider,
	text
});
