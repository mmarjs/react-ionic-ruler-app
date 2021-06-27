import 'typeface-montserrat';
import 'typeface-roboto';
import { DEFAULT_FONT_FAMILY } from 'styles';
import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
	typography: {
		fontFamily: DEFAULT_FONT_FAMILY
	},
	palette: {
		background: {
			default: '#FFF'
		}
	},
	overrides: {
		MuiBackdrop: {
			root: {
				backgroundColor: 'rgba(24, 28, 25, 0.4)'
			}
		}
	}
});
