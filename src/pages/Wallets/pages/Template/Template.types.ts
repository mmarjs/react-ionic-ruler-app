import { RouteComponentProps } from 'react-router';
export type ITemplateProps = RouteComponentProps;

export interface ITemplateDataProps {
	templateName: string;
	amount: string;
	walletType: string;
	paymentType: string;
	walletAddress: string;
}
