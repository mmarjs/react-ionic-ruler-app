export interface ILanguage {
	langName: string;
	langCode: string;
	text: string;
}
export interface ILanguagesState {
	filteredLanguages?: ILanguage[];
	selectedLanguage: string;
}

export type ILanguagesProps = {};
