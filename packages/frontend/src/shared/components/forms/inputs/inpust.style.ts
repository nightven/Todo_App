import { css, SerializedStyles } from '@emotion/react';

export const todosInputStyle = (intent: string): SerializedStyles => css`
	border: 1px solid ${intent === 'danger' ? 'red' : 'initial'};
	border-radius: 4px;
	padding: 8px;
	width: 100%;
`;

export const authImputWrapper = css`
	position: relative;
`;
export const authInputStyle = (intent: string): SerializedStyles => css`
	border: 1px solid ${intent === 'danger' ? 'red' : 'initial'};
	border-radius: 4px;
	padding: 8px;
	width: 100%;
	outline: ${intent === 'danger' ? '1px solid red' : 'none'};
`;

export const authButtonStyle = css`
	position: absolute;
	top: 0;
	right: 8px;
	background-color: transparent;
`;
