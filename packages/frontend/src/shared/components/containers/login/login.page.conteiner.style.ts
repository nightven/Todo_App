import { css } from '@emotion/react';
import { colors } from '~shared/styles';
import { theme } from '~shared/styles/theme';

export const authContainer = css`
	background: ${theme.colors.background};
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.authCard {
		background: ${theme.colors.background};

		width: 300px;
		border-radius: ${theme.borders.radiusLarge};
		box-shadow: ${theme.shadows.large};
	}

	.buttonWrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 24px;
		margin-top: 54px;
	}

	.authTitle {
		margin-bottom: 20px;
		color: ${colors.lotion};
		text-align: center;
	}
`;
