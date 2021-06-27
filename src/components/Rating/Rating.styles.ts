import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const ratingRoot: CSSProperties = {
	'& .MuiRating-label:not(:first-child)': {
		marginLeft: pxToRem(10)
	}
};
export const styles = createStyles({
	ratingRoot
});
