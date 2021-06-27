import { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';

interface IStyles extends Partial<Record<SwitchClassKey, string>> {
	focusVisible?: string;
}

export interface ISwitchProps extends SwitchProps {
	classes?: IStyles;
}
