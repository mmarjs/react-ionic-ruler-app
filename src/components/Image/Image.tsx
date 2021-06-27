import { IImageProps, ResponsiveImageProps } from './Image.types';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Image.styles';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Image: React.FunctionComponent<IImageProps> = ({
	className,
	responsive,
	rounded,
	fullWidth,
	width = fullWidth ? '100%' : undefined,
	height,
	maxWidth = responsive ? '100%' : undefined,
	maxHeight,
	borderRadius,
	src,
	srcSet,
	x2,
	x3,
	alt
}) => {
	const classes = useStyles({
		width,
		height,
		maxWidth,
		maxHeight,
		borderRadius,
		responsive,
		rounded
	});

	srcSet = Array.isArray(srcSet) ? srcSet : srcSet ? [srcSet] : [];

	if (x2) {
		srcSet.push(x2);
	}

	if (x3) {
		srcSet.push(x3);
	}

	if (srcSet.length > 0) {
		srcSet.unshift(`${src} x1`);
	}

	return (
		<div className={clsx(classes.imageContainer, className)}>
			<img className={classes.image} src={src} alt={alt || ''} srcSet={srcSet.length > 0 ? srcSet.join(',') : undefined} />
		</div>
	);
};

export const ResponsiveImage: React.FunctionComponent<ResponsiveImageProps> = props => <Image responsive {...props} />;
