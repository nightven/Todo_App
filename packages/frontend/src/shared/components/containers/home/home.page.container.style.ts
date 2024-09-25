import { css, SerializedStyles } from '@emotion/react';
import { colors } from '~shared/styles';
import { theme } from '~shared/styles/theme';

export const homePageWrapper = (
	isMobile: boolean,
	isTablet: boolean,
): SerializedStyles => css`
	display: flex;
	flex-direction: column;
	align-items: center;
	.homeButtonWrapper {
		display: flex;
		flex-direction: ${isMobile ? 'column' : 'row'};
		gap: 16px;
		width: ${isMobile ? '356px' : '100%'};
		padding: ${theme.sizes.medium};
		justify-content: ${isMobile ? 'center' : 'space-between'};
	}
	.homeButtonWrapper div:first-of-type {
		display: flex;
		flex-wrap: nowrap;
	}

	.searchInput {
		flex-grow: 1;
		max-width: ${isMobile ? '100%' : isTablet ? '250px' : '400px'};
		margin-left: ${isMobile ? '0' : '16px'};
	}

	.inputWrapper {
		position: relative;
		display: inline-block;
	}

	.icon-search {
		position: absolute;
		left: 8px;
		top: 50%;
		transform: translateY(-50%);
		color: ${colors.black};
	}

	.input-search {
		padding: 8px 12px 8px 32px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
		height: 37px;
	}

	.createButton {
		position: ${isMobile || isTablet ? 'fixed' : 'static'};
		${(isMobile || isTablet) &&
		`
			right: 16px;
			bottom: 16px;
			z-index: 100;
		`}
	}
`;

export const allButton = (activeFilter: string): SerializedStyles => css`
	border-radius: 0;
	border-top-left-radius: ${theme.borders.radiusLarge};
	border-bottom-left-radius: ${theme.borders.radiusLarge};
	background-color: ${activeFilter === 'All'
		? theme.colors.secondary
		: theme.colors.primary};
`;

export const privateButton = (activeFilter: string): SerializedStyles => css`
	border-radius: 0;
	background-color: ${activeFilter === 'Private'
		? theme.colors.secondary
		: theme.colors.primary};
`;

export const publicButton = (activeFilter: string): SerializedStyles => css`
	border-radius: 0;
	background-color: ${activeFilter === 'Public'
		? theme.colors.secondary
		: theme.colors.primary};
`;

export const completedButton = (activeFilter: string): SerializedStyles => css`
	border-radius: 0;
	border-top-right-radius: ${theme.borders.radiusLarge};
	border-bottom-right-radius: ${theme.borders.radiusLarge};
	background-color: ${activeFilter === 'Completed'
		? theme.colors.secondary
		: theme.colors.primary};
`;
