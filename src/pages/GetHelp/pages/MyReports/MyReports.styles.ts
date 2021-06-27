import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const myReportContainer: CSSProperties = {
	borderBottomLeftRadius: pxToRem(15),
	borderBottomRightRadius: pxToRem(15),
	margin: ` ${pxToRem(-50)} ${pxToRem(-20)} ${pxToRem(20)} ${pxToRem(-20)}`,
	padding: ` ${pxToRem(50)} ${pxToRem(20)} 0 ${pxToRem(20)}`
};

export const styles = createStyles({
	myReportContainer
});
