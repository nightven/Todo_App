import { colors } from './colors';

export const theme = {
	colors: {
		primary: `${colors.primaryButton}`,
		secondary: `${colors.activeButton}`,
		success: `${colors.malachite}`,
		danger: `${colors.danger}`,
		warning: `${colors.bitterLemon}`,
		info: `${colors.info}`,
		light: `${colors.white}`,
		dark: `${colors.independence}`,
		text: `${colors.lotion}`,
		background: `${colors.bgColor}`,
	},
	typography: {
		fontFamily: '"Manrope", sans-serif',
		fontSizeBase: '16px',
		headings: {
			h1: '32px',
			h2: '28px',
			h3: '24px',
			h4: '20px',
			h5: '18px',
			h6: '16px',
		},
		lineHeight: '1.5',
		fontWeight: {
			normal: 'normal',
			bold: 'bold',
		},
	},
	sizes: {
		container: '1200px',
		buttonHeight: '40px',
		inputHeight: '36px',
		small: '8px',
		medium: '16px',
		large: '24px',
	},
	breakpoints: {
		mobile: '425px',
		tablet: '768px',
		desktop: '1024px',
		largeDesktop: '2580px',
	},
	shadows: {
		small: `0 1px 3px ${colors.shadowBoxColor}`,
		medium: `0 4px 6px ${colors.shadowBoxColor}`,
		large: `0 10px 20px ${colors.shadowBoxColor}`,
	},
	borders: {
		radiusSmall: '4px',
		radiusMedium: '8px',
		radiusLarge: '12px',
		borderColor: `${colors.white}`,
	},
	transitions: {
		fast: '0.2s ease-in-out',
		normal: '0.5s ease-in-out',
		slow: '0.8s ease-in-out',
	},
};
