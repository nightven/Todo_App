import { css, SerializedStyles } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const title = css`
	font-family: ${theme.typography.fontFamily};
	font-weight: ${theme.typography.fontWeight.bold};
	font-size: ${theme.typography.headings.h3};
	line-height: ${theme.typography.lineHeight};
	text-align: center;
`;

export const formWrapper = (isMobile: boolean): SerializedStyles => css`
	margin: 0 auto;
	margin-top: ${isMobile ? '16px' : '40px'};
	width: ${isMobile ? '100%' : '400px'};
	border: 1px solid white;
	padding: 16px;
	border-radius: 16px;
`;
