import { CSSProperties } from '@material-ui/styles';
import { FontSize } from './FontSize';

export type CSSFontProperties = Partial<
	Pick<
		CSSProperties,
		'fontStretch' | 'fontStyle' | 'fontVariant' | 'fontWeight' | 'lineHeight' | 'fontFamily' | 'letterSpacing' | 'color'
	> & {
		fontSize: FontSize;
	}
>;
