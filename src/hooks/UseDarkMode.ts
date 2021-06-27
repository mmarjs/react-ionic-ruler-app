import { AppContext } from 'providers/State';
import React from 'react';

export const useDarkMode = (): boolean => {
	const {
		state: {
			settings: { isDarkMode }
		}
	} = React.useContext(AppContext);

	return isDarkMode;
};
