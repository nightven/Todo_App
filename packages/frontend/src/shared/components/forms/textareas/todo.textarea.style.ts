import { css, SerializedStyles } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const textareaStyle = (intent: string): SerializedStyles => css`
	border: 1px solid ${intent === 'danger' ? 'red' : 'initial'};
	border-radius: 4px;
	padding: 8px;
	width: 100%;
	resize: vertical;
	overflow: auto;
	height: 80px;
`;

export const labelStyle = css`
	font-family: ${theme.typography.fontFamily};
	font-weight: ${theme.typography.fontWeight.normal};
	line-height: ${theme.typography.lineHeight};
	color: ${theme.colors.text};
`;
