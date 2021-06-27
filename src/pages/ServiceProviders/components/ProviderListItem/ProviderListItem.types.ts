import { IImageProps } from 'components';

export interface IProviderListItemProps {
	primaryText: string;
	secondaryText?: string;
	canGoTo?: boolean;
	providerIconProps: Pick<IImageProps, 'src' | 'alt'>;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}
