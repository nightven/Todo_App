import { useTheme } from '@emotion/react';
import { useMediaQuery } from 'react-responsive';
import { Theme } from '@emotion/react';

interface UseCustomThemeReturn {
	theme: Theme;
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
}

export const useCustomTheme = (): UseCustomThemeReturn => {
	const theme = useTheme() as Theme;

	const isMobile = useMediaQuery({
		query: '(min-width: 320px) and (max-width: 425px)',
	});

	const isTablet = useMediaQuery({
		query: '(min-width: 426px) and (max-width: 768px)',
	});

	const isDesktop = useMediaQuery({
		query: '(min-width: 769px) and (max-width: 2560px)',
	});

	return { theme, isMobile, isTablet, isDesktop };
};
