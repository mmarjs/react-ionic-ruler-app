import { BoxProps } from '@material-ui/core';
export interface ISidebarMenuItemProps extends Pick<BoxProps, 'onClick'> {
	className?: string;
	title?: string;
	image?: any;
	href?: string;
}
