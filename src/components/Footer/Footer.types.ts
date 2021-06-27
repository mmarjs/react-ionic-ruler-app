import { ILinkProps } from 'components/Link';

export interface IFooterProps {
	leftText?: string;
	leftIcon: string;
	leftLinkProps?: ILinkProps;
	rightLinkProps?: ILinkProps;
	rightText?: string;
	rightIcon: string;
}
