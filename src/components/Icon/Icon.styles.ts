import { CreateCSSProperties } from '@material-ui/styles';
import { classes } from './Icon.classNames';
import { createStyles } from '@material-ui/core';
import { pxToRem } from 'styles';

const icon: CreateCSSProperties = {
	display: 'inline-block',
	flexShrink: 0,
	transform: (props: any) => (props.rotate ? `rotate(${props.rotate}deg)` : undefined),
	'@global': {
		svg: {
			fill: (props: any) => props.fillColor,
			width: (props: any) => pxToRem(props.width),
			height: (props: any) => pxToRem(props.height),
			display: 'block',
			fontSize: (props: any) => pxToRem(props.height),
			transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
			userSelect: 'none',
			overflow: 'hidden',
			boxSizing: 'border-box',
			shapeRendering: 'geometricPrecision'
		},
		[`.${classes.primaryFillColor}, .${classes.primaryColor}.${classes.fill}`]: {
			fill: (props: any) => props.primaryFillColor || props.primaryColor || props.fillColor || props.color || 'currentColor'
		},
		[`.${classes.primaryStrokeColor}, .${classes.primaryColor}.${classes.stroke}`]: {
			stroke: (props: any) => props.primaryStrokeColor || props.primaryColor || props.strokeColor || props.color || 'currentColor'
		},
		[`.${classes.secondaryFillColor}, .${classes.secondaryColor}.${classes.fill}`]: {
			fill: (props: any) => props.secondaryFillColor || props.secondaryColor || props.fillColor || props.color || 'currentColor'
		},
		[`.${classes.secondaryStrokeColor}, .${classes.secondaryColor}.${classes.stroke}`]: {
			stroke: (props: any) => props.secondaryStrokeColor || props.secondaryColor || props.strokeColor || props.color || 'currentColor'
		}
	}
};

export const styles = createStyles({
	icon
});
