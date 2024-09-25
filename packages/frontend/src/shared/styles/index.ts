export * from './colors';
import { css } from '@emotion/react';

export const container = css`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;

	@media (max-width: 2580px) {
		max-width: 1200px;
	}

	@media (max-width: 768px) {
		max-width: 768px;
		padding: 15px;
	}

	@media (max-width: 425px) {
		max-width: 100%;
		padding: 10px;
	}
`;
