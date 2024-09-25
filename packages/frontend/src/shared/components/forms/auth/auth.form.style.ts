import { css } from '@emotion/react';

export const authContainer = css`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f5f8fa;
`;

export const authCard = css`
	width: 300px;
	padding: 20px;
	text-align: center;
`;

export const authTitle = css`
	margin-bottom: 20px;
`;

export const authButton = css`
	margin: 10px 0;
	width: 100%;
`;

export const authLink = css`
	margin-top: 10px;
	color: #106ba3;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

export const authForm = css`
	margin-top: 20px;
`;

export const authSubmit = css`
	margin-top: 10px;
	width: 100%;
`;
