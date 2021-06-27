import { InputProps } from '@material-ui/core';
export interface ISearchBoxProps extends Pick<InputProps, 'onChange'> {
	className?: string;
	label?: string;
}
