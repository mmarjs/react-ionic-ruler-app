import { CreateCSSProperties } from '@material-ui/styles';
import {
	DEFAULT_ICON_BUTTON_SIZE,
	DEFAULT_ICON_LABEL_SIZE,
	ICON_BUTTON_BOX_SHADOW,
	ICON_BUTTON_BOX_SHADOW_INSET
} from './IconButton.variables';
import { DEFAULT_ICON_SIZE } from 'components';
import { createStyles } from '@material-ui/core';
import { font, initial, pxToRem } from 'styles';

const iconButton: CreateCSSProperties = {
	padding: (props: any) => {
		const paddingX = Math.max(0, (initial(props.width, DEFAULT_ICON_BUTTON_SIZE) - initial(props.iconWidth, DEFAULT_ICON_SIZE)) / 2);
		const paddingY = Math.max(
			0,
			(initial(props.height, DEFAULT_ICON_BUTTON_SIZE) -
				initial(props.iconHeight, DEFAULT_ICON_SIZE) -
				(props.label ? initial(props.labelHeight, DEFAULT_ICON_LABEL_SIZE) : 0)) /
				2
		);

		return `${pxToRem(paddingY)} ${pxToRem(paddingX)}`;
	},
	color: (props: any) => (props.isDarkMode && props.black === undefined ? '#fff' : '#000'),
	borderRadius: pxToRem(15),
	backgroundColor: (props: any) => (props.isDarkMode && props.black === undefined ? '#181c19' : '#fff'),
	boxShadow: (props: any) => {
		const shadows = [];

		if (!props.noShadow) {
			shadows.push(props.isDarkMode ? '0 10px 20px 0 #000' : ICON_BUTTON_BOX_SHADOW);
		}

		if (props.outlined) {
			shadows.push(props.isDarkMode ? 'inset 0 0 0 2px #fff' : ICON_BUTTON_BOX_SHADOW_INSET);
		}

		return shadows.join(',');
	},
	'&:hover': {
		backgroundColor: (props: any) => (props.isDarkMode && props.black === undefined ? '#000' : '#f2f2f2')
	},
	'& .MuiTouchRipple-child': {
		borderRadius: pxToRem(15)
	},
	'& .MuiIconButton-label': {
		flexDirection: 'column',
		width: (props: any): any => pxToRem(initial(props.iconWidth, DEFAULT_ICON_SIZE))
	}
};

const iconLabel: CreateCSSProperties = {
	...font({
		fontSize: 10,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	}),
	color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19'),
	opacity: 0.5,
	height: 15
};

export const styles = createStyles({
	iconButton,
	iconLabel
});
