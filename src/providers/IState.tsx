interface ISettings {
	isDarkMode: boolean;
}

export interface IState {
	settings: ISettings;
	logged: boolean;
	appLoaded: boolean;
	// notifications: Notification[];
	// firebaseRegistered: Boolean;
}

export interface IAction {
	type: 'LOGOUT' | 'LOGIN' | 'REGISTER' | 'UPDATE_SETTINGS';
	payload?: any | Notification;
}
