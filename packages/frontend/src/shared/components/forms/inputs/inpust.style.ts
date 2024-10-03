import { css, SerializedStyles } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const todosInputStyle = (intent: string): SerializedStyles => css`
	border: 1px solid ${intent === 'danger' ? 'red' : 'initial'};
	border-radius: 4px;
	padding: 8px;
	width: 100%;
`;

export const labelStyle = css`
	font-family: ${theme.typography.fontFamily};
	font-weight: ${theme.typography.fontWeight.normal};
	line-height: ${theme.typography.lineHeight};
	color: ${theme.colors.text};
`;

export const inputWrapper = css`
	position: relative;
`;
export const inputStyle = (intent: string): SerializedStyles => css`
	border: 1px solid ${intent === 'danger' ? 'red' : 'initial'};
	border-radius: 4px;
	padding: 8px;
	width: 100%;
	outline: ${intent === 'danger' ? '1px solid red' : 'none'};
`;

export const inputButtonStyle = css`
	position: absolute;
	top: 0;
	right: 8px;
	background-color: transparent;
`;
