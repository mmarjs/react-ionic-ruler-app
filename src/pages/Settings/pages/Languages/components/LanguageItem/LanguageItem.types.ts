export interface ILanguageItemProps {
	className?: string;
	title: string;
	text: string;
	code: string;
	selected?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement>, code: string) => void;
}
