import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { pxToRem } from 'styles';

const providerList: CSSProperties = {
	paddingTop: pxToRem(25)
};

export const styles = createStyles({
	providerList
});
