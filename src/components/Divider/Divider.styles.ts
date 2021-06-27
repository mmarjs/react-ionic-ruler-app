import { createStyles, CreateCSSProperties } from '@material-ui/styles';
import { pxToRem } from 'styles';

const divider: CreateCSSProperties = {
	borderBottom: (props: any) => `${pxToRem(1)} solid ${props.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(24, 28, 25, 0.05)'}`,
	boxSizing: 'border-box',
	height: pxToRem(1),
	width: '100%'
};

export const styles = createStyles({
	divider
});
