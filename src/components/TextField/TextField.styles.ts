import { CSSProperties, createStyles, CreateCSSProperties } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, font, pxToRem } from 'styles';

const textFieldRoot: CreateCSSProperties = {
	marginBottom: pxToRem(25),
	fontFamily: DEFAULT_FONT_FAMILY,
	'& .MuiInput-underline:before, .MuiInput-underline:after': {
		borderBottom: (props: any) => `2px solid ${props.isDarkMode ? '#fff' : '#181c19'}`,
		backgroundColor: 'transparent'
	},
	'& input, .MuiSelect-root': {
		padding: `0 0 ${pxToRem(12)} 0`,
		fontSize: pxToRem(15),
		fontWeight: 600,
		lineHeight: 1.67,
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		'&:-webkit-autofill': {
			backgroundColor: 'transparent',
			transition: 'background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s'
		},
		'&:-webkit-autofill:focus': {
			transition: 'background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s'
		},
		'&:-webkit-autofill:hover': {
			transition: 'background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s'
		}
	},
	'& label': {
		top: pxToRem(-12),
		fontSize: pxToRem(15),
		fontWeight: 600,
		lineHeight: 1.67,
		color: (props: any) => (props.isDarkMode ? '#fff' : 'rgba(24, 28, 25, 0.5) !important'),
		opacity: (props: any) => (props.isDarkMode ? 0.5 : 1)
	},
	'& .MuiSelect-selectMenu:focus': {
		backgroundColor: 'transparent'
	},
	'& .MuiInputAdornment-root': {
		paddingBottom: pxToRem(12),
		'& p': {
			...font({
				fontWeight: 600,
				lineHeight: 1.67,
				color: '#181c19'
			}),
			fontSize: pxToRem(15)
		},
		'& button': {
			padding: 0,
			boxShadow: 'none',
			marginLeft: pxToRem(32)
		}
	}
};

const selectIcon: CSSProperties = {
	position: 'absolute',
	color: '#181c19',
	right: 0,
	top: `calc(50% - ${pxToRem(20)})`,
	zIndex: -100
};

export const styles = createStyles({
	textFieldRoot,
	selectIcon
});
