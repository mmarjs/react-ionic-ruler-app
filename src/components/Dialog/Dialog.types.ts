import { DialogProps } from '@material-ui/core';

export interface IDialogProps extends Omit<DialogProps, 'disableElevation' | 'classes'> {
	className?: string;
	image?: string;
	hasClose?: boolean;
	illustrationName?: string;
	onImageDelete?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
