import { css, SerializedStyles } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const headerWrapper = (
	isMobile: boolean,
	isTablet: boolean,
): SerializedStyles => css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;

	.logo-wrapper {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.logo {
		height: 64px;
		width: 64px;
		border-radius: 50%;
	}
	.title {
		color: ${theme.colors.text};
		font-size: ${isMobile
			? theme.typography.headings.h3
			: isTablet
				? theme.typography.headings.h2
				: theme.typography.headings.h1};
	}

	.header-buttons {
		display: flex;
		gap: 8px;
	}
`;
