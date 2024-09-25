import { css, SerializedStyles } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const todoWrapper = (tablet: boolean): SerializedStyles => css`
	height: ${tablet ? '450px' : '350px'};

	.cardStyle {
		background: ${theme.colors.background};
		height: 100%;
		max-width: ${tablet ? '758px' : '100%'};
		border-radius: ${theme.borders.radiusLarge};
		box-shadow: ${theme.shadows.large};
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.allButtonWrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.changeButtonWrapper {
		display: flex;
		gap: 12px;
		justify-content: end;
	}
`;

export const iconButtonStyles = css`
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
