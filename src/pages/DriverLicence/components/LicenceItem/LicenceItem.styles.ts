import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const content: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: pxToRem(325),
	margin: `${pxToRem(15)} auto ${pxToRem(5)} auto`
};

const image: CSSProperties = {
	height: pxToRem(167),
	borderRadius: pxToRem(15)
};

export const styles = createStyles({
	content,
	image
});
