import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';

const inputWrapper: CreateCSSProperties = {
	width: '100%',
	height: '36px',
	borderRadius: '10px',
	backgroundColor: (props: any) => (props.isDarkMode ? '#242725' : '#f3f3f3'),
	position: 'relative',
	marginTop: '20px',
	marginBottom: '20px',
	color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(24, 28, 25, 0.5)')
};

const searchIcon: CreateCSSProperties = {
	height: '100%',
	position: 'absolute',
	left: '6px',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
};

const inputRoot: CSSProperties = {
	color: 'inherit',
	width: '100%',
	fontWeight: 600
};

const inputInput: CreateCSSProperties = {
	width: '100%',
	padding: '6px 10px 6px 40px',
	height: '25px'
};

export const styles = createStyles({
	searchIcon,
	inputWrapper,
	inputRoot,
	inputInput
});
