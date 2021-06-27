import { RatingProps } from '@material-ui/lab';
export interface IRatingProps extends Pick<RatingProps, 'onChange'> {
	emptyIconName: string;
	iconName: string;
	className?: string;
	value?: number | null;
	onValueChange?: (event: React.ChangeEvent<{}>, value: number | null) => void;
}
