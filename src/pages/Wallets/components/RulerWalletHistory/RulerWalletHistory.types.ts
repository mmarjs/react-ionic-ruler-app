export interface IRulerWalletHistoryProps {
	time: string;
	description: string;
	hash: string;
	type: 'send' | 'receive';
	amount: string;
}
