export interface IRulerButtonProps {
	price: string;
	bonus: string;
	active?: boolean;
	onRulerButtonClick: (price: string) => void;
}
