export interface IBottomSheetProps {
	open: boolean;
	title?: string;
	description?: string;
	darkMode?: boolean;
	hasCloseButton?: boolean;
	hasFindMeButton?: boolean;
	outDecorator?: boolean;
	hasBlackBar?: boolean;
	onBottomSheetChange: (isOpen: boolean) => void;
	onCloseButtonClick?: React.ReactEventHandler<{}>;
}
