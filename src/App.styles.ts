import { withStyles } from '@material-ui/styles';

export const GlobalCss = withStyles({
	'@global': {
		'html, body, #root': {
			width: '100%',
			height: '100%'
		}
	}
})(() => {
	/* Core CSS required for Ionic components to work properly */
	require('@ionic/react/css/core.css');

	return null;
});
