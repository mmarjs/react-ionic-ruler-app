import { IState, IAction } from 'providers/IState';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const reducer = (state: IState, action: IAction) => {
	switch (action.type) {
		case 'UPDATE_SETTINGS': {
			return { ...state, settings: action.payload };
		}
		case 'LOGOUT': {
			Storage.clear().then(() => {
				console.log('storage cleaned');
			});
			return { ...state, user: null, salon: null, wizard: true, appLoaded: null, code: null, logged: null };
		}
	}
	return state;
};

export default reducer;
