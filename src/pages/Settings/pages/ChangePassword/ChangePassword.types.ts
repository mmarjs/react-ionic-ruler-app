import { IntlShape } from 'react-intl';

export interface IChangePasswordState {
	oldPassword: string;
	oldPasswordValid: boolean;
	newPassword: string;
	newPasswordValid: boolean;
	confirmedPassword: string;
	newPasswordMatch: boolean;
	showDialog: boolean;
}

export interface IChangePasswordProps {
	intl: IntlShape;
}
