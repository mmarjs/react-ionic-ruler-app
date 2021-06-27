import { CSSProperties, createStyles } from '@material-ui/styles';
import { percentage, pxToRem } from 'styles';
import birdLogo from './images/Bird logo.png';

const historyContainer: CSSProperties = {
	marginBottom: pxToRem(20),
	borderRadius: pxToRem(15),
	backgroundColor: '#f8ca06'
};

const historyContent: CSSProperties = {
	padding: `${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(10)}`,
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: '#ffdb41',
	borderRadius: pxToRem(15)
};

const historyFooter: CSSProperties = {
	padding: `${pxToRem(15)} ${pxToRem(20)} ${pxToRem(15)} ${pxToRem(10)}`,
	backgroundColor: '#f8ca06',
	borderBottomLeftRadius: pxToRem(15),
	borderBottomRightRadius: pxToRem(15),
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const historyWrapper: CSSProperties = {
	paddingLeft: pxToRem(5),
	display: 'flex',
	flexDirection: 'column',
	width: percentage(1)
};

const progressWrapper: CSSProperties = {
	padding: `${pxToRem(8)} ${pxToRem(10)}`,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	maxHeight: pxToRem(70)
};

const startAndEndPoint: CSSProperties = {
	width: pxToRem(4),
	height: pxToRem(4),
	backgroundColor: '#181c19',
	borderRadius: percentage(0.5),
	border: `${pxToRem(3)} solid #ffffff`
};

const startPointWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const midPoint: CSSProperties = {
	width: pxToRem(2),
	height: pxToRem(2),
	backgroundColor: '#181c19',
	borderRadius: percentage(0.5)
};

const largeText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.67,
	fontColor: '#181c19',
	fontSize: pxToRem(15)
};

const smallText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.5,
	fontColor: '#181c19',
	fontSize: pxToRem(10),
	opacity: 0.5
};

const iconWrapper: CSSProperties = {
	width: pxToRem(40),
	height: pxToRem(40),
	borderRadius: pxToRem(20),
	backgroundColor: '#ffffff',
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const iconDecorator: CSSProperties = {
	position: 'absolute',
	top: pxToRem(-5),
	left: pxToRem(-5),
	width: pxToRem(20),
	height: pxToRem(20),
	backgroundImage: `url(${birdLogo})`
};

const amountText: CSSProperties = {
	fontWeight: 'bold',
	lineHeight: 1.67,
	fontColor: '#181c19',
	fontSize: pxToRem(20)
};

const reportIconButton: CSSProperties = {
	padding: `0 ${pxToRem(5)} 0 0`,
	backgroundColor: '#f8ca06',
	boxShadow: 'none',
	'&:hover': {
		backgroundColor: '#f8ca06'
	}
};

const endPoint: CSSProperties = {
	paddingTop: pxToRem(15)
};

const rating: CSSProperties = {
	'& .MuiRating-label:not(:first-child)': {
		marginLeft: pxToRem(0)
	}
};
export const styles = createStyles({
	rating,
	historyContainer,
	historyContent,
	historyFooter,
	progressWrapper,
	historyWrapper,
	startAndEndPoint,
	midPoint,
	startPointWrapper,
	endPoint,
	largeText,
	smallText,
	iconWrapper,
	amountText,
	reportIconButton,
	iconDecorator
});
