export type ResponsiveImageProps = Omit<IImageProps, 'responsive'>;

export interface IImageProps {
	className?: string;
	alt?: string;
	src: string;
	srcSet?: string | string[];
	responsive?: boolean;
	x2?: string;
	x3?: string;
	width?: number;
	height?: number;
	maxWidth?: number;
	maxHeight?: number;
	borderRadius?: number;
	rounded?: boolean;
	fullWidth?: boolean;
}
