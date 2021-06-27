import { IIconProps } from 'components';

export type LinkColorType = 'default' | 'black' | 'green';

export interface ILinkProps {
	href?: string;
	iconName?: IIconProps['iconName'];
	iconProps?: IIconProps;
	colorType?: LinkColorType;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
	className?: string;
}
