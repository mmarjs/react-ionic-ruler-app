import { CheckboxProps } from '@material-ui/core';
export interface ICheckBoxProps extends Pick<CheckboxProps, 'onChange'> {
	className?: string;
	checked: boolean;
	label?: string;
	onValueChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
