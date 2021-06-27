export declare global {
	// eslint-disable-next-line @typescript-eslint/interface-name-prefix
	interface Document {
		fonts?: {
			onloadingdone?: () => void;
		};
	}
}
