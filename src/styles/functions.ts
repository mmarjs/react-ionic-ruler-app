import { DEFAULT_FONT_SIZE } from './variables';
import { FontSize } from 'types';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export const initial = <T>(value: T | 'initial', initialValue: T): T => (value === undefined || value === 'initial' ? initialValue : value);

export const percentage = (x: number): string => `${x * 100}%`;

export const isDarkMode = async () => {
	let isDarkMode = false;
	const appData = await Storage.get({ key: 'appstorage' });

	if (appData) {
		const storage = JSON.parse(appData + '');

		if (storage && storage.settings) isDarkMode = storage.settings;
	}

	return isDarkMode;
};

export const pxToRem = (x: number): string => (x <= 1 && x >= -1 ? (x === 0 ? '0' : '1px') : `${x / 16}rem`);

export function responsiveFontSize(fontSize: FontSize): FontSize {
	switch (fontSize) {
		case 'xx-small':
			fontSize = 9;
			break;

		case 'x-small':
			fontSize = 10;
			break;

		case 'small':
			fontSize = 13;
			break;

		case 'initial':
		case 'medium':
			fontSize = DEFAULT_FONT_SIZE;
			break;

		case 'large':
			fontSize = 18;
			break;

		case 'x-large':
			fontSize = 24;
			break;

		case 'xx-large':
			fontSize = 32;
			break;
	}

	if (typeof fontSize === 'number') {
		fontSize = (pxToRem(fontSize) as any) as number;
	}

	return fontSize;
}
