import { css, SerializedStyles } from '@emotion/react';

export const textareaStyle = (intent: string): SerializedStyles => css`
	border: 1px solid ${intent === 'danger' ? 'red' : 'initial'};
	border-radius: 4px;
	padding: 8px;
	width: 100%;
	resize: vertical;
	overflow: auto;
	height: 80px;
`;
