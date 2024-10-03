import { css, SerializedStyles } from '@emotion/react';
import { colors } from '~shared/styles';
import { theme } from '~shared/styles/theme';

export const pageContainer = (isMobile: boolean): SerializedStyles => css`
	display: flex;
	flex-direction: ${isMobile ? 'column' : 'row'};
	gap: 4px;
`;

export const cardWrapper = (isMobile: boolean): SerializedStyles => css`
	background: ${colors.bgColor};
	border: 1px solid ${theme.colors.light};
	border-radius: ${theme.borders.radiusLarge};
	min-height: ${isMobile
		? 'calc(100vh - 98px - 15px - 162px - 16px)'
		: 'calc(100vh - 108px - 40px)'};
`;

export const contentWrapper = css`
	flex-grow: 1;
`;

export const userInfoWrapper = css`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
