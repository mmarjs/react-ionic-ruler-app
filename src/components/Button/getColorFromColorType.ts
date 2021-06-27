import {
	BUTTON_BLACK_COLOR_TYPE_BACKGROUND_COLOR,
	BUTTON_BLACK_COLOR_TYPE_DISABLED_BACKGROUND_COLOR,
	BUTTON_BLACK_COLOR_TYPE_HOVERED_BACKGROUND_COLOR,
	BUTTON_BLACK_COLOR_TYPE_TEXT_COLOR,
	BUTTON_GREEN_COLOR_TYPE_BACKGROUND_COLOR,
	BUTTON_GREEN_COLOR_TYPE_DISABLED_BACKGROUND_COLOR,
	BUTTON_GREEN_COLOR_TYPE_DISABLED_BACKGROUND_COLOR_DARK_MODE,
	BUTTON_GREEN_COLOR_TYPE_HOVERED_BACKGROUND_COLOR,
	BUTTON_GREEN_COLOR_TYPE_TEXT_COLOR,
	BUTTON_LIGHT_GREEN_COLOR_TYPE_BACKGROUND_COLOR,
	BUTTON_LIGHT_GREEN_COLOR_TYPE_DISABLED_BACKGROUND_COLOR,
	BUTTON_LIGHT_GREEN_COLOR_TYPE_HOVERED_BACKGROUND_COLOR,
	BUTTON_LIGHT_GREEN_COLOR_TYPE_TEXT_COLOR
} from './Button.variables';
import { ButtonColorType } from './Button.types';

export const getColorFromColorType = (
	colorType: ButtonColorType,
	colorSubject: 'text' | 'background' | 'hoveredBackground' | 'disabledBackground',
	isDarkMode = false
): string | undefined => {
	if (colorType === 'black' || colorType === 'default') {
		switch (colorSubject) {
			case 'text':
				return BUTTON_BLACK_COLOR_TYPE_TEXT_COLOR;

			case 'background':
				return BUTTON_BLACK_COLOR_TYPE_BACKGROUND_COLOR;

			case 'hoveredBackground':
				return BUTTON_BLACK_COLOR_TYPE_HOVERED_BACKGROUND_COLOR;

			case 'disabledBackground':
				return BUTTON_BLACK_COLOR_TYPE_DISABLED_BACKGROUND_COLOR;
		}
	} else if (colorType === 'green') {
		switch (colorSubject) {
			case 'text':
				return BUTTON_GREEN_COLOR_TYPE_TEXT_COLOR;

			case 'background':
				return BUTTON_GREEN_COLOR_TYPE_BACKGROUND_COLOR;

			case 'hoveredBackground':
				return BUTTON_GREEN_COLOR_TYPE_HOVERED_BACKGROUND_COLOR;

			case 'disabledBackground':
				return isDarkMode ? BUTTON_GREEN_COLOR_TYPE_DISABLED_BACKGROUND_COLOR_DARK_MODE : BUTTON_GREEN_COLOR_TYPE_DISABLED_BACKGROUND_COLOR; // #5f8471
		}
	} else if (colorType === 'lightGreen') {
		switch (colorSubject) {
			case 'text':
				return BUTTON_LIGHT_GREEN_COLOR_TYPE_TEXT_COLOR;

			case 'background':
				return BUTTON_LIGHT_GREEN_COLOR_TYPE_BACKGROUND_COLOR;

			case 'hoveredBackground':
				return BUTTON_LIGHT_GREEN_COLOR_TYPE_HOVERED_BACKGROUND_COLOR;

			case 'disabledBackground':
				return BUTTON_LIGHT_GREEN_COLOR_TYPE_DISABLED_BACKGROUND_COLOR;
		}
	}

	return undefined;
};
