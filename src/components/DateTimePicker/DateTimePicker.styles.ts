import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { DATE_TIME_PICKER_COLUMNS_HEIGHT, DATE_TIME_PICKER_OPTION_HEIGHT } from './DateTimePicker.variables';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';
import { createStyles } from '@material-ui/core';

const picker: CSSProperties = {
	zIndex: 20002,
	display: 'flex',
	flexDirection: 'column',
	position: 'absolute',
	top: 0,
	right: 0,
	left: 0,
	bottom: 0,
	width: '100%',
	height: '100%',
	userSelect: 'none',
	contain: 'strict'
};

const pickerWrapper: CreateCSSProperties = {
	width: '100%',
	marginTop: 'auto',
	padding: `${pxToRem(15)} ${pxToRem(20)} ${pxToRem(19)}`,
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden',
	zIndex: 10,
	backgroundColor: (props: any) => (props.isDarkMode ? '#303331' : '#fff'),
	borderTopLeftRadius: pxToRem(15),
	borderTopRightRadius: pxToRem(15),
	boxSizing: 'border-box'
};

const pickerColumns: CreateCSSProperties = {
	height: pxToRem(DATE_TIME_PICKER_COLUMNS_HEIGHT),
	marginTop: pxToRem(30),
	marginBottom: pxToRem(30),
	perspective: 1000,
	display: 'flex',
	position: 'relative',
	justifyContent: 'center',
	direction: 'ltr',
	overflow: 'hidden',
	boxSizing: 'border-box'
};

const pickerHighlight: CSSProperties = {
	position: 'absolute',
	left: 0,
	right: 0,
	width: '100%',
	height: pxToRem((DATE_TIME_PICKER_COLUMNS_HEIGHT - DATE_TIME_PICKER_OPTION_HEIGHT) / 2),
	display: 'block',
	pointerEvents: 'none',
	boxSizing: 'border-box',
	zIndex: 10
};

const pickerAboveHighlight: CreateCSSProperties = {
	top: 0,
	borderBottom: (props: any) =>
		props.isDarkMode ? `${pxToRem(1)} solid rgba(255, 255, 255, 0.05)` : `${pxToRem(1)} solid rgba(24, 28, 25, 0.05)`,
	background: (props: any) =>
		props.isDarkMode
			? 'linear-gradient(180deg, RGBA(48, 51, 49, 0.85), RGBA(48, 51, 49, 0.75), RGBA(48, 51, 49, 0.65), transparent)'
			: 'linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.65), transparent)'
};

const pickerBelowHighlight: CreateCSSProperties = {
	bottom: 0,
	borderTop: (props: any) =>
		props.isDarkMode ? `${pxToRem(1)} solid rgba(255, 255, 255, 0.05)` : `${pxToRem(1)} solid rgba(24, 28, 25, 0.05)`,
	background: (props: any) =>
		props.isDarkMode
			? 'linear-gradient(180deg, RGBA(48, 51, 49, 0.85), RGBA(48, 51, 49, 0.75), RGBA(48, 51, 49, 0.65), transparent)'
			: 'linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.65), transparent)'
};

const pickerColumn: CreateCSSProperties = {
	flex: 'unset',
	padding: 0,
	'& .picker-opts': {
		top: '50%',
		transform: `translateY(${pxToRem(-DATE_TIME_PICKER_OPTION_HEIGHT / 2)})`,
		width: pxToRem(70),
		'& .picker-opt': {
			height: pxToRem(DATE_TIME_PICKER_OPTION_HEIGHT),
			fontFamily: DEFAULT_FONT_FAMILY,
			fontSize: pxToRem(20),
			fontWeight: 600,
			lineHeight: 1.5,
			color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(24, 28, 25, 0.5)')
		},
		'& .picker-opt-selected': {
			color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
		}
	}
};

const backdrop: CSSProperties = {
	opacity: '0.4',
	backgroundColor: '#181c19'
};

const blackBar: CreateCSSProperties = {
	width: pxToRem(37),
	height: pxToRem(4),
	marginLeft: 'auto',
	marginRight: 'auto',
	borderRadius: 9999,
	backgroundColor: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};

const cancelButton: CreateCSSProperties = {
	backgroundColor: (props: any) => (props.isDarkMode ? '#303331' : 'rgb(202, 241, 221)'),
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
};
export const styles = createStyles({
	cancelButton,
	picker,
	pickerWrapper,
	pickerColumns,
	pickerHighlight,
	pickerAboveHighlight,
	pickerBelowHighlight,
	pickerColumn,
	backdrop,
	blackBar
});
