import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const providersList: CSSProperties = {
	padding: `${pxToRem(20)} 0 0 0`,
	'& .MuiBox-root:first-child .MuiListItemText-root': {
		paddingBottom: pxToRem(30)
	},
	'& .MuiBox-root:last-child .MuiListItemText-root': {
		borderBottom: 'none'
	}
};

const searchBoxWrapper: CSSProperties = {
	padding: `${pxToRem(5)} ${pxToRem(20)} ${pxToRem(0)} ${pxToRem(20)}`
};

const searchBox: CSSProperties = {
	margin: 0
};

export const styles = createStyles({
	providersList,
	searchBoxWrapper,
	searchBox
});
