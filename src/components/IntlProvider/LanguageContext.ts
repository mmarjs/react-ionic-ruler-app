import * as React from 'react';
import { ILanguageContext } from './IntlProvider.types';

export const initial: ILanguageContext = {
	locale: 'en',
	changeLanguage: () => null
};

export const LanguageContext = React.createContext<ILanguageContext>(initial);

export const useLanguageContext = (): ILanguageContext => {
	return React.useContext(LanguageContext);
};
