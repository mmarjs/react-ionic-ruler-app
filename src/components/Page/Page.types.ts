import { BoxProps } from '@material-ui/core';
import { GoBackIconButtonProps } from 'components/IconButton';
import { ILinkProps } from 'components';

export type FullPageProps = Omit<IPageProps, 'fullPage'>;

export interface IPageProps extends Pick<BoxProps, 'onClick'> {
	className?: string;
	pageHeaderClassName?: string;
	background?: string;
	backgroundColor?: string;
	fullPage?: boolean;
	canGoBack?: boolean;
	title?: string;
	headerLink?: string | React.ReactElement;
	headerLinkProps?: ILinkProps;
	titleSize?: 'medium' | 'large';
	noHorizontalContentPadding?: boolean;
	goBackIconButtonProps?: GoBackIconButtonProps;
	onRenderBackground?: () => React.ReactElement;
	mainPage?: boolean;
	from?: boolean;
}
