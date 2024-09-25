import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: string;
			secondary: string;
			success: string;
			danger: string;
			warning: string;
			info: string;
			light: string;
			dark: string;
			text: string;
			background: string;
		};
		typography: {
			fontFamily: string;
			fontSizeBase: string;
			headings: {
				h1: string;
				h2: string;
				h3: string;
				h4: string;
				h5: string;
				h6: string;
			};
			lineHeight: string;
		};
		sizes: {
			container: string;
			buttonHeight: string;
			inputHeight: string;
			small: string;
			medium: string;
			large: string;
		};
		breakpoints: {
			mobile: string;
			tablet: string;
			desktop: string;
			largeDesktop: string;
		};
		shadows: {
			small: string;
			medium: string;
			large: string;
		};
		borders: {
			radiusSmall: string;
			radiusMedium: string;
			radiusLarge: string;
			borderColor: string;
		};
		transitions: {
			fast: string;
			normal: string;
			slow: string;
		};
	}
}
