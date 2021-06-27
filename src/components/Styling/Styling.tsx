import { IStylingProps } from './Styling.types';
import React from 'react';

export function Styling<ClassKey extends string = string>({
	useStyles,
	props,
	children
}: IStylingProps<ClassKey>): React.ReactElement | null {
	const classes = useStyles(props);

	return children(classes);
}
