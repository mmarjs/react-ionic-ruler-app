import { SwipeableDrawerProps } from '@material-ui/core';

export interface IMenuProps extends SwipeableDrawerProps {
	className?: string;
	open: boolean;
	onOpen: React.ReactEventHandler<{}>;
	onClose: React.ReactEventHandler<{}>;
	menuItemClick: (href: string) => void;
}
