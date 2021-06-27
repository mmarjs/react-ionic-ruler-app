import { IOptionType, IRulerPriceBonusProps } from './pages/AddFunds/AddFunds.types';
import { IRulerWalletHistoryProps } from './components/RulerWalletHistory/RulerWalletHistory.types';
// import { ITemplateDataProps } from './pages/Template/Template.types';

export const createWalletTypes = [
	{
		iconName: 'group',
		buttonText: 'wallets.create_wallet.ruler_token'
	},
	{
		iconName: 'ethereum',
		buttonText: 'wallets.create_wallet.ethereum'
	},
	{
		iconName: 'bitcoin',
		buttonText: 'wallets.create_wallet.bitcoin'
	},
	{
		iconName: 'bnb-token',
		buttonText: 'wallets.create_wallet.bnb_token'
	}
];

export const createWalletWords: Array<string> = ['art', 'oxygen', 'title', 'ritual', 'buddy', 'run', 'inherit', 'fun', 'part'];

export const rulerPriceBonusData: Array<IRulerPriceBonusProps> = [
	{
		rulerPrice: '5',
		rulerBonus: '+15%'
	},
	{
		rulerPrice: '10',
		rulerBonus: '+20%'
	},
	{
		rulerPrice: '15',
		rulerBonus: '+25%'
	}
];

// export const walletTypes: Array<IOptionType> = [
// 	{
// 		value: 'ruler_token',
// 		label: 'wallets.create_wallet.ruler_token'
// 	},
// 	{
// 		value: 'ethereum',
// 		label: 'wallets.create_wallet.ethereum'
// 	},
// 	{
// 		value: 'bitcoin',
// 		label: 'wallets.create_wallet.bitcoin'
// 	},
// 	{
// 		value: 'bnb_token',
// 		label: 'wallets.create_wallet.bnb_token'
// 	}
// ];

export const paymentMethodTypes: Array<IOptionType> = [
	{
		value: 'credit_card',
		label: 'wallets.add_funds.credit_card'
	},
	{
		value: 'paypal',
		label: 'wallets.add_funds.paypal'
	}
];

// export const paymentTemplate: Array<ITemplateDataProps> = [
// 	{
// 		templateName: 'To my friend',
// 		amount: '10',
// 		walletType: 'ruler_token',
// 		paymentType: 'credit_card',
// 		walletAddress: '1BvBMSEYstWetqTFn5Au4m4GFg5Au4m4GFg'
// 	},
// 	{
// 		templateName: 'To wife',
// 		amount: '15',
// 		walletType: 'bitcoin',
// 		paymentType: 'credit_card',
// 		walletAddress: '2Cs9vBMSEYstWetqTFn5Au4m4GFg5Au4m4GFg'
// 	}
// ];

export const rulerWalletHistory: Array<{ date: string; data: IRulerWalletHistoryProps[] }> = [
	{
		date: 'Saturday, 26 Nov 2019',
		data: [
			{
				time: '12:00',
				description: "Wallet's add funds",
				hash: 'Tx Hash: a1075db55d416d3ca199f55bdsfsdfsdfsdfsdfsdfsdfsd',
				type: 'send',
				amount: '1500'
			},
			{
				time: '12:00',
				description: 'Trip payment',
				hash: 'Tx Hash: a1075db55d416d3ca199f55bsdfsdfsdfsdfsdfsdfsddfsd',
				type: 'receive',
				amount: '1500'
			}
		]
	},
	{
		date: 'Sunday, 27 Nov 2019',
		data: [
			{
				time: '12:00',
				description: "Wallet's add funds",
				hash: 'Tx Hash: a1075db55d416d3ca199f55bdsfsdfsdfsdfsdfsdfsdfsd',
				type: 'send',
				amount: '1500'
			},
			{
				time: '12:00',
				description: 'Trip payment',
				hash: 'Tx Hash: a1075db55d416d3ca199f55bsdfsdfsdfsdfsdfsdfsddfsd',
				type: 'receive',
				amount: '1500'
			}
		]
	}
];
