import { IPaymentMethodProps } from './PaymentMethods.types';
export const paymentMethodTypes: Array<IPaymentMethodProps> = [
	{
		iconName: 'add-payment',
		buttonText: 'payment_methods.add_payment_method.card'
	},
	{
		iconName: 'paypal',
		buttonText: 'payment_methods.add_payment_method.paypal'
	}
];
