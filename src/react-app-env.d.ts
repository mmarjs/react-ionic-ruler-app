/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="react-scripts" />

declare module '*.woff';
declare module '*.woff2';

declare module 'css-supports' {
	export default function supports(property: string, value?: string): boolean;
}
