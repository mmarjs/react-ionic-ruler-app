import { ClassNameMap } from '@material-ui/styles';
import React from 'react';

export interface IStylingProps<ClassKey extends string = string> {
	props?: any;
	useStyles: (props?: any) => ClassNameMap<ClassKey>;
	children: (classes: ClassNameMap<ClassKey>) => React.ReactElement | null;
}
