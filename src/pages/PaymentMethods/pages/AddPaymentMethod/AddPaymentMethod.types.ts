import { RouteComponentProps } from 'react-router';

export type IAddPaymentMethodProps = RouteComponentProps;
export interface ICreditCardProps {
	name: string;
	cardNumber: string;
	expireDate: string;
	cvc: string;
	cardCountry: string;
	zipCode: string;
	cardNumberValid: boolean;
	zipCodeValid: boolean;
	dateValid: boolean;
	cvcValid: boolean;
}
