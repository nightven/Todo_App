import { css, SerializedStyles } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const sidebarWrapper = (isMobile: boolean): SerializedStyles => css`
	width: ${isMobile ? '100%' : '200px'};
	display: flex;
	flex-direction: column;
	padding: 8px;
	border: 1px solid ${theme.colors.light};
	border-radius: ${theme.borders.radiusLarge};
	font-family: ${theme.typography.fontFamily};
	font-weight: ${theme.typography.fontWeight.normal};
	line-height: ${theme.typography.lineHeight};
`;

export const menuItem = css`
	padding: 10px;
	cursor: pointer;
	color: ${theme.colors.text};
	&:hover {
		color: ${theme.colors.secondary};
	}
`;

export const activeMenuItem = css`
	${menuItem};
	font-weight: bold;
	background-color: ${theme.colors.primary};
	border-radius: 12px;
`;
