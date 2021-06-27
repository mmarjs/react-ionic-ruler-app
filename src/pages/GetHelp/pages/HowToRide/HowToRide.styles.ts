import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const pageHeader: CSSProperties = {
	position: 'absolute',
	zIndex: 2
};

const pageContent: CSSProperties = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between'
};

const footer: CSSProperties = {
	zIndex: 1,
	padding: `${pxToRem(20)}`,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

const skipButton: CSSProperties = {
	maxWidth: pxToRem(335),
	maxHeight: pxToRem(50)
};

const stateWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	padding: `0 0 ${pxToRem(30)} 0`
};

const stateItem: CSSProperties = {
	width: pxToRem(4),
	height: pxToRem(4),
	backgroundColor: '#00b559',
	margin: `0 ${pxToRem(5)}`,
	borderRadius: pxToRem(10)
};

const currentStateItem: CSSProperties = {
	width: pxToRem(30)
};

export const styles = createStyles({
	pageHeader,
	pageContent,
	footer,
	skipButton,
	stateWrapper,
	stateItem,
	currentStateItem
});
