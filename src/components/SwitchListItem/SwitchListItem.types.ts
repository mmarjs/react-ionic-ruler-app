import { SwitchProps } from '@material-ui/core';
export interface ISwitchListItemProps extends Pick<SwitchProps, 'onChange' | 'checked' | 'disabled'> {
	className?: string;
	title: string;
	checked: boolean;
	disabled?: boolean;
	name?: string;
	iconName?: string;
	imageUrl?: string;
}
